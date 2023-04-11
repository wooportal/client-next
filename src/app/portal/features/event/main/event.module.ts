import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalCommonModule } from 'src/app/portal/common/common.module';
import { EventCategoryViewComponent } from './components/category-view/event-category-view.component';
import { EventDetailsComponent } from './components/details/event-details.component';
import { EventFilterAreaComponent } from './components/filter-area/event-filter-area.component';
import { EventOverviewComponent } from './components/overview/event-overview.component';
import { eventFeatureKey } from './constants/event.constant';
import { EventPortalRoutingModule } from './event-routing.module';
import { EventEffects } from './state/event.effects';
import { eventReducer } from './state/event.reducer';

const components = [
  EventDetailsComponent,
  EventFilterAreaComponent,
  EventOverviewComponent,
  EventCategoryViewComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  CoreModule,
  EventPortalRoutingModule,
  PortalCommonModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(eventFeatureKey, eventReducer),
  EffectsModule.forFeature([EventEffects]),
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class EventPortalModule { }