import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginActions } from '../../state/admin-settings-plugin.actions';
import { selectPlugins } from '../../state/admin-settings-plugin.selectors';

@Component({
  selector: 'app-admin-settings-plugin',
  templateUrl: './admin-settings-plugin.component.html',
  styleUrls: ['./admin-settings-plugin.component.scss'],
})
export class AdminSettingsPluginOverviewComponent {

  public features = this.store.select(selectPlugins);

  public actions: RowAction<PluginEntity>[] = [
    {
      icon: 'toggle-off',
      callback: plugin => {
         this.store.dispatch(AdminSettingsPluginActions.togglePlugin(plugin))
      },
      tooltipLabel: 'toggleActivatePlugin',
    },
    {
      icon: 'folder-tree',
      callback: row =>
        this.router.navigate(['admin/settings/structure/plugins', row?.id, 'form']),
      disable: (row) => !row?.active,
      tooltipLabel: 'editMenuAssignment'
    }
  ];

  public columns: Column<PluginEntity>[] = [
    {
      field: 'translatables.name',
      label: 'plugins',
      value: row => this.translationService.translatable(row.translatables, 'name'),
    },
    {
      field: 'released',
      label: 'released',
      value: row => this.translationService.getLabel(row.released ? 'yes' : 'comingSoon'),
      sort: true
    },
    {
      field: 'active',
      label: 'active',
      type: 'BOOLEAN',
      sort: true
    },
  ];

  constructor(
    private store: Store,
    private translationService: TranslationService,
    private router: Router
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsPluginActions.updateParams(params));
  }
}
