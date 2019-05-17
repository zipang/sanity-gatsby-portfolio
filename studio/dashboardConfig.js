export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cde74d49caf5b03245b4fdf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-imxzv134',
                  apiId: '6830523f-845c-4ef9-861d-3b7d5d224241'
                },
                {
                  buildHookId: '5cde74d4a9b1500b470333cc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qn41yzb2',
                  apiId: '5d9c81fa-28a1-49a0-8262-a99955fb14ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zipang/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-qn41yzb2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
