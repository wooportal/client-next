import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { CookieComponent } from './cookie.component';

const components = [
  CookieComponent
];

// const directives = [
// ]

const framework = [
  CommonModule,
  
];

const materials = [
  FontAwesomeModule
];

const modules = [
  CoreModule,
  RouterModule
];

const libs = [
  FontAwesomeModule,
];

@NgModule({
  declarations: [
    ...components,
    // ...directives,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
    // ...directives,
  ],
})
export class CookieModule { }
