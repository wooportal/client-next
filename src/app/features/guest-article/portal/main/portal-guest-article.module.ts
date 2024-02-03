
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CaptchaModule } from 'ngx-cinlib/forms/captcha';
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { IconComponent } from 'ngx-cinlib/icons';
import { CoreModule } from 'src/app/core/core.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { PortalGuestArticleFormComponent } from './components/form/portal-guest-article-form.component';
import { PortalGuestArticleSuccessComponent } from './components/success/portal-guest-article-success.component';
import { portalGuestArticleStateKey } from './constants/portal-guest-article.constants';
import { PortalGuestArticleRoutingModule } from './portal-guest-article-routing.module';
import { PortalGuestArticleEffects } from './state/portal-guest-article.effects';
import { portalGuestArticleReducer } from './state/portal-guest-article.reducer';

const components = [
  PortalGuestArticleFormComponent,
  PortalGuestArticleSuccessComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  GridLayoutModule,
  MediaWidgetsModule,
  PortalGuestArticleRoutingModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(portalGuestArticleStateKey, portalGuestArticleReducer),
  EffectsModule.forFeature([PortalGuestArticleEffects]),

  CaptchaModule,
  FormStepComponent,
  FormStepperComponent,
  IconComponent,
  RichtextEditorFormComponent,
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
export class PortalGuestArticleModule { }
