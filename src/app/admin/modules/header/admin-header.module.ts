import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { MediaAvatarComponent } from 'ngx-cinlib/media/elements';
import { CoreModule } from 'src/app/core/core.module';
import { HeaderBackComponent } from 'src/app/shared/layout/header/back/header-back.component';
import { HeaderLanguageComponent } from 'src/app/shared/layout/header/language/header-language.component';
import { HeaderNotificationComponent } from 'src/app/shared/layout/header/notification/header-notification.component';
import { HeaderUserComponent } from 'src/app/shared/layout/header/user/header-user.component';
import { AdminHeaderComponent } from './components/admin-header.component';
import { AdminHeaderDesktopComponent } from './components/desktop/admin-header-desktop.component';
import { AdminHeaderMobileComponent } from './components/mobile/admin-header-mobile.component';

const components = [
  AdminHeaderComponent,
  AdminHeaderDesktopComponent,
  AdminHeaderMobileComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatToolbarModule,
];

const modules = [
  CoreModule,
  HeaderBackComponent,
  HeaderLanguageComponent,
  HeaderNotificationComponent,
  HeaderUserComponent,
];

const libs = [
  IconComponent,
  I18nDirective,
  MediaAvatarComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
  ],
})
export class AdminHeaderModule { }
