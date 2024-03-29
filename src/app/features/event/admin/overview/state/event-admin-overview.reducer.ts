import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_EventEntity } from 'src/app/core/api/generated/schema';
import { EventAdminOverviewActions } from './event-admin-overview.actions';

export interface EventAdminOverviewState {
  overviewData?: PageableList_EventEntity,
  params: FilterSortPaginateInput
}

export const initialState: EventAdminOverviewState = {
  params: {}
};

export const eventAdminOverviewReducer = createReducer(
  initialState,

  on(EventAdminOverviewActions.updateParams, (state, action): EventAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(EventAdminOverviewActions.setOverviewData, (state, action): EventAdminOverviewState => (
    { ...state, overviewData: action.events }
  )),
);
