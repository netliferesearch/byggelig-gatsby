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
              const block = (value.blocks || []).find(
                block => block._type === 'block'
              );
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
        }
      ]
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
