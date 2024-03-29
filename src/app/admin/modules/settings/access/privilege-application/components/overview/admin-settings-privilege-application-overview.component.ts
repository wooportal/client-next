import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, Maybe, PrivilegeApplicationEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPrivilegeApplicationActions } from '../../state/admin-settings-privilege-application.actions';
import { selectOverviewData } from '../../state/admin-settings-privilege-application.selectors';
import { AdminSettingsPrivilegeApplicationRoleAssignComponent } from '../role-assign/admin-settings-privilege-application-role-assign.component';

@Component({
  selector: 'app-admin-settings-privilege-application-overview',
  templateUrl: './admin-settings-privilege-application-overview.component.html',
  styleUrls: ['./admin-settings-privilege-application-overview.component.scss']
})
export class AdminSettingsPrivilegeApplicationOverviewComponent {

  public applications = this.store.select(selectOverviewData);

  public actions: RowAction<PrivilegeApplicationEntity>[] = [
    {
      icon: 'toggle-off',
      callback: (row: Maybe<PrivilegeApplicationEntity>) => 
        this.assignRole(row),
      tooltipLabel: 'changeUserRole',
    },    
    {
      icon: 'trash',
      callback: application =>
        this.store.dispatch(AdminSettingsPrivilegeApplicationActions.deleteApplication(application)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<PrivilegeApplicationEntity>[] = [
    {
      field: 'user.lastName',
      label: 'author',
      value: row => `${row.user?.firstName ?? ''} ${row.user?.lastName ?? ''}`
    },
    {
      field: 'user.email',
      label: 'email',
    },
    {
      field: 'content',
      label: 'content',
      value: row => this.translationService.watchTranslatable(row.translatables, 'content')
    },
    {
      field: 'privilege.name',
      label: 'privilege',
      value: row => this.translationService.watchTranslatable(row?.privilege?.translatables, 'name')
    },
  ];
  
  constructor(
    private store: Store,
    private dialog: MatDialog,
    private translationService: TranslationService,
  ) { }

  private assignRole(application: Maybe<PrivilegeApplicationEntity>) {
    this.dialog.open(AdminSettingsPrivilegeApplicationRoleAssignComponent, {
      data: application 
    })
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsPrivilegeApplicationActions.updateParams(params));
  }
}