import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/edlm/__docusaurus/debug',
    component: ComponentCreator('/edlm/__docusaurus/debug', '79c'),
    exact: true
  },
  {
    path: '/edlm/__docusaurus/debug/config',
    component: ComponentCreator('/edlm/__docusaurus/debug/config', 'd36'),
    exact: true
  },
  {
    path: '/edlm/__docusaurus/debug/content',
    component: ComponentCreator('/edlm/__docusaurus/debug/content', '2dd'),
    exact: true
  },
  {
    path: '/edlm/__docusaurus/debug/globalData',
    component: ComponentCreator('/edlm/__docusaurus/debug/globalData', '5ec'),
    exact: true
  },
  {
    path: '/edlm/__docusaurus/debug/metadata',
    component: ComponentCreator('/edlm/__docusaurus/debug/metadata', '2bb'),
    exact: true
  },
  {
    path: '/edlm/__docusaurus/debug/registry',
    component: ComponentCreator('/edlm/__docusaurus/debug/registry', 'e5c'),
    exact: true
  },
  {
    path: '/edlm/__docusaurus/debug/routes',
    component: ComponentCreator('/edlm/__docusaurus/debug/routes', '260'),
    exact: true
  },
  {
    path: '/edlm/docs',
    component: ComponentCreator('/edlm/docs', 'b9b'),
    routes: [
      {
        path: '/edlm/docs',
        component: ComponentCreator('/edlm/docs', '6e6'),
        routes: [
          {
            path: '/edlm/docs',
            component: ComponentCreator('/edlm/docs', '35f'),
            routes: [
              {
                path: '/edlm/docs/api',
                component: ComponentCreator('/edlm/docs/api', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/api-spec',
                component: ComponentCreator('/edlm/docs/api-spec', '759'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/async',
                component: ComponentCreator('/edlm/docs/async', '52d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/bpmn',
                component: ComponentCreator('/edlm/docs/bpmn', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/concept',
                component: ComponentCreator('/edlm/docs/concept', '1eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/erd',
                component: ComponentCreator('/edlm/docs/erd', '9e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/frontend',
                component: ComponentCreator('/edlm/docs/frontend', 'eeb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/functional',
                component: ComponentCreator('/edlm/docs/functional', '118'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/intro',
                component: ComponentCreator('/edlm/docs/intro', '0fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/nonfunctional',
                component: ComponentCreator('/edlm/docs/nonfunctional', '70c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/platformization',
                component: ComponentCreator('/edlm/docs/platformization', 'aa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/requirements-gathering',
                component: ComponentCreator('/edlm/docs/requirements-gathering', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/storage',
                component: ComponentCreator('/edlm/docs/storage', 'acd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/edlm/docs/uml',
                component: ComponentCreator('/edlm/docs/uml', '811'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/edlm/',
    component: ComponentCreator('/edlm/', 'f64'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
