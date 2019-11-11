// API: Page CATEGORIES
export const API_PAGE_CATEGORIES = 'api/pages/categories';
export const API_PAGE_CATEGORIES_STORE = 'api/pages/categories';
export const API_PAGE_CATEGORIES_UPDATE = 'api/pages/categories/:id';
export const API_PAGE_CATEGRIES_DELETE = 'api/pages/categories/destroy';

// Route: Page CATEGORIES
export const PAGE_CATEGORIES = 'categories';
export const PAGE_CATEGORIES_EDIT = 'pages/categories/edit/';
export const PAGE_CATEGORIES_CREATE = 'categories/create';

// Actions: Page CATEGORIES
export const CATEGORIES_ACTIONS = [
  { name: 'Edit', url: 'pages/categories/edit/:id/', classname: '' },
  { name: 'Delete', callback: 'handleDelete', classname: '' },
];

// Toolbar: Page CATEGORIES
export const CATEGORIES_TOOLBAR = [
  { name: 'Add', url: 'categories/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: Page CATEGORIES
export const CATEGORIES_COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'name', display: 'Name' }];

// Breadcrumb: Page CATEGORIES
export const BREADCRUMB_PAGE_CATEGORIES = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Page categories',
    subPath: 'pages categories',
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
    subPath: 'pages categories',
    path: '/pages/categories',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/pages/categories/edit',
  },
];
export const BREADCRUMB_PAGE_CATEGORIES_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Page',
    subPath: 'pages',
    path: '/pages',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/pages/categories/create',
  },
];
