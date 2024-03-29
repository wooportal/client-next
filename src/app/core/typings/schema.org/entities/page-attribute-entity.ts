import { Maybe } from 'src/app/core/api/generated/schema';
import { Schema } from './schema-entity';
import { TranslatableEntitySchema } from './translateable-entity';

export class PageAttributeEntitySchema extends Schema {

  constructor(
    public about?: Maybe<TranslatableEntitySchema[]>,
  ) {
    super('CreativeWork');
  }
}