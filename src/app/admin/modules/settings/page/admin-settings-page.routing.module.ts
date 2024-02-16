import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoute } from 'src/app/admin/typings/menu';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';
import { AdminSettingsPageDetailsLayoutComponent } from './details/modules/layout/components/admin-settings-page-details-layout.component';

export const pageRoute = 'pages';

const menuRoutes: AdminSettingsRoute[] = [
  {
    path: `${pageRoute}/overview`,
    loadChildren: () => import('src/app/admin/modules/settings/page/overview/admin-settings-pages.module')
      .then((imported) => imported.AdminSettingsPagesModule),
    data: {
      name: 'pagesOverview',
      description: 'pagesOverviewDescription',
      icon: 'file-lines',
      privileges: ['cms_admin']
    },
    canActivate: [requireAnyPrivilege('cms_admin')],
  },
];

const routes: Routes = [
  {
    path: `${pageRoute}/overview/form`,
    loadChildren: () => import('./form/admin-settings-page-form.module')
      .then((imported) => imported.AdminSettingsPageFormModule),
    canActivate: [requireAnyPrivilege('cms_admin')]
  },
  {
    path: `${pageRoute}/:${slug}/form`,
    loadChildren: () => import('./form/admin-settings-page-form.module')
      .then((imported) => imported.AdminSettingsPageFormModule),
    canActivate: [requireAnyPrivilege('cms_admin')]
  },
  {
    path: `${pageRoute}/:${slug}`,
    loadChildren: () => import('./details/admin-settings-page-details.module')
      .then((imported) => imported.AdminSettingsPageDetailsModule),
    component: AdminSettingsPageDetailsLayoutComponent,
    canActivate: [requireAnyPrivilege('cms_admin')]
  },
]

@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes
  ])],
  exports: [RouterModule]
})
export class AdminSettingsPageRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addSettingsMenu({
      name: 'pageContent',
      privileges: ['cms_admin'],
      childs: menuRoutes.map(route => ({
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
