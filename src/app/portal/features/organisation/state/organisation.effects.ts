import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CommonActions } from 'src/app/portal/common/state/common.actions';
import { GetOrganisationDetailsGQL, OrganisationEntity } from 'src/schema/schema';
import { OrganisationActions } from './organisation.actions';

@Injectable()
export class OrganisationEffects {

  getOrganisationDetails = createEffect(() => this.actions.pipe(
    ofType(OrganisationActions.getOrganisationDetails),
    switchMap((action) => this.getOrganisationDetailsService.watch({ id: action.slug }).valueChanges),
    map(response => response.data.getOrganisation?.id
      ? OrganisationActions.setOrganisationDetails(response.data.getOrganisation as OrganisationEntity)
      : CommonActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getOrganisationDetailsService: GetOrganisationDetailsGQL,
  ) { }
}
