// API: CITY
export const API_CITY = 'api/cities';
export const API_CITY_EDIT = 'api/cities/:id/edit';
export const API_CITY_STORE = '/api/cities';
export const API_CITY_UPDATE = '/api/cities/';
export const API_CITY_DELETE = 'api/cities/destroy';

// Route: CITY
export const CITY = 'cities';
export const CITY_EDIT = 'cities/edit/:id/';
export const CITY_CREATE = 'cities/create';

// Actions: CITY
export const ACTIONS = [
  { name: 'Edit', url: 'cities/edit/:id/', classname: 'edit', type: 'LinkAction' },
  { name: 'Delete', callback: 'handleDelete', classname: 'delete', type: 'AnchorAction' },
];

// Toolbar: CITY
export const TOOLBAR = [
  { name: 'Add', url: 'cities/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: CITY
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'name', display: 'Name' }];

// Breadcrumb: CITY
export const BREADCRUMB_CITY = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'CITY',
    subPath: 'cities',
    path: '/cities',
  },
];
export const BREADCRUMB_CITY_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'CITY',
    subPath: 'cities',
    path: '/cities',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/cities/edit',
  },
];
export const BREADCRUMB_CITY_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'CITY',
    subPath: 'cities',
    path: '/cities',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/cities/create',
  },
];
