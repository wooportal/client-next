import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { shareAction } from 'src/app/core/utils/table.utils';
import { OrganisationAdminOverviewActions } from '../state/organisation-admin-overview.actions';
import { selectOverviewData } from '../state/organisation-admin-overview.selectors';

@Component({
  selector: 'app-organisation-admin-overview',
  templateUrl: './organisation-admin-overview.component.html',
  styleUrls: ['./organisation-admin-overview.component.scss']
})
export class OrganisationAdminOverviewComponent {

  public organisations = this.store.select(selectOverviewData);

  public actions: RowAction<OrganisationEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.slug, 'form'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'bullhorn',
      callback: row =>
        this.store.dispatch(OrganisationAdminOverviewActions.sponsorOrganisation(row)),
      tooltipLabel: 'highlightInPortal',
      privileges: ['organisations_admin']
    },
    {
      icon: 'trash',
      callback: organisation =>
        this.store.dispatch(OrganisationAdminOverviewActions.deleteOrganisation(organisation)),
      tooltipLabel: 'delete'
    },

    shareAction('OrganisationEntity'),
  ];

  public columns: Column<OrganisationEntity>[] = [
    {
      field: 'name',
      label: 'name',
      sort: true,
    },
    {
      field: 'contact.name',
      label: 'contact',
    },
    {
      field: 'contact.email',
      label: 'email',
      sort: true,
    },
    {
      field: 'sponsored',
      label: 'sponsored',
      type: 'BOOLEAN',
      sort: true,
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router, 
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(OrganisationAdminOverviewActions.updateParams(params));
  }

  public rowClicked(organisation: Maybe<OrganisationEntity>): void {
    this.router.navigate([organisation?.slug], { relativeTo: this.activatedRoute })
  }
}
