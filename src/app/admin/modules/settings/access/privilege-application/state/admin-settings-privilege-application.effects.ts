import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { AddUserGQL } from 'src/app/admin/api/generated/add-user-role.mutation.generated';
import { DeletePrivilegeApplicationGQL } from 'src/app/admin/api/generated/delete-privilege-application.mutation.generated';
import { GetPrivilegeApplicationsGQL } from 'src/app/admin/api/generated/get-privilege-application.query.generated';
import { GetRolesGQL } from 'src/app/admin/api/generated/get-roles.query.generated';
import { PageableList_PrivilegeApplicationEntity, QueryOperator, RoleEntity } from 'src/app/core/api/generated/schema';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { accessRoute } from '../../admin-settings-access-routing.module';
import { AdminSettingsPrivilegeApplicationActions } from './admin-settings-privilege-application.actions';
import { selectParams } from './admin-settings-privilege-application.selectors';

@Injectable()
export class AdminSettingsPrivilegeApplicationEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsPrivilegeApplicationActions.updateParams,
      AdminSettingsPrivilegeApplicationActions.applicationDeleted,
      AdminSettingsPrivilegeApplicationActions.roleAssigned,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getPrivilegeApplicationsService.watch({ 
      params:{
        ...params,
        expression:{
          entity:{
            path: 'accepted',
            operator: QueryOperator.Equal,
            value: 'false'
          }
        }
      }
    }).valueChanges),
    map(response => AdminSettingsPrivilegeApplicationActions.setOverviewData(response.data.getPrivilegeApplications as PageableList_PrivilegeApplicationEntity))
  ));

  deleteApplication = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.deleteApplication),
    switchMap(action => {
      const fullName = `${action.application?.user?.firstName} ${action.application?.user?.lastName}`;
      return this.confirmService
      .confirm({ type: ConfirmType.Delete, context: fullName }).pipe(
          switchMap(confirmed => confirmed ? of(action.application) : EMPTY)
        );
    }),
    switchMap(user => this.deleteApplicationService.mutate({
      id: user?.id
    })),
    map(() => AdminSettingsPrivilegeApplicationActions.applicationDeleted())
  ));

  applicationDeleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.applicationDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  getRoles = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.getRoles),
    switchMap(action => this.getRolesService.watch({
      params: {
        expression: {
          entity: {
            path: 'privileges.id',
            operator: QueryOperator.Equal,
            value: action.rolePrivilegeId
          }
        }
      }
    }).valueChanges.pipe(
      map(response => AdminSettingsPrivilegeApplicationActions.rolesRetrieved(response.data.getRoles?.result as RoleEntity[]))
    ))
  ));

  assignRole = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.assignRole),
    switchMap(action => 
      this.addUserService.mutate({
        roleId: action?.roleId,
        userId: action?.userId
      }).pipe(
        switchMap(() => 
          this.deleteApplicationService.mutate({
            id: action.applicationId
          })
        )
      )
    ),
    map(() => AdminSettingsPrivilegeApplicationActions.roleAssigned())
  ));

  roleAssigned = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPrivilegeApplicationActions.roleAssigned),
    tap(() => this.router.navigate([adminUrl, accessRoute, 'privilege-applications'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));
    
  constructor(
    private actions: Actions,
    private addUserService: AddUserGQL,
    private confirmService: ConfirmService,
    private deleteApplicationService: DeletePrivilegeApplicationGQL,
    private getPrivilegeApplicationsService: GetPrivilegeApplicationsGQL,
    private getRolesService: GetRolesGQL,
    private router: Router,
    private store: Store,
  ) {}
}
