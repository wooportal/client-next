import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaModule } from 'src/app/shared/widgets/media/media.module';
import { PortalPageFeaturesComponent } from '../page-features/portal-page-features.component';
import { PortalPageMediaComponent } from './components/media/portal-page-media.component';
import { PortalPageComponent } from './components/portal-page.component';
import { portalPageStateKey } from './constants/portal-page.constants';
import { PortalPageRoutingModule } from './portal-page-routing.module';
import { PortalPageEffects } from './state/portal-page.effects';
import { portalPageReducer } from './state/portal-page.reducer';

const components = [
  PortalPageComponent,
  PortalPageMediaComponent,
];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
];

const modules = [
  CoreModule,
  MediaModule,
  PortalPageFeaturesComponent,
  PortalPageRoutingModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(portalPageStateKey, portalPageReducer),
  EffectsModule.forFeature([PortalPageEffects]),
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
})
export class PortalPageModule { }