import { createFeatureSelector, createSelector } from '@ngrx/store';
import { menuFormStateKey } from '../constants/menu-form.constants';
import { AdminSettingsPageMenuState } from './menu-form.reducer';

export const selectMenuFormState = createFeatureSelector<AdminSettingsPageMenuState>(menuFormStateKey);

export const selectParentMenuItems = createSelector(
  selectMenuFormState,
  state => state.parentMenuItems
);