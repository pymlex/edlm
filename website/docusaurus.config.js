const { themes: prismThemes } = require('prism-react-renderer');
const simplePlantUML = require('@akebifiky/remark-simple-plantuml');

const config = {
  title: 'EDLM',
  tagline: 'Документация по варианту 2',
  favicon: 'img/favicon.ico',
  url: 'https://pymlex.github.io',
  baseUrl: '/edlm/',
  organizationName: 'pymlex',
  projectName: 'edlm',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  plugins: [['drawio', {}]],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          remarkPlugins: [simplePlantUML]
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      }
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'openapi',
            spec: 'api_specs/openapi.yaml'
          }
        ],
        theme: {
          primaryColor: '#2563eb'
        }
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'EDLM',
      items: [
        { to: '/docs/intro', label: 'Документация', position: 'left' },
        { href: 'https://github.com/pymlex/edlm', label: 'GitHub', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      copyright: 'EDLM'
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  }
};

module.exports = config;
