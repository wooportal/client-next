import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminSettingsRoute } from 'src/app/admin/typings/menu';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';

export const locationRoute = 'location';

const routes: AdminSettingsRoute[] = [
  {
    path: `${locationRoute}/addresses`,
    loadChildren: () => import('src/app/admin/modules/settings/location/address/admin-settings-address.module')
      .then((imported) => imported.AdminSettingsAddressModule),
    data: {
      name: 'addresses',
      description: 'addressesDescription',
      icon: 'location-dot',
      privileges: ['addresses_admin']
    },
    canActivate: [requireAnyPrivilege('addresses_admin')]
  },
  {
    path: `${locationRoute}/suburbs`,
    loadChildren: () => import('src/app/admin/modules/settings/location/suburb/admin-settings-suburb.module')
      .then((imported) => imported.AdminSettingsSuburbModule),
    data: {
      name: 'suburbs',
      description: 'suburbsDescription',
      icon: 'map-location',
      privileges: ['addresses_admin']
    },
    canActivate: [requireAnyPrivilege('addresses_admin')]
  },
];

@NgModule({
  imports: [RouterModule.forChild([
    ...routes,
  ])],
  exports: [RouterModule]
})
export class AdminSettingsLocationRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addSettingsMenu({
      name: 'location',
      privileges: ['addresses_admin'],
      childs: routes.map(route => ({
        name: route.data?.name,
        description: route.data?.description,
        route: route.path,
        icon: route.data?.icon,
        privileges: route.data.privileges,
      }))
    }));
  }
}
