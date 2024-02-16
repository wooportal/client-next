import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminSettingsPluginStateKey } from '../constants/admin-settings-plugin.constants';
import { AdminSettingsPluginState } from './admin-settings-plugin.reducer';

export const selectAdminSettingsPluginState = createFeatureSelector<AdminSettingsPluginState>(adminSettingsPluginStateKey);

export const selectPlugins = createSelector(
  selectAdminSettingsPluginState,
  state => state.plugins
);

export const selectParams = createSelector(
  selectAdminSettingsPluginState,
  state => state.params
);

export const selectPlugin = createSelector(
  selectAdminSettingsPluginState,
  state => state.plugin
);