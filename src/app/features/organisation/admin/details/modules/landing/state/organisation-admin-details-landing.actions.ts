import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { OrganisationEntity } from 'src/app/core/api/generated/schema';

export const OrganisationAdminDetailsLandingActions = createActionGroup({
  source: 'Organisation Admin Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (organisation: Maybe<OrganisationEntity>) => ({ organisation }),
  }
});
