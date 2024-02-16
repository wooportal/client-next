import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { DeleteAddressGQL } from 'src/app/admin/api/generated/delete-address.mutation.generated';
import { GetAddressGQL } from 'src/app/admin/api/generated/get-address.query.generated';
import { GetAddressesGQL } from 'src/app/admin/api/generated/get-addresses.query.generated';
import { SaveAddressGQL } from 'src/app/admin/api/generated/save-address.mutation.generated';
import { settingsUrl } from 'src/app/admin/constants/admin.constants';
import { PageableList_AddressEntity } from 'src/app/core/api/generated/schema';
import { adminUrl, } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { locationRoute } from '../../admin-settings-location.routing.module';
import { AdminSettingsAddressActions } from './admin-settings-address.actions';
import { selectParams } from './admin-settings-address.selectors';

@Injectable()
export class AdminSettingsAddressEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsAddressActions.updateParams,
      AdminSettingsAddressActions.deleted
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getAddressesService.watch({
      params,
    }).valueChanges),
    map(response => AdminSettingsAddressActions.setOverviewData(response.data.getAddresses as PageableList_AddressEntity))
  ));

  getAddress = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsAddressActions.getAddress),
    switchMap(action => this.getAddressService.watch({
      entity: { id: action.entityId }
    }).valueChanges),
    map(response => AdminSettingsAddressActions.addressRetrieved(response.data.getAddress))
  ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsAddressActions.cancelled),
    tap(() => this.router.navigate([adminUrl, settingsUrl, locationRoute, 'addresses'])),
  ), { dispatch: false });

  save = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsAddressActions.save),
    switchMap(action => this.saveAddressService.mutate({
      entity: action.address
    })),
    map(() => AdminSettingsAddressActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsAddressActions.saved),
    tap(() => this.router.navigate([adminUrl, settingsUrl, locationRoute, 'addresses'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  deleteAddress = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsAddressActions.delete),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.address?.street + ' ' + action.address?.houseNumber }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.address)
          : EMPTY
        )
      )
    ),
    switchMap(address => this.deleteAddressService.mutate({
      id: address?.id
    })),
    map(() => AdminSettingsAddressActions.deleted())
  ));

  addressDeleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsAddressActions.deleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private confirmService: ConfirmService,
    private deleteAddressService: DeleteAddressGQL,
    private getAddressService: GetAddressGQL,
    private getAddressesService: GetAddressesGQL,
    private saveAddressService: SaveAddressGQL,
    private router: Router,
    private store: Store,
  ) {}
}
