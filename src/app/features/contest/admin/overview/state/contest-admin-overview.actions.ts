import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ContestEntity } from 'src/app/core/api/generated/schema';

export const ContestAdminOverviewActions = createActionGroup({
  source: 'Contest Admin Overview',
  events: {

    'set overview data': (contests: PageableList_ContestEntity) => ({ contests }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});
