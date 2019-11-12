// API: USER
export const API_USER = 'api/users';
export const API_USER_EDIT = 'users/edit/:id/';
export const API_USER_STORE = '/api/users';
export const API_USER_UPDATE = 'api/users/:id';
export const API_USER_DELETE = 'api/users/destroy';

// Route: USER
export const USER = 'users';
export const USER_EDIT = 'users/edit/:id/';
export const USER_CREATE = 'users/create';

// Actions: USER
export const ACTIONS = [
  { name: 'Edit', url: 'users/edit/:id/', classname: 'edit', type: 'LinkAction' },
  { name: 'Delete', callback: 'handleDelete', classname: 'delete', type: 'AnchorAction' },
];

// Toolbar: USER
export const TOOLBAR = [
  { name: 'Add', url: '/users/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: USER
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'first_name', display: 'First Name' }];

// Breadcrumb: USER
export const BREADCRUMB_USER = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'USER',
    subPath: 'users',
    path: '/users',
  },
];
export const BREADCRUMB_USER_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'USER',
    subPath: 'users',
    path: '/users',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/users/edit',
  },
];
export const BREADCRUMB_USER_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'USER',
    subPath: 'users',
    path: '/users',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/users/create',
  },
];
