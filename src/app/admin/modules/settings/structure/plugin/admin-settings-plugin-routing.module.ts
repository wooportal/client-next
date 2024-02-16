import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { id } from 'src/app/core/constants/queryparam.constants';
import { AdminSettingsPluginFormComponent } from './components/form/admin-settings-plugin-form.component';
import { AdminSettingsPluginOverviewComponent } from './components/overview/admin-settings-plugin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminSettingsPluginOverviewComponent,
  },
  {
    path: `form`,
    component: AdminSettingsPluginFormComponent,
  },
  {
    path: `:${id}/form`,
    component: AdminSettingsPluginFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsPluginRoutingModule { }
