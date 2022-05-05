export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '627370b0c551cd6c7cf47286',
                  title: 'Sanity Studio',
                  name: '11-tysample-studio',
                  apiId: '593addad-77b1-4e2e-99e2-f32401b6da54'
                },
                {
                  buildHookId: '627370b0ab918a6cb4270304',
                  title: 'Blog Website',
                  name: '11-tysample',
                  apiId: '2976455f-2ffb-42a0-841f-e648160c0a03'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/persephonepunch/11tysample',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://11-tysample.netlify.app', category: 'apps'}
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
