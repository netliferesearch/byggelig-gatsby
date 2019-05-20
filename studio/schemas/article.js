import slugify from '@sindresorhus/slugify';

export default {
  name: 'article',
  title: 'Artikkel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
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
      name: 'intro',
      title: 'Intro',
      type: 'text'
    },
    {
      name: 'introImage',
      title: 'Intro bilde',
      type: 'introImage'
    },
    {
      name: 'bodyText',
      title: 'Brødtekst',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ]
          }
        },
        { type: 'image' },
        {
          type: 'linkButton'
        }
      ]
    },
    {
      name: 'linkText',
      title: 'Lenketekst',
      description:
        'Navnet som som lenketekst dersom dette vises som en referanse på en annen side. Feks: "Slik fikk de det til"',
      type: 'text'
    }
  ]
};
