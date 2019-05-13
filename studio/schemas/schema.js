// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import document schemas
import page from './page';
import phase from './phase';
import article from './article';

// Importing object schemas
import linkButton from './linkButton';
import point from './point';
import introImage from './introImage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: [...schemaTypes, page, phase, article, linkButton, point, introImage]
});