import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_InfoMediaEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDialogService } from 'src/app/shared/confirmDialog/dialog-confirm.service';
import { ConfirmDialogType } from 'src/app/shared/confirmDialog/typings/confirm-dialog';
import { GetInfoMediaCardsGQL } from 'src/app/shared/widgets/card/api/generated/get-info-media-cards.query.generated';
import { DeleteInfoMediumGQL } from '../../../api/generated/delete-medium.mutation.generated';
import { MediaAdminOverviewActions } from './media-admin-overview.actions';
import { selectParams } from './media-admin-overview.selectors';

@Injectable()
export class MediaAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      MediaAdminOverviewActions.updateParams,
      MediaAdminOverviewActions.mediaDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getInfoMediaService.watch({
      params,
    }).valueChanges),
    map(response => MediaAdminOverviewActions.setOverviewData(response.data.getInfoMedia as PageableList_InfoMediaEntity))
  ));

  deleteMedia = createEffect(() => this.actions.pipe(
    ofType(MediaAdminOverviewActions.deleteMedia),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmDialogType.Delete, context: action.media?.media?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.media)
          : EMPTY
        )
      )
    ),
    switchMap(media => this.deleteInfoMediaService.mutate({
      id: media?.id
    })),
    map(() => MediaAdminOverviewActions.mediaDeleted())
  ));

  eventDeleted = createEffect(() => this.actions.pipe(
    ofType(MediaAdminOverviewActions.mediaDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private getInfoMediaService: GetInfoMediaCardsGQL,
    private deleteInfoMediaService: DeleteInfoMediumGQL,
    private store: Store,
    private confirmDialogService: ConfirmDialogService
  ) {}
}
