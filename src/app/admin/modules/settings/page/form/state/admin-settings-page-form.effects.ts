import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, tap } from 'rxjs';
import { GetPageDetailsGQL } from 'src/app/admin/api/generated/get-page-details.query.generated';
import { SavePageGQL } from 'src/app/admin/api/generated/save-page.mutation.generated';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { PageEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { AdminSettingsPageFormActions } from './admin-settings-page-form.actions';

@Injectable()
export class AdminSettingsPageFormEffects {

  getPage = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageFormActions.getPage),
    switchMap((action) => this.getPageService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getPage?.id
      ? AdminSettingsPageFormActions.setPage(response.data.getPage as PageEntity)
      : AdminActions.notFound())
  ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageFormActions.cancelled),
    tap(() => this.router.navigate([`/admin/settings/pages/overview`])),
  ), { dispatch: false });

  save = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageFormActions.save),
    switchMap(action => this.savePageService.mutate({
      entity: action.page
    })),
    map(() => AdminSettingsPageFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageFormActions.saved),
    tap(() => this.router.navigate([`/admin/settings/pages/overview`])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));
  
  constructor(
    private savePageService: SavePageGQL,
    private getPageService: GetPageDetailsGQL,
    private actions: Actions,
    private router: Router) { 
  }
}
