import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { DetailsTitleComponent, PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { AuthService } from 'ngx-cinlib/security';
import { map } from 'rxjs';
import { settingsUrl } from 'src/app/admin/constants/admin.constants';
import { selectAdminSettingsMenu } from 'src/app/admin/state/admin.selectors';
import { AdminMenuItem } from 'src/app/admin/typings/menu';
import { adminUrl, } from 'src/app/core/constants/module.constants';
import { CoreModule } from 'src/app/core/core.module';
import { Privilege } from 'src/app/core/typings/privilege';

@Component({
  selector: 'app-admin-settings-navigation',
  templateUrl: './admin-settings-navigation.component.html',
  styleUrls: ['./admin-settings-navigation.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    DetailsTitleComponent,
    IconComponent,
    I18nDirective,
    MatCardModule,
    MatDividerModule,
    PageTitleComponent,
    RouterModule,
  ]
})
export class AdminSettingsNavigationComponent {

  public menuItems = this.store.select(selectAdminSettingsMenu)
    .pipe(
      map(routes => routes.map(route => (
        { ...route, childs: route.childs?.filter(child => child?.privileges
          ? this.authService.hasAnyPrivileges<Privilege>(child.privileges)
          : true)
        }
      )).filter(route => !!route.childs?.length))
    );

  public adminUrl = adminUrl;
  public settingsUrl = settingsUrl;

  constructor(
    private authService: AuthService,
    private store: Store,
  ) { }

  public createRouterLink(child: AdminMenuItem): string[] {
    return child.route
      ? [`/${adminUrl}`, settingsUrl, ...child.route.split('/')]
      : [`/${adminUrl}`, settingsUrl];
  }

}
