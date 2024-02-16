import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { MenuFormModule } from 'src/app/shared/menu/menu-form.module';
import { AdminSettingsPluginRoutingModule } from './admin-settings-plugin-routing.module';
import { AdminSettingsPluginFormComponent } from './components/form/admin-settings-plugin-form.component';
import { AdminSettingsPluginOverviewComponent } from './components/overview/admin-settings-plugin.component';
import { adminSettingsPluginStateKey } from './constants/admin-settings-plugin.constants';
import { AdminSettingsPluginEffects } from './state/admin-settings-plugin.effects';
import { adminSettingsPluginReducer } from './state/admin-settings-plugin.reducer';

const components = [
  AdminSettingsPluginOverviewComponent,
  AdminSettingsPluginFormComponent
]

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

const modules = [
  AdminSettingsPluginRoutingModule,
  CoreModule,
  MenuFormModule
];

const libs = [
  StoreModule.forFeature(adminSettingsPluginStateKey, adminSettingsPluginReducer),
  EffectsModule.forFeature([AdminSettingsPluginEffects]),

  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  I18nDirective,
  PageTitleComponent,
  TableComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class AdminSettingsPluginModule { }
