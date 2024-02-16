/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPluginQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.PluginEntityInput>;
}>;


export type GetPluginQuery = { __typename?: 'Query', getPlugin?: { __typename?: 'PluginEntity', id?: string | null, name?: string | null, shortDescription?: string | null, icon?: string | null, active?: boolean | null, code?: string | null, translatables?: Array<{ __typename?: 'PluginTranslatableEntity', id?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, menuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, order?: number | null, icon?: string | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, parent?: { __typename?: 'MenuItemEntity', id?: string | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null } | null> | null } | null };

export const GetPluginDocument = gql`
    query getPlugin($entity: PluginEntityInput) {
  getPlugin(entity: $entity) {
    id
    name
    shortDescription
    icon
    active
    code
    translatables {
      id
      name
      shortDescription
      language {
        ...Language
      }
    }
    menuItems {
      id
      order
      icon
      translatables {
        id
        name
        shortDescription
        language {
          ...Language
        }
      }
      parent {
        id
        translatables {
          id
          name
          language {
            ...Language
          }
        }
      }
    }
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPluginGQL extends Apollo.Query<GetPluginQuery, GetPluginQueryVariables> {
    override document = GetPluginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }