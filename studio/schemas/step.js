import slugify from '@sindresorhus/slugify';

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
        slugify: input => slugify(input)
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'stage',
      title: 'Trinn',
      type: 'string',
      options: {
        list: [
          { title: 'Reguleringsplan', value: 'reguleringsplan' },
          { title: 'Byggeprosess', value: 'byggeprosess' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'stepNumber',
      title: 'Stegnummer',
      type: 'number'
    },
    {
      name: 'intro',
      title: 'Intro',
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
    },
    {
      name: 'icon',
      title: 'Ikon',
      type: 'image'
    },
    {
      title: 'Prosjekteksempel',
      name: 'caseReference',
      type: 'reference',
      to: [{ type: 'article' }]
    },
    {
      name: 'meetings',
      title: 'Er det et møte etter leveransen?',
      description: 'Feks "Oppstartsmøte" mellom steg 1 og 2',
      type: 'array',
      of: [{ type: 'meeting' }]
    }
  ],
  preview: {
    select: {
      stage: 'stage',
      stepNumber: 'stepNumber',
      title: 'title'
    },
    prepare(selection) {
      const { stage, stepNumber, title } = selection;
      return {
        // Makes first character in title uppercase
        title: `${stage.replace(/^\w/, c => c.toUpperCase())} - ${stepNumber}`,
        subtitle: title
      };
    }
  }
};
