// API: Banner
export const API_USERS = 'api/users';
export const API_USERS_STORE = 'api/users/:id';
export const API_USERS_UPDATE = 'api/users/:id';
export const API_USERS_DELETE = 'api/users/destroy';

// Route: USERS
export const USERS = 'users';
export const USERS_EDIT = 'users/edit/:id/';
export const USERS_CREATE = 'users/create';

// Actions: USERS
export const ACTIONS = [
  { name: 'Edit', url: 'users/edit/:id/', classname: '' },
  { name: 'Delete', callback: 'handleDelete', classname: '' },
];

// Toolbar: USERS
export const TOOLBAR = [
  { name: 'Add', url: 'users/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: USERS
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'first_name', display: 'First Name' }];

// Breadcrumb: USERS
export const BREADCRUMB_USERS = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Users',
    subPath: 'users',
    path: '/users',
  },
];
export const BREADCRUMB_USERS_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Users',
    subPath: 'users',
    path: '/users',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/users/edit',
  },
];
export const BREADCRUMB_USERS_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Users',
    subPath: 'users',
    path: '/users',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/users/create',
  },
];
