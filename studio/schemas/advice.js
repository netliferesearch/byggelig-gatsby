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
          { title: 'Entreprenør', value: 'entreprenør' }
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
