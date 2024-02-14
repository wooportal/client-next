
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CaptchaModule } from 'ngx-cinlib/forms/captcha';
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { MenuFormModule } from 'src/app/shared/menu/menu-form.module';
import { AdminSettingsPageEmbeddingModule } from '../embedding/admin-settings-page-embedding.module';
import { AdminSettingsPageFormRoutingModule } from './admin-settings-page-form.module-routing.module';
import { AdminSettingsPageFormComponent } from './component/admin-settings-page-form.component';
import { adminSettingsPageFormStateKey } from './constants/admin-settings-page-form.constants';
import { AdminSettingsPageFormEffects } from './state/admin-settings-page-form.effects';
import { adminSettingsPageFormReducer } from './state/admin-settings-page-form.reducer';

const components = [
  AdminSettingsPageFormComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  AdminSettingsPageEmbeddingModule,
  AdminSettingsPageFormRoutingModule,
  CoreModule,
  MenuFormModule
];

const libs = [
  StoreModule.forFeature(adminSettingsPageFormStateKey, adminSettingsPageFormReducer),
  EffectsModule.forFeature([AdminSettingsPageFormEffects]),

  CaptchaModule,
  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  I18nDirective,
  PageTitleComponent,
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
export class AdminSettingsPageFormModule { }
