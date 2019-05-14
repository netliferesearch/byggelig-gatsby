import slugify from '@sindresorhus/slugify';

export default {
  name: 'page',
  title: 'Side',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Navnet på lenken til siden. Dette navnet må være unikt.',
      options: {
        source: 'title',
        slugify: input => slugify(input)
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text'
    },
    { name: 'image', title: 'Bilde', type: 'image' }
  ]
};
