export default {
  name: 'settings',
  title: 'Innstillinger',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Sidenavn',
      description: 'Brukes i bla. title-elementet i head.',
      type: 'string'
    },
    {
      name: 'mainSubHeading',
      title: 'Hovedunderoverskrift.',
      description: 'Brukes i bla. headeren, ved siden av logo.',
      type: 'string'
    },
    {
      name: 'fallbackImage',
      title: 'Reservebilde',
      description:
        'Bilde som vises i sosiale medier, hvis det ikke finnes noe annet bilde på sidemalen.',
      type: 'image'
    }
  ]
};
