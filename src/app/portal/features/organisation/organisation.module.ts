/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { organisationFeatureKey } from './constants/organisation.constant';
import { OrganisationPortalRoutingModule } from './organisation-routing.module';
import { OrganisationDetailsComponent } from './pages/details/organisation-details.component';
import { OrganisationEffects } from './state/organisation.effects';
import { organisationReducer } from './state/organisation.reducer';

const components: Type<any>[] = [
  OrganisationDetailsComponent
];

const framework: any[] = [
  CommonModule,
  StoreModule.forFeature(organisationFeatureKey, organisationReducer),
  EffectsModule.forFeature([OrganisationEffects]),
];

const materials: Type<any>[] = [

];

const modules: Type<any>[] = [
  CoreModule,
  OrganisationPortalRoutingModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class OrganisationPortalModule { }
