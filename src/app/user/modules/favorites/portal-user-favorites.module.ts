import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioButtonGroupComponent } from 'ngx-cinlib/forms/radio-button';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { NoDataComponent } from 'src/app/shared/layout/no-data/no-data.component';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { TableCardComponent } from 'src/app/shared/widgets/table-card/table-card.component';
import { PortalFavoriteArticlesComponent } from './components/articles/portal-favorite-articles.component';
import { PortalFavoriteAuthorsComponent } from './components/authors/portal-favorite-authors.component';
import { PortalFavoriteDealsComponent } from './components/deals/portal-favorite-deals.component';
import { PortalFavoriteEventsComponent } from './components/events/portal-favorite-events.component';
import { PortalFavoriteOrganisationsComponent } from './components/organisations/portal-favorite-organisations.component';
import { PortalFavoritesComponent } from './components/portal-favorites.component';
import { portalFavoritesStateKey } from './constants/portal-favorites.constants';
import { PortalFavoritesRoutingModule } from './portal-user-favorite-routing.module';
import { PortalFavoritesEffects } from './state/portal-favorites.effects';
import { portalFavoritesReducer } from './state/portal-favorites.reducer';

const components = [
  PortalFavoritesComponent,
  PortalFavoriteArticlesComponent,
  PortalFavoriteAuthorsComponent,
  PortalFavoriteDealsComponent,
  PortalFavoriteEventsComponent,
  PortalFavoriteOrganisationsComponent,
];

const framework = [
  CommonModule,
];

const material = [
   MatCardModule,
]

const modules = [
  CoreModule,
  CardModule,
  NoDataComponent,
  PortalFavoritesRoutingModule,
  TableCardComponent,
];

const libs = [
  StoreModule.forFeature(portalFavoritesStateKey, portalFavoritesReducer),
  EffectsModule.forFeature([PortalFavoritesEffects]),

  PageTitleComponent,
  RadioButtonGroupComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...material,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalFavoritesModule { }
