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
    component: ComponentCreator('/edlm/docs', '24c'),
    routes: [
      {
        path: '/edlm/docs',
        component: ComponentCreator('/edlm/docs', 'be5'),
        routes: [
          {
            path: '/edlm/docs',
            component: ComponentCreator('/edlm/docs', '7f6'),
            routes: [
              {
                path: '/edlm/docs/api-spec',
                component: ComponentCreator('/edlm/docs/api-spec', '3a1'),
                exact: true
              },
              {
                path: '/edlm/docs/architecture/async',
                component: ComponentCreator('/edlm/docs/architecture/async', '864'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/architecture/bpmn',
                component: ComponentCreator('/edlm/docs/architecture/bpmn', '897'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/architecture/c4',
                component: ComponentCreator('/edlm/docs/architecture/c4', '903'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/architecture/erd',
                component: ComponentCreator('/edlm/docs/architecture/erd', 'b77'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/architecture/platformization',
                component: ComponentCreator('/edlm/docs/architecture/platformization', 'c3f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/architecture/storage',
                component: ComponentCreator('/edlm/docs/architecture/storage', 'ed0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/interface/api',
                component: ComponentCreator('/edlm/docs/interface/api', '3d7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/interface/api-spec',
                component: ComponentCreator('/edlm/docs/interface/api-spec', 'f23'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/interface/frontend',
                component: ComponentCreator('/edlm/docs/interface/frontend', '39b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/intro',
                component: ComponentCreator('/edlm/docs/intro', '7eb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/requirements/concept',
                component: ComponentCreator('/edlm/docs/requirements/concept', '2f1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/requirements/functional',
                component: ComponentCreator('/edlm/docs/requirements/functional', '9f7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/requirements/nonfunctional',
                component: ComponentCreator('/edlm/docs/requirements/nonfunctional', 'e17'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/requirements/requirements-gathering',
                component: ComponentCreator('/edlm/docs/requirements/requirements-gathering', 'a70'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/edlm/docs/uml',
                component: ComponentCreator('/edlm/docs/uml', '51f'),
                exact: true
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
