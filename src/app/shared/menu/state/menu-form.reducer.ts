import { createReducer, on } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { MenuFormActions } from './menu-form.actions';

export interface MenuFormState {
  parentMenuItems?: Maybe<MenuItemEntity[]>,
}

export const initialState: MenuFormState = {};

export const menuFormReducer = createReducer(
  initialState,

  on(MenuFormActions.parentMenuItemsRetrieved, (state, action): MenuFormState => ({
    ...state, parentMenuItems: action.parents
  })),

);
