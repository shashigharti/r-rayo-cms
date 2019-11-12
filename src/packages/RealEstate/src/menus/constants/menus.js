// API: MENU
export const API_MENU = 'api/menus';
export const API_MENU_GEDIT = 'menus/edit/:id/';
export const API_MENU_STORE = 'api/menus';
export const API_MENU_UPDATE = 'api/menus/:id';
export const API_MENU_DELETE = 'api/menus/destroy';

// Route: MENU
export const MENU = 'menus';
export const MENU_EDIT = 'menus/edit/:id/';
export const MENU_CREATE = 'menus/create';

// Actions: MENU
export const ACTIONS = [
  { name: 'Edit', url: 'menus/edit/:id/', classname: 'edit', type: 'LinkAction' },
  { name: 'Delete', callback: 'handleDelete', classname: 'delete', type: 'AnchorAction' },
];

// Toolbar: MENU
export const TOOLBAR = [
  { name: 'Add', url: '/menus/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: MENU
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'name', display: 'Name' }];

// Breadcrumb: MENU
export const BREADCRUMB_MENU = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'MENU',
    subPath: 'menus',
    path: '/menus',
  },
];
export const BREADCRUMB_MENU_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'MENU',
    subPath: 'menus',
    path: '/menus',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/menus/edit',
  },
];
export const BREADCRUMB_MENU_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'MENU',
    subPath: 'menus',
    path: '/menus',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/menus/create',
  },
];
