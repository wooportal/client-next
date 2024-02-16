/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPluginsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetPluginsQuery = { __typename?: 'Query', getPlugins?: { __typename?: 'PageableList_PluginEntity', total: any, result?: Array<{ __typename?: 'PluginEntity', id?: string | null, active?: boolean | null, code?: string | null, icon?: string | null, name?: string | null, released?: boolean | null, translatables?: Array<{ __typename?: 'PluginTranslatableEntity', id?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetPluginsDocument = gql`
    query getPlugins($params: FilterSortPaginateInput) {
  getPlugins(params: $params) {
    result {
      id
      active
      code
      icon
      name
      released
      translatables {
        id
        name
        shortDescription
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
  export class GetPluginsGQL extends Apollo.Query<GetPluginsQuery, GetPluginsQueryVariables> {
    override document = GetPluginsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }