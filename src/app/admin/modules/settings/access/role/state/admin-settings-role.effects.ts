import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { DeleteRoleGQL } from 'src/app/admin/api/generated/delete-role.mutation.generated';
import { GetRolePrivilegesGQL } from 'src/app/admin/api/generated/get-privileges.query.generated';
import { GetRoleGQL } from 'src/app/admin/api/generated/get-role.query.generated';
import { GetRolesGQL } from 'src/app/admin/api/generated/get-roles.query.generated';
import { GetUsersGQL } from 'src/app/admin/api/generated/get-users.query.generated';
import { SaveRoleGQL } from 'src/app/admin/api/generated/save-role.mutation.generated';
import {
  PageableList_RoleEntity,
  RolePrivilegeEntity,
  UserEntity,
} from 'src/app/core/api/generated/schema';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { accessRoute } from '../../admin-settings-access-routing.module';
import { AdminSettingsRoleActions } from './admin-settings-role.actions';
import { selectParams } from './admin-settings-role.selectors';

@Injectable()
export class AdminSettingsRoleEffects {
  updateParams = createEffect(() =>
    this.actions.pipe(
      ofType(
        AdminSettingsRoleActions.updateParams,
        AdminSettingsRoleActions.roleDeleted
      ),
      withLatestFrom(this.store.select(selectParams)),
      switchMap(
        ([, params]) =>
          this.getRolesService.watch({
            params,
          }).valueChanges
      ),
      map((response) =>
        AdminSettingsRoleActions.setOverviewData(
          response.data.getRoles as PageableList_RoleEntity
        )
      )
    )
  );

  getRole = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsRoleActions.getRole),
      switchMap(
        (action) =>
          this.getRoleService.watch({
            entity: { id: action.entityId },
          }).valueChanges
      ),
      map((response) =>
        AdminSettingsRoleActions.roleRetrieved(response.data.getRole)
      )
    )
  );

  getPrivileges = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsRoleActions.getPrivileges),
      switchMap(() => this.getRolePrivilegesService.watch().valueChanges),
      map((response) =>
        AdminSettingsRoleActions.privilegesRetrieved(
          response.data.getRolePrivileges?.result as RolePrivilegeEntity[]
        )
      )
    )
  );

  getUsers = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsRoleActions.getUsers),
      switchMap(
        () =>
          this.getUsersService.watch({
            params: {
              sort: 'firstName',
            },
          }).valueChanges
      ),
      map((response) =>
        AdminSettingsRoleActions.usersRetrieved(
          response.data.getUsers?.result as UserEntity[]
        )
      )
    )
  );

  save = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsRoleActions.save),
      switchMap((action) =>
        this.saveRoleService.mutate({
          entity: action.role,
        })
      ),
      map(() => AdminSettingsRoleActions.saved())
    )
  );

  saved = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsRoleActions.saved),
      tap(() => this.router.navigate([adminUrl, accessRoute, 'role'])),
      map(() =>
        CoreActions.setFeedback({
          type: FeedbackType.Success,
          labelMessage: 'savedSuccessfully',
        })
      )
    )
  );

  cancelled = createEffect(
    () =>
      this.actions.pipe(
        ofType(AdminSettingsRoleActions.cancelled),
        tap(() => this.router.navigate([adminUrl, accessRoute, 'role']))
      ),
    { dispatch: false }
  );

  deleteRole = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsRoleActions.deleteRole),
      switchMap((action) =>
        this.confirmService
          .confirm({ type: ConfirmType.Delete, context: action.role?.name })
          .pipe(switchMap((confirmed) => (confirmed ? of(action.role) : EMPTY)))
      ),
      switchMap((role) =>
        this.deleteRoleService.mutate({
          id: role?.id,
        })
      ),
      map(() => AdminSettingsRoleActions.roleDeleted())
    )
  );

  roleDeleted = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsRoleActions.roleDeleted),
      map(() =>
        CoreActions.setFeedback({
          type: FeedbackType.Success,
          labelMessage: 'deletedSuccessfully',
        })
      )
    )
  );

  constructor(
    private actions: Actions,
    private confirmService: ConfirmService,
    private deleteRoleService: DeleteRoleGQL,
    private getRoleService: GetRoleGQL,
    private getRolePrivilegesService: GetRolePrivilegesGQL,
    private getRolesService: GetRolesGQL,
    private getUsersService: GetUsersGQL,
    private saveRoleService: SaveRoleGQL,
    private store: Store,
    private router: Router,
  ) {}
}
