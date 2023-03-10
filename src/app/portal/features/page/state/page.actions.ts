import { createActionGroup, emptyProps } from '@ngrx/store';
import { ArticleEntity, EventEntity, Maybe, PageEntity } from 'src/schema/schema';

export const PageActions = createActionGroup({
  source: 'Page',
  events: {
    'get page': (slug?: Maybe<string>) => ({ slug }),
    'get landing page': emptyProps(),
    'set current page': (page: PageEntity) => ({ page }),
  }
});

export const PageFeatureActions = createActionGroup({
  source: 'Page Features',
  events: {
    'get recent events': emptyProps(),
    'set recent events': (events?: EventEntity[]) => ({ events }),

    'get recent articles': emptyProps(),
    'set recent articles': (articles?: ArticleEntity[]) => ({ articles }),
  }
});




