/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { DealCardFragmentDoc } from './deal-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetDealCardQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.DealEntityInput>;
}>;


export type GetDealCardQuery = { __typename?: 'Query', getDeal?: { __typename?: 'DealEntity', id?: string | null, created?: any | null, price?: number | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, category?: { __typename?: 'DealCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, created?: any | null, translatables?: Array<{ __typename?: 'DealCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, creator?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null, uploads?: Array<{ __typename?: 'DealMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, translatables?: Array<{ __typename?: 'DealTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetDealCardDocument = gql`
    query getDealCard($entity: DealEntityInput) {
  getDeal(entity: $entity) {
    ...DealCard
  }
}
    ${DealCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDealCardGQL extends Apollo.Query<GetDealCardQuery, GetDealCardQueryVariables> {
    override document = GetDealCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }