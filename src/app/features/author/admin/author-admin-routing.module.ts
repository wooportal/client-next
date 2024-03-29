import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminFeatureRoute } from 'src/app/admin/typings/menu';
import { authorsFeatureKey } from 'src/app/core/constants/feature.constants';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';

const menuRoutes: AdminFeatureRoute[] = [
  {
    path: `${authorsFeatureKey}`,
    loadChildren: () => import('src/app/features/author/admin/overview/author-admin-overview.module')
      .then((imported) => imported.AuthorAdminOverviewModule),
    data: { 
      label: 'overview',
      privileges: ['articles_admin']
    },
    canActivate: [requireAnyPrivilege('articles_admin')]
  },
];

const routes: Routes = [
]

@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes,
  ])],
  exports: [RouterModule]
})
export class AuthorAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: authorsFeatureKey,
      routes: menuRoutes,
    }));
  }
}
