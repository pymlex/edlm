const simplePlantUML = require('@akebifiky/remark-simple-plantuml');

const config = {
  title: 'edlm',
  tagline: 'Docs as Code',
  favicon: 'img/favicon.ico',
  url: 'https://pymlex.github.io',
  baseUrl: '/edlm/',
  organizationName: 'pymlex',
  projectName: 'edlm',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  plugins: [
    ['drawio', {}],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [simplePlantUML],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'openapi',
            spec: 'api_specs/openapi.yaml',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'edlm',
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Документация' },
        { href: 'https://github.com/pymlex/edlm', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документы',
          items: [
            { label: 'Введение', to: '/docs/intro' },
            { label: 'API Reference', to: '/docs/api-spec' },
          ],
        },
      ],
    },
  },
};

module.exports = config;