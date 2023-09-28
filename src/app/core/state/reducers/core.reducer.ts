import { createReducer, on } from '@ngrx/store';
import { AppEntity, ConfigurationEntity, InformationDto, LanguageEntity, Maybe, SocialMediaEntity, ThemeEntity } from 'src/app/core/api/generated/schema';
import { HelpComponent } from '../../components/help/help.component';
import { AsideDefinition } from '../../typings/aside';
import { Help } from '../../typings/help';
import { Translatable } from '../../typings/translatable';
import { CoreActions } from '../actions/core.actions';

export interface CoreState {
  apps?: Maybe<AppEntity[]>,
  asideComponent?: AsideDefinition,
  configurations?: ConfigurationEntity[]
  currentTheme?: Maybe<ThemeEntity>,
  help?: Help,
  labels?: Map<string, Maybe<Translatable>[]>,
  language?: LanguageEntity,
  languages?: LanguageEntity[],
  ongoingRequests: number,
  serverInfo?: Maybe<InformationDto>,
  socialMedia?: Maybe<SocialMediaEntity[]>,
  themes?: ThemeEntity[],
}

export const initialState: CoreState = {
  ongoingRequests: 0,
  language: { locale: 'de' },
};

export const coreReducer = createReducer(
  initialState,

  on(CoreActions.changeLanguage, (state, action): CoreState => (
    { ...state, language: action.language }
  )),

  on(CoreActions.setApps, (state, action): CoreState => (
    { ...state, apps: action.apps }
  )),

  on(CoreActions.setConfigurations, (state, action): CoreState => (
    { ...state, configurations: action.configurations }
  )),
  
  on(CoreActions.setLabels, (state, action): CoreState => (
    {
      ...state,
      labels: action.labels.reduce((map, label) =>
      (label.tagId && (map.set(label.tagId, label.translatables?.length
        ? label.translatables
        : [])), map),
        new Map())
    }
  )),

  on(CoreActions.setLanguages, (state, action): CoreState => (
    { ...state, languages: action.languages }
  )),

  on(CoreActions.setServerInfo, (state, action): CoreState => (
    { ...state, serverInfo: action.info }
  )),

  on(CoreActions.setSocialMedia, (state, action): CoreState => (
    { ...state, socialMedia: action.socialMedia }
  )),

  on(CoreActions.setThemes, (state, action): CoreState => (
    {
      ...state,
      currentTheme: action.themes?.find(theme => theme.isDefault),
      themes: action.themes
    }
  )),

  on(CoreActions.setHelp, (state, action): CoreState => (
    { ...state,
      help: action.help,
      asideComponent: {
        component: HelpComponent
      }
    }
  )),

  on(CoreActions.setAsideComponent, (state, action): CoreState => (
    { ...state,
      asideComponent: action.aside
    }
  )),

  on(CoreActions.removeAsideComponent, (state): CoreState => (
    { ...state, asideComponent: undefined }
  )),

  on(CoreActions.addRequest, (state): CoreState => (
    { ...state, ongoingRequests: state.ongoingRequests + 1 }
  )),

  on(CoreActions.removeRequest, (state): CoreState => (
    { ...state, ongoingRequests: state.ongoingRequests - 1 }
  )),

);
