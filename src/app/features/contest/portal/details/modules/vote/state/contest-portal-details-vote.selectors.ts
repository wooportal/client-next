import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { contestPortalDetailsVoteStateKey } from '../constants/contest-portal-details-vote.constants';
import { ContestPortalDetailsVoteState } from './contest-portal-details-vote.reducer';

export const selectContestPortalDetailsParticipationsState =
  createFeatureSelector<ContestPortalDetailsVoteState>(
    contestPortalDetailsVoteStateKey
  );

export const selectContestParticipations = createSelector(
  selectContestPortalDetailsParticipationsState,
  (state) => state.participations?.result
);

export const selectParticipationsTotal = createSelector(
  selectContestPortalDetailsParticipationsState,
  (state) => state.participations?.total
);

export const selectParams = createSelector(
  selectContestPortalDetailsParticipationsState,
  (state) => state.params
);

export const selectSlug = createSelector(
  selectContestPortalDetailsParticipationsState,
  (state) => state.slug
);

export const selectUserVotes = createSelector(
  selectContestParticipations,
  selectCurrentUser,
  (participations, user) => participations?.map(
    (participation) =>
      participation?.contestVotes?.filter(
        (vote) => vote?.userContext?.id === user?.id
      )?.length ?? 0).reduce((acc, count) => acc + count, 0) ?? 0
);

export const selectContestMaxVotes = createSelector(
  selectContestParticipations,
  (participations) => participations?.[0]?.contest?.maxVotes
);
