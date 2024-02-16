import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_PluginEntity, PluginEntity, PluginEntityInput } from 'src/app/core/api/generated/schema';

export const AdminSettingsPluginActions = createActionGroup({
  source: 'Plugin Admin Overview',
  events: {

    'set overview data': (plugins: PageableList_PluginEntity) => ({ plugins }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'toggle plugin': (plugin?: Maybe<PluginEntity>) => ({ plugin }),
    'plugin toggled': emptyProps(),

    'get plugin': (id?: Maybe<string>) => ({ id }),
    'set plugin': (plugin: Maybe<PluginEntity>) => ({ plugin }),

    'save plugin': (plugin: PluginEntityInput) => ({ plugin }),
    'plugin saved': emptyProps(),

    'cancelled': emptyProps()
  }
});
