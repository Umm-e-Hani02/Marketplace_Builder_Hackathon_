import { type SchemaTypeDefinition } from 'sanity'
import cars from './cars'
import { dashboard } from './dashboard'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars, dashboard],
}
