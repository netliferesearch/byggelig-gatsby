export default {
  name: 'linkFile',
  title: 'Fil-lenke',
  type: 'object',
  fields: [
    {
      name: 'someFile',
      title: 'Fil',
      type: 'file',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
};
