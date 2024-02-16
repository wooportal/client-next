import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { settingsUrl } from 'src/app/admin/constants/admin.constants';
import { FilterSortPaginateInput, Maybe, PageEntity } from 'src/app/core/api/generated/schema';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { AdminSettingsPageActions } from '../state/admin-settings-pages.actions';
import { selectPages } from '../state/admin-settings-pages.selectors';

@Component({
  selector: 'app-admin-settings-pages-overview',
  templateUrl: './admin-settings-pages-overview.component.html',
  styleUrls: ['./admin-settings-pages-overview.component.scss'],
})
export class AdminSettingsPagesOverviewComponent {


  public pages = this.store.select(selectPages);

  public actions: RowAction<PageEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([ adminUrl, settingsUrl, 'pages', row?.slug, 'form']),
      tooltipLabel: 'edit'
    },
    {
      icon: 'toggle-off',
      callback: row =>
        this.store.dispatch(AdminSettingsPageActions.assignLanding(row?.id)),
      tooltipLabel: 'assignLandingPage',
    },
    {
      icon: 'trash',
      callback: page =>
        this.store.dispatch(AdminSettingsPageActions.deletePage(page)),
      tooltipLabel: 'delete'
    },

  ];

  public columns: Column<PageEntity>[] = [
    {
      field: 'label',
      label: 'name',
      sort: true,
    },
    {
      field: 'isLanding',
      label: 'isLanding',
      type: 'BOOLEAN',
      sort: true,
    },
    {
      field: 'menuItems',
      label: 'menu',
      value: row => this.translationService.translatable(
        row.menuItems?.[0]?.translatables, 'name')
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsPageActions.updateParams(params));
  }

  public rowClicked(page: Maybe<PageEntity>): void {
    this.router.navigate(['../', page?.slug], { relativeTo: this.activatedRoute });
  }
}
