import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { organisationSlug } from '../../constants/organisation.constant';
import { OrganisationActions } from '../../state/organisation.actions';
import { selectOrganisationDetails } from '../../state/organisation.selectors';

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.scss']
})
export class OrganisationDetailsComponent implements OnInit {

  public organisationDetails = this.store.select(selectOrganisationDetails);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const slug = params[organisationSlug];
      this.store.dispatch(OrganisationActions.getOrganisationDetails(slug));
    });
  }

}
