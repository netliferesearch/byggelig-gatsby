export default {
  name: 'advice',
  title: 'Råd',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Tekst',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: []
          }
        },
        {
          name: 'someFile',
          title: 'Fil',
          type: 'file',
          fields: [
            {
              name: 'description',
              title: 'Beskrivelse',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'role',
      title: 'Rolle',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Utbygger', value: 'utbygger' },
          { title: 'Entreprenør', value: 'entreprenor' }
        ]
      }
    }
  ],
  preview: {
    select: {
      blocks: 'text'
    },
    prepare(value) {
      const block = (value.blocks || []).find(block => block._type === 'block');
      return {
        title: block
          ? block.children
              .filter(child => child._type === 'span')
              .map(span => span.text)
              .join('')
          : 'No title'
      };
    }
  }
};
