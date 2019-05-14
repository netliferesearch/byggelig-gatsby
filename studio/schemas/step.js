export default {
  name: 'step',
  title: 'Steg',
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
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      },
      validation: Rule => Rule.required()
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
      of: [{ type: 'advice' }]
    },
    {
      name: 'shouldHave',
      title: 'Bør ha',
      type: 'array',
      of: [{ type: 'advice' }]
    }
  ]
};
