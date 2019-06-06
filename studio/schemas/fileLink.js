export default {
  name: 'fileLink',
  title: 'Fil og fil-lenke',
  type: 'object',
  fields: [
    {
      name: 'file',
      title: 'Fil',
      type: 'file'
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Lenketekst'
    }
  ]
};
