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
    {
      name: 'bodyText',
      title: 'Brødtekst',
      type: 'array',
      of: [{type: 'block'}]
    },
    { name: 'image', title: 'Bilde', type: 'image' },
    {
      name: 'article',
      title: 'Artikkel',
      type: 'reference',
      to: [{ type: 'article' }],
      description: 'Peker til en artikkel, som blir vist på forsiden.',
      weak: true
    }
  ]
};
