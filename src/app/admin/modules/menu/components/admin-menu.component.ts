import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'ngx-cinlib/security';
import { map } from 'rxjs';
import { settingsUrl } from 'src/app/admin/constants/admin.constants';
import { selectAdminMainMenu, selectAdminSettingsMenu } from 'src/app/admin/state/admin.selectors';
import { AdminMenuItem } from 'src/app/admin/typings/menu';
import { adminUrl, } from 'src/app/core/constants/module.constants';
import { Privilege } from 'src/app/core/typings/privilege';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss'],
})
export class AdminMenuComponent {

  @Input()
  public collapsable = true;

  @Output()
  public closed = new EventEmitter<void>();
  
  public collapsed = false;

  public homeRoute = ['/', adminUrl];
  
  public menuItems = this.store.select(selectAdminMainMenu)
    .pipe(map(routes => this.allowedRoutes(routes)));    

  public settingsAllowed = this.store.select(selectAdminSettingsMenu)
    .pipe(map(routes => !!this.allowedRoutes(routes)?.length));

  public settingsUrl = settingsUrl;

  constructor(
    private store: Store,
    private authService: AuthService,
  ) {}

  public onCollapse(): void {
    this.collapsable
      ? this.collapsed = true
      : this.closed.emit();
  }

  private allowedRoutes(routes: AdminMenuItem[]): AdminMenuItem[] {
    return routes.map(route => (
      { ...route, childs: route.childs?.filter(child => child?.privileges
        ? this.authService.hasAnyPrivileges<Privilege>(child.privileges)
        : true)
      }
    )).filter(route => !!route.childs?.length)
  }

}
