import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { organisationSlug } from './constants/organisation.constant';
import { OrganisationDetailsComponent } from './pages/details/organisation-details.component';

const routes: Routes = [

  {
    path: `:${organisationSlug}`,
    component: OrganisationDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationPortalRoutingModule { }
