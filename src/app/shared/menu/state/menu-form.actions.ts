import { createActionGroup, emptyProps } from '@ngrx/store';
import { MenuItemEntity, MenuItemEntityInput } from 'src/app/core/api/generated/schema';

export const MenuFormActions = createActionGroup({
  source: 'Menu Form',
  events: {
    'get parent menu items': emptyProps(),
    'parent menu items retrieved': (parents: MenuItemEntity[]) => ({ parents }),

    'save parent menu': (menuItem: MenuItemEntityInput) => ({ menuItem }),
  }
});
