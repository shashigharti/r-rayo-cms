// API: ROLE
export const API_ROLE = 'api/roles';
export const API_ROLE_EDIT = 'roles/edit/:id/';
export const API_ROLE_STORE = 'api/roles';
export const API_ROLE_UPDATE = 'api/roles/:id';
export const API_ROLE_DELETE = 'api/roles/destroy';

// Route: ROLE
export const ROLE = 'roles';
export const ROLE_EDIT = 'roles/edit/:id/';
export const ROLE_CREATE = 'roles/create';

// Actions: ROLE
export const ACTIONS = [
  { name: 'Edit', url: 'roles/edit/:id/', classname: 'edit', type: 'LinkAction' },
  { name: 'Delete', callback: 'handleDelete', classname: 'delete', type: 'AnchorAction' },
];

// Toolbar: ROLE
export const TOOLBAR = [
  { name: 'Add', url: '/roles/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: ROLE
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'name', display: 'Name' }];

// Breadcrumb: ROLE
export const BREADCRUMB_ROLE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'ROLE',
    subPath: 'roles',
    path: '/roles',
  },
];
export const BREADCRUMB_ROLE_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'ROLE',
    subPath: 'roles',
    path: '/roles',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/roles/edit',
  },
];
export const BREADCRUMB_ROLE_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'ROLE',
    subPath: 'roles',
    path: '/roles',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/roles/create',
  },
];
