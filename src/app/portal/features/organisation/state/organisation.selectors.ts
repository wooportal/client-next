import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationFeatureKey } from '../constants/organisation.constant';
import { OrganisationState } from './organisation.reducer';

export const selectOrganisationState = createFeatureSelector<OrganisationState>(organisationFeatureKey);

export const selectOrganisationDetails = createSelector(
  selectOrganisationState,
  state => state.organisationDetails
);