/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AddressFragmentDoc } from '../../../../../core/api/generated/address.fragment.generated';
import { MediaFragmentDoc } from '../../../../../core/api/generated/media.fragment.generated';
export type AuthorCardFragment = { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null } | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null };

export const AuthorCardFragmentDoc = gql`
    fragment AuthorCard on UserContextEntity {
  id
  slug
  user {
    id
    email
    firstName
    lastName
    phone
  }
  address {
    ...Address
  }
  uploads {
    id
    profilePicture
    media {
      ...Media
    }
  }
}
    ${AddressFragmentDoc}
${MediaFragmentDoc}`;