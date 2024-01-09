import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ContestParticipationEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ContestAdminDetailsParticipationActions } from './contest-admin-details-participation.actions';
import { selectParams, selectSlug } from './contest-admin-details-participation.selectors';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { GetContestParticipationsGQL } from 'src/app/features/contest/api/generated/get-contest-participations.query.generated';
import { DeleteContestParticipationGQL } from 'src/app/features/contest/api/generated/delete-contest-particiation.mutation.generated';
import { SaveContestParticipationGQL } from 'src/app/features/contest/api/generated/save-contest-participation.mutation.generated';


@Injectable()
export class ContestAdminDetailsParticipationEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ContestAdminDetailsParticipationActions.updateParams,
      ContestAdminDetailsParticipationActions.participationDeleted,
      ContestAdminDetailsParticipationActions.participationSaved
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, slug, params]) => this.getContestParticipationsService.watch({
      params: {
        ...params,
        expression: {
          entity: {
            path: 'contest.slug',
            operator: QueryOperator.Equal,
            value: slug
          }
        }
      },
    }).valueChanges),
    map(response => ContestAdminDetailsParticipationActions.setParticipations(response.data.getContestParticipations as PageableList_ContestParticipationEntity))
  ));

  deleteParticipation = createEffect(() => this.actions.pipe(
    ofType(ContestAdminDetailsParticipationActions.deleteParticipation),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.participation?.userContext?.user?.email })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.participation)
          : EMPTY
        )
      )
    ),
    switchMap(Contest => this.deleteContestParticipationService.mutate({
      id: Contest?.id
    })),
    map(() => ContestAdminDetailsParticipationActions.participationDeleted())
  ));

  ParticipationDeleted = createEffect(() => this.actions.pipe(
    ofType(ContestAdminDetailsParticipationActions.participationDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  saveParticipation = createEffect(() =>
    this.actions.pipe(
      ofType(ContestAdminDetailsParticipationActions.saveParticipation),
      switchMap((action) => {
        const entityInput = {
          id: action.participation?.id,
          approved: !action.participation?.approved,
          placement: action.participation?.placement
        };
        return this.saveContestParticipationService.mutate(
          {
            entity: entityInput
          })
      }
      ),
      map(() => ContestAdminDetailsParticipationActions.participationSaved())
    )
  );


  constructor(
    private actions: Actions,
    private getContestParticipationsService: GetContestParticipationsGQL,
    private store: Store,
    private dialog: MatDialog,
    private deleteContestParticipationService: DeleteContestParticipationGQL,
    private saveContestParticipationService: SaveContestParticipationGQL
  ) { }
}
