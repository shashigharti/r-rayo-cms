// API: TEMPLATE
export const API_TEMPLATES = 'api/emails/templates';
export const API_TEMPLATES_EDIT = 'api/emails/templates/:id/edit';
export const API_TEMPLATES_STORE = '/api/emails/templates';
export const API_TEMPLATES_UPDATE = '/api/emails/templates/';
export const API_TEMPLATES_DELETE = 'api/emails/templates/destroy';

// Route: TEMPLATE
export const TEMPLATE = '/templates';
export const TEMPLATES_EDIT = '/templates/edit/:id/';
export const TEMPLATES_CREATE = '/templates/create';

// Actions: TEMPLATE
export const ACTIONS = [
  { name: 'Edit', url: '/templates/edit/:id/', classname: 'edit', type: 'LinkAction' },
  {
    name: 'Delete',
    url: '/api/emails/templates/',
    callback: 'handleDelete',
    classname: 'delete',
    type: 'AnchorAction',
  },
];

// Toolbar: TEMPLATE
export const TOOLBAR = [
  { name: 'Add', url: '/templates/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: TEMPLATE
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'title', display: 'Title' }];

// Breadcrumb: TEMPLATE
export const BREADCRUMB_TEMPLATES = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'TEMPLATE',
    subPath: 'emails/templates',
    path: '/emails/templates',
  },
];
export const BREADCRUMB_TEMPLATES_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'TEMPLATE',
    subPath: 'emails/templates',
    path: '/emails/templates',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/emails/templates/edit',
  },
];
export const BREADCRUMB_TEMPLATES_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'TEMPLATE',
    subPath: 'emails/templates',
    path: '/emails/templates',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/emails/templates/create',
  },
];
