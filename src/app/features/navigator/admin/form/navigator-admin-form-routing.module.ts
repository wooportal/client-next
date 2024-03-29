import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorAdminFormLayoutComponent } from './modules/layout/components/navigator-admin-form-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/navigator-admin-form-layout.module')
      .then((imported) => imported.NavigatorAdminFormLayoutModule),
    component: NavigatorAdminFormLayoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigatorAdminFormRoutingModule { }

