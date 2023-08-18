import { createReducer, on } from '@ngrx/store';
import { FeatureEntity, Maybe } from 'src/schema/schema';
import { AdminRoutes } from '../typings/menu';
import { AdminActions } from './admin.actions';

export interface AdminState {
  features?: Maybe<FeatureEntity[]>,
  menuOpen?: boolean,
  routes: AdminRoutes[],
}

export const initialState: AdminState = {
  routes: [],
};

export const adminReducer = createReducer(
  initialState,

  on(AdminActions.toggleMenu, (state): AdminState => (
    { ...state, menuOpen: !state.menuOpen }
  )),

  on(AdminActions.addRoutes, (state, action): AdminState => (
    { ...state, routes: [...state.routes, action.routes] }
  )),

  on(AdminActions.setFeatures, (state, action): AdminState => (
    { ...state, features: action.features }
  )),

);
