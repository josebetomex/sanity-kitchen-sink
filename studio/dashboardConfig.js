export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc59c6aa66a8e743877954a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vguajy2g',
                  apiId: '336fc66e-2c7e-46be-8dd5-814fe3569441'
                },
                {
                  buildHookId: '5fc59c6b41d207673aabae12',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3e4kfnvp',
                  apiId: '4265e9ed-574f-496e-8d48-2020906dcd4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josebetomex/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3e4kfnvp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
