export default {
  name: 'point',
  title: 'Punkt',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
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
