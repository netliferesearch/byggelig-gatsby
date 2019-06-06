// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import document schemas
import settings from './settings';
import page from './page';
import step from './step';
import article from './article';

// Importing object schemas
import linkBlock from './linkBlock';
import advice from './advice';
import introImage from './introImage';
import fileLink from './fileLink';
import meeting from './meeting';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: [
    ...schemaTypes,
    settings,
    page,
    step,
    article,
    linkBlock,
    advice,
    introImage,
    fileLink,
    meeting
  ]
});
