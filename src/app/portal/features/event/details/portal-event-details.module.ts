import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { UserCommentModule } from './../../../../shared/comment-card/user-comment.module';
import { PortalEventDetailsComponent } from './components/details/portal-event-details.component';
import { EventCardDetailComponent } from './components/event-card-detail/event-card-detail.component';
import { EventDescriptionComponent } from './components/event-description/event-description.component';
import { EventEvaluationComponent } from './components/event-evaluation/event-evaluation.component';
import { EventParticipantsComponent } from './components/event-participants/event-participants.component';
import { portalEventDetailsStateKey } from './constants/event-details.constant';
import { PortalEventDetailsRoutingModule } from './portal-event-details-routing.module';
import { PortalEventDetailsEffects } from './state/portal-event-details.effects';
import { portalEventDetailsReducer } from './state/portal-event-details.reducer';

const components = [
  PortalEventDetailsComponent,
  EventCardDetailComponent,
  EventDescriptionComponent,
  EventParticipantsComponent,
  EventEvaluationComponent

];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  FontAwesomeModule,
  MatCardModule,
  MatProgressBarModule,
 ];

const modules = [
  CoreModule,
  CardModule,
  PortalEventDetailsRoutingModule,
  FormModule,
  TableModule,
  TitleModule,
  UserCommentModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalEventDetailsStateKey, portalEventDetailsReducer),
  EffectsModule.forFeature([PortalEventDetailsEffects]),
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class PortalEventDetailsModule { }
