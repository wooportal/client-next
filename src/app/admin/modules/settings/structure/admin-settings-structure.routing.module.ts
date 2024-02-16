import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoute } from 'src/app/admin/typings/menu';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';

export const structureRoute = 'structure';

const routes: AdminSettingsRoute[] = [
  {
    path: `${structureRoute}/menu`,
    loadComponent: () => import('./menu/admin-settings-menu.component')
      .then((imported) => imported.AdminSettingsMenuComponent),
    data: {
      name: 'editPortalMenu',
      description: 'editPortalMenuDescription',
      icon: 'folder-tree',
      privileges: ['cms_admin'],
      comingSoon: true,
    },
    canActivate: [requireAnyPrivilege('cms_admin')],
  },
  {
    path: `${structureRoute}/theme`,
    loadComponent: () => import('./theme/admin-settings-theme.component')
      .then((imported) => imported.AdminSettingsThemeComponent),
    data: {
      name: 'editColorTheme',
      description: 'editColorThemeDescription',
      icon: 'palette',
      privileges: ['cms_admin'],
      comingSoon: true,
    },
    canActivate: [requireAnyPrivilege('cms_admin')],
  },
  {
    path: `${structureRoute}/plugins`,
    loadChildren: () => import('./plugin/admin-settings-plugin.module')
      .then((imported) => imported.AdminSettingsPluginModule),
    data: {
      name: 'plugins',
      description: 'pluginsDescription',
      icon: 'swatchbook',
      privileges: ['cms_admin']
    },
    canActivate: [requireAnyPrivilege('cms_admin')],
  },
  {
    path: `${structureRoute}/configuration`,
    loadChildren: () => import('./configuration/admin-settings-configuration.module')
      .then((imported) => imported.AdminSettingsConfigurationModule),
    data: {
      name: 'configuration',
      description: 'configurationDescription',
      icon: 'gear',
      privileges: ['cms_admin'],
    },
    canActivate: [requireAnyPrivilege('cms_admin')],
  },
];

@NgModule({
  imports: [RouterModule.forChild([
    ...routes,
  ])],
  exports: [RouterModule]
})
export class AdminSettingsStructureRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addSettingsMenu({
      name: 'structure',
      privileges: ['cms_admin'],
      childs: routes.map(route => ({
        name: route.data?.name,
        description: route.data?.description,
        route: route.path,
        icon: route.data?.icon,
        privileges: route.data.privileges,
        comingSoon: route.data.comingSoon,
      }))
    }));
  }
}
