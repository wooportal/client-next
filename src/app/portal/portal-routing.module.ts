import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { articlesFeatureKey, eventsFeatureKey, organisationsFeatureKey } from './common/constants/common.constants';
import { PortalNotFoundComponent } from './common/pages/not-found/not-found.component';
import { organisationFeatureKey } from './features/organisation/constants/organisation.constant';

const routes: Routes = [
  {
    path: eventsFeatureKey,
    loadChildren: () => import('./features/event/event.module')
      .then((imported) => imported.EventPortalModule),
  },
  {
    path: organisationsFeatureKey,
    loadChildren: () => import('./features/organisation/organisation.module')
      .then((imported) => imported.OrganisationPortalModule),
  },
  {
    path: articlesFeatureKey,
    loadChildren: () => import('./features/article/article.module')
      .then((imported) => imported.ArticlePortalModule),
  },
  {
    path: '404',
    component: PortalNotFoundComponent,
  },
  {
    path: '',
    loadChildren: () => import('./features/page/page.module')
      .then((imported) => imported.PagePortalModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
