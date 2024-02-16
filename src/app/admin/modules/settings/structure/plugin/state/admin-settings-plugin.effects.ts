import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { ChangePluginActivationGQL } from 'src/app/admin/api/generated/change-plugin-activation.mutation.generated';
import { GetPluginGQL } from 'src/app/admin/api/generated/get-plugin.query.generated';
import { GetPluginsGQL } from 'src/app/admin/api/generated/get-plugins.query.generated';
import { SavePluginGQL } from 'src/app/admin/api/generated/save-plugin.mutation.generated';
import { settingsUrl } from 'src/app/admin/constants/admin.constants';
import { PageableList_PluginEntity, PluginEntity } from 'src/app/core/api/generated/schema';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { PortalActions } from 'src/app/portal/state/portal.actions';
import { structureRoute } from '../../admin-settings-structure.routing.module';
import { AdminSettingsPluginActions } from './admin-settings-plugin.actions';
import { selectParams, } from './admin-settings-plugin.selectors';

@Injectable()
export class AdminSettingsPluginEffects {
  updateParams = createEffect(() =>
    this.actions.pipe(
      ofType(
        AdminSettingsPluginActions.updateParams,
        AdminSettingsPluginActions.pluginToggled
      ),
      withLatestFrom(this.store.select(selectParams)),
      switchMap(([, params]) => this.getPluginsService.watch({
          params,
        }).valueChanges
      ),
      map((response) =>
        AdminSettingsPluginActions.setOverviewData(
          response.data.getPlugins as PageableList_PluginEntity
        )
      )
    )
  );

  togglePlugin = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsPluginActions.togglePlugin),
      map(action => ({
        id: action.plugin?.id,
        active: !action.plugin?.active,
      })),
      switchMap(plugin => this.confirmService
        .confirm({ type: ConfirmType.Change,
          context: plugin.active
            ? 'thisWillActivateFeature'
            : 'cautionThisWillDeactivateFeature' }).pipe(
          switchMap(confirmed => confirmed
            ? of(plugin)
            : EMPTY
          )
        )
      ),
      switchMap(entity => this.changePluginActivationService.mutate({
        pluginId: entity.id,
        active: entity.active
      })),
      map(() => AdminSettingsPluginActions.pluginToggled())
    )
  );

  getPlugin = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginActions.getPlugin),
    switchMap((action) => this.getPluginService.watch({
      entity: {
        id: action.id
      }
    }).valueChanges),
    map(response => response.data.getPlugin?.id
      ? AdminSettingsPluginActions.setPlugin(response.data.getPlugin as PluginEntity)
      : PortalActions.notFound())
  ));

  savePlugin = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginActions.savePlugin),
    switchMap(action => this.savePluginService.mutate(
      {
        entity: action.plugin
      }
    )),
    map(response => AdminSettingsPluginActions.pluginSaved())
  ));

  pluginSaved = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginActions.pluginSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'pluginSaved'
    }))
  ));

  cancelled = createEffect(
    () =>
      this.actions.pipe(
        ofType(AdminSettingsPluginActions.cancelled),
        tap(() => this.router.navigate([adminUrl, settingsUrl, structureRoute, 'plugins']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions: Actions,
    private changePluginActivationService: ChangePluginActivationGQL,
    private confirmService: ConfirmService,
    private getPluginService: GetPluginGQL,
    private getPluginsService: GetPluginsGQL,
    private router: Router,
    private store: Store,
    private savePluginService: SavePluginGQL
  ) {}
}
