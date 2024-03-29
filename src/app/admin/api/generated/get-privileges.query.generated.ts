/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetRolePrivilegesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetRolePrivilegesQuery = { __typename?: 'Query', getRolePrivileges?: { __typename?: 'PageableList_RolePrivilegeEntity', total: any, result?: Array<{ __typename?: 'RolePrivilegeEntity', id?: string | null, code?: string | null, translatables?: Array<{ __typename?: 'RolePrivilegeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetRolePrivilegesDocument = gql`
    query getRolePrivileges($params: FilterSortPaginateInput) {
  getRolePrivileges(params: $params) {
    result {
      id
      code
      translatables {
        id
        name
        language {
          ...Language
        }
      }
    }
    total
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRolePrivilegesGQL extends Apollo.Query<GetRolePrivilegesQuery, GetRolePrivilegesQueryVariables> {
    override document = GetRolePrivilegesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }