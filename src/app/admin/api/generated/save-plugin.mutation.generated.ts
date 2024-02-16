/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SavePluginMutationVariables = Types.Exact<{
  entity: Types.PluginEntityInput;
}>;


export type SavePluginMutation = { __typename?: 'Mutation', savePlugin?: { __typename?: 'PluginEntity', id?: string | null } | null };

export const SavePluginDocument = gql`
    mutation savePlugin($entity: PluginEntityInput!) {
  savePlugin(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SavePluginGQL extends Apollo.Mutation<SavePluginMutation, SavePluginMutationVariables> {
    override document = SavePluginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }