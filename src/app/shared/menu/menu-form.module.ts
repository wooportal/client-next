
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent, IconFormComponent } from 'ngx-cinlib/icons';
import { DragDropContainerComponent, DragDropElementComponent } from 'ngx-cinlib/layouts/drag-drop';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { CoreModule } from 'src/app/core/core.module';
import { MenuFormDialogComponent } from './components/dialog/menu-form-dialog.component';
import { MenuItemFormComponent } from './components/form/menu-item-form.component';
import { MenuFormComponent } from './components/menu-form.component';
import { menuFormStateKey } from './constants/menu-form.constants';
import { MenuFormEffects } from './state/menu-form.effects';
import { menuFormReducer } from './state/menu-form.reducer';

const components = [
  MenuFormComponent,
  MenuFormDialogComponent,
  MenuItemFormComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
];

const libs = [
  EffectsModule.forFeature([MenuFormEffects]),
  StoreModule.forFeature(menuFormStateKey, menuFormReducer),
  DragDropContainerComponent,
  DragDropElementComponent,
  GridColumnDirective,
  GridRowComponent,
  IconComponent,
  IconFormComponent,
  I18nDirective,
  TranslatablePipe,
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
export class MenuFormModule { }
