import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectUserArticleRatings } from 'src/app/core/state/selectors/user.selectors';
import { articlePortalDetailsStateKey } from '../constants/article-portal-details.constant';
import { ArticlePortalDetailsState } from './article-portal-details.reducer';

export const selectArticleArticleDetailsState = createFeatureSelector<ArticlePortalDetailsState>(articlePortalDetailsStateKey);

export const selectArticleDetails = createSelector(
  selectArticleArticleDetailsState,
  state => state.details
);

export const selectArticleComments = createSelector(
  selectArticleArticleDetailsState,
  state => state.comments
);

export const selectArticleUserRating = createSelector(
  selectArticleDetails,
  selectUserArticleRatings,
  (article, ratings) =>
    ratings?.find(rating => rating?.parent?.id === article?.id)
);

export const selectRatingDistribution = createSelector(
  selectArticleDetails,
  article => article?.ratingDistribution
);

export const selectArticleMedia = createSelector(
  selectArticleDetails,
  state => state?.uploads?.map(upload => upload?.media ?? {})
);



