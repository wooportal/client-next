import { createReducer, on } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { MenuFormActions } from './menu-form.actions';

export interface AdminSettingsPageMenuState {
  parentMenuItems?: Maybe<MenuItemEntity[]>,
}

export const initialState: AdminSettingsPageMenuState = {};

export const adminSettingsPageMenuReducer = createReducer(
  initialState,

  on(MenuFormActions.parentMenuItemsRetrieved, (state, action): AdminSettingsPageMenuState => ({
    ...state, parentMenuItems: action.parents
  })),

);
