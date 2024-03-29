import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { DealFilterQueryDefinition, DealFilterQueryParams } from 'src/app/core/typings/filter-params/deal-filter-param';

export const createDealParams = (queryParams?: DealFilterQueryParams) => {
  const params = {
    expression: {
      conjunction: {
        operands: [],
      }
    }
  } as FilterSortPaginateInput;

  if (queryParams && queryParams[DealFilterQueryDefinition.offerOnly]) {
    params.expression?.conjunction?.operands?.push({
      entity: {
        path: 'offer',
        value: 'true'
      }
    });
  } else if (queryParams && queryParams[DealFilterQueryDefinition.searchOnly]) {
    params.expression?.conjunction?.operands?.push({
      entity: {
        path: 'offer',
        value: 'false'
      }
    });
  }

  return params;
}