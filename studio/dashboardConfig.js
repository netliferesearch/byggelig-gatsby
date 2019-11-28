export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'My Netlify deploys',
              sites: [
                {
                  title: 'Byggelig',
                  apiId: '9c9c731f-0838-48e5-8380-4eb3137cd655',
                  buildHookId: '5cd98ba747a849ca5fbcff05',
                  name: 'byggelig',
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/netliferesearch/byggelig-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://bygglig.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {
      name: 'project-users'
    }
  ]
};
