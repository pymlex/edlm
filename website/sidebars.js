const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Требования',
      items: [
        'requirements/concept',
        'requirements/functional',
        'requirements/nonfunctional',
        'requirements/requirements-gathering',
      ],
    },
    {
      type: 'category',
      label: 'Архитектура',
      items: [
        'architecture/bpmn',
        'architecture/c4',
        'architecture/async',
        'architecture/erd',
        'architecture/storage',
        'architecture/platformization',
      ],
    },
    {
      type: 'category',
      label: 'Интерфейс и API',
      items: [
        'interface/frontend',
        'interface/api',
        'interface/api-spec',
      ],
    },
  ],
};

module.exports = sidebars;