// API: LEAD
export const API_LEAD = 'api/leads';
export const API_LEAD_EDIT = 'api/leads/:id/edit';
export const API_LEAD_STORE = '/api/leads';
export const API_LEAD_UPDATE = '/api/leads/';
export const API_LEAD_DELETE = '/api/leads/';

// Route: LEAD
export const LEAD = 'leads';
export const LEAD_EDIT = 'leads/edit/:id/';
export const LEAD_CREATE = 'leads/create';

// Actions: LEAD
export const ACTIONS = [
  { name: 'Edit', url: 'leads/edit/:id/', classname: 'edit', type: 'LinkAction' },
  { name: 'Delete', url: '/api/leads/', callback: 'handleDelete', classname: 'delete', type: 'AnchorAction' },
];

// Toolbar: LEAD
export const TOOLBAR = [
  { name: 'Add', url: '/leads/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: LEAD
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'firstname', display: 'First Name' }];

// Breadcrumb: LEAD
export const BREADCRUMB_LEAD = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'LEAD',
    subPath: 'leads',
    path: '/leads',
  },
];
export const BREADCRUMB_LEAD_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'LEAD',
    subPath: 'leads',
    path: '/leads',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/leads/edit',
  },
];
export const BREADCRUMB_LEAD_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'LEAD',
    subPath: 'leads',
    path: '/leads',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/leads/create',
  },
];
