import { createFeatureSelector, createSelector } from '@ngrx/store';
import { menuFormStateKey } from '../constants/menu-form.constants';
import { MenuFormState } from './menu-form.reducer';

export const selectMenuFormState = createFeatureSelector<MenuFormState>(menuFormStateKey);

export const selectParentMenuItems = createSelector(
  selectMenuFormState,
  state => state.parentMenuItems
);