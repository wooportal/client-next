import { createReducer, on } from '@ngrx/store';
import { Maybe, OrganisationEntity } from 'src/schema/schema';
import { OrganisationActions } from './organisation.actions';

export interface OrganisationState {
  organisationDetails?: Maybe<OrganisationEntity>,
}

export const initialState: OrganisationState = {};

export const organisationReducer = createReducer(
  initialState,

  on(OrganisationActions.setOrganisationDetails, (state, action): OrganisationState => (
    { ...state, organisationDetails: action.organisation }
  )),
);
