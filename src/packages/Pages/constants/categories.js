// API: PAGE_CATEGORIES
export const API_PAGE_CATEGORIES = 'api/pages/categories';
export const API_PAGE_CATEGORIES_EDIT = 'pages/edit/categories/:id/';
export const API_PAGE_CATEGORIES_STORE = '/api/pages/categories';
export const API_PAGE_CATEGORIES_UPDATE = 'api/pages/categories/:id';
export const API_PAGE_CATEGOREIS_DELETE = 'api/pages/categories/destroy';

// Route: PAGE_CATEGORIES
export const PAGE_CATEGORIES = 'pages/categories';
export const PAGE_CATEGORIES_EDIT = 'pages/categories/edit/:id/';
export const PAGE_CATEGORIES_CREATE = 'pages/categories/create';

// Actions: PAGE_CATEGORIES
export const CATEGORIES_ACTIONS = [
  { name: 'Edit', url: '/pages/categories/edit/:id/', classname: 'edit', type: 'LinkAction' },
  { name: 'Delete', callback: 'handleDelete', classname: 'delete', type: 'AnchorAction' },
];

// Toolbar: PAGE_CATEGORIES
export const CATEGORIES_TOOLBAR = [
  { name: 'Add', url: '/pages/categories/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: PAGE_CATEGORIES
export const CATEGORIES_COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'name', display: 'Name' }];

// Breadcrumb: PAGE_CATEGORIES
export const BREADCRUMB_PAGE_CATEGORIES = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Page Categories',
    subPath: 'categories',
    path: '/pages/categories',
  },
];
export const BREADCRUMB_PAGE_CATEGORIES_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Page Categories',
    subPath: 'categories',
    path: '/pages/categories',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/pages/edit',
  },
];
export const BREADCRUMB_PAGE_CATEGORIES_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Page Categories',
    subPath: 'pages',
    path: '/pages/categories',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/pages/categories/create',
  },
];
