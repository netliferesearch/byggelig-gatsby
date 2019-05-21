export default {
  name: 'meeting',
  title: 'Møte',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Navn på møte',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Formål med møtet',
      type: 'text'
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
