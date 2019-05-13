export default {
  name: 'phase',
  title: 'Faseside',
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
      name: 'icon',
      title: 'Ikon',
      type: 'image'
    },
    {
      name: 'mustHave',
      title: 'Må ha',
      type: 'array',
      of: [{ type: 'point' }]
    },
    {
      name: 'shouldHave',
      title: 'Bør ha',
      type: 'array',
      of: [
        {
          name: 'point',
          title: 'Punkt',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [{ type: 'block' }]
            }
          ]
        }
      ]
    },
    {
      name: 'niceToHave',
      title: 'Fint å ha',
      type: 'array',
      of: [
        {
          name: 'point',
          title: 'Punkt',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [{ type: 'block' }]
            }
          ]
        }
      ]
    }
  ]
};
