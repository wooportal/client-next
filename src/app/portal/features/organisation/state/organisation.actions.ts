import { createActionGroup } from '@ngrx/store';
import { Maybe, OrganisationEntity } from 'src/schema/schema';

export const OrganisationActions = createActionGroup({
  source: 'Organisation',
  events: {
    'get organisation details': (slug: string) => ({ slug }),
    'set organisation details': (organisation: Maybe<OrganisationEntity>) => ({ organisation }),
  }
});




