// API: ZIP
export const API_ZIP = 'api/zips';
export const API_ZIP_EDIT = 'api/zips/:id/edit';
export const API_ZIP_STORE = '/api/zips';
export const API_ZIP_UPDATE = '/api/zips/';
export const API_ZIP_DELETE = 'api/zips/destroy';

// Route: ZIP
export const ZIP = 'zips';
export const ZIP_EDIT = 'zips/edit/:id/';
export const ZIP_CREATE = 'zips/create';

// Actions: ZIP
export const ACTIONS = [
  { name: 'Edit', url: 'zips/edit/:id/', classname: 'edit', type: 'LinkAction' },
  { name: 'Delete', callback: 'handleDelete', classname: 'delete', type: 'AnchorAction' },
];

// Toolbar: ZIP
export const TOOLBAR = [
  { name: 'Add', url: 'zips/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: ZIP
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'name', display: 'Name' }];

// Breadcrumb: ZIP
export const BREADCRUMB_ZIP = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'ZIP',
    subPath: 'zips',
    path: '/zips',
  },
];
export const BREADCRUMB_ZIP_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'ZIP',
    subPath: 'zips',
    path: '/zips',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/zips/edit',
  },
];
export const BREADCRUMB_ZIP_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'ZIP',
    subPath: 'zips',
    path: '/zips',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/zips/create',
  },
];
