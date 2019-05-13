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
      type: 'slug'
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'text'
    },
    {
      name: 'introImage',
      title: 'Intro bilde',
      type: 'image',
      fields: [
        {
          name: 'description',
          title: 'Beskrivelse',
          type: 'string'
        }
      ]
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
          name: 'linkButton',
          title: 'Lenkeknapp',
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'text',
              title: 'Tekst'
            },
            {
              type: 'url',
              name: 'url',
              title: 'url'
            }
          ]
        }
      ]
    }
  ]
};
