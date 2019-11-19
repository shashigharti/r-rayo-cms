// API: COUNTY
export const API_COUNTY = 'api/counties';
export const API_COUNTY_EDIT = 'api/counties/:id/edit';
export const API_COUNTY_STORE = '/api/counties';
export const API_COUNTY_UPDATE = '/api/counties/';
export const API_COUNTY_DELETE = 'api/counties/destroy';

// Route: COUNTY
export const COUNTY = '/counties';
export const COUNTY_EDIT = 'counties/edit/:id/';
export const COUNTY_CREATE = 'counties/create';

// Actions: COUNTY
export const ACTIONS = [
  { name: 'Edit', url: 'counties/edit/:id/', classname: 'edit', type: 'LinkAction' },
  {
    name: 'Delete',
    url: '/api/counties/',
    callback: 'handleDelete',
    classname: 'delete',
    type: 'AnchorAction',
  },
];

// Toolbar: COUNTY
export const TOOLBAR = [
  { name: 'Add', url: 'counties/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: COUNTY
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'name', display: 'Name' }];

// Breadcrumb: COUNTY
export const BREADCRUMB_COUNTY = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'COUNTY',
    subPath: 'counties',
    path: '/counties',
  },
];
export const BREADCRUMB_COUNTY_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'COUNTY',
    subPath: 'counties',
    path: '/counties',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/counties/edit',
  },
];
export const BREADCRUMB_COUNTY_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'COUNTY',
    subPath: 'counties',
    path: '/counties',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/counties/create',
  },
];
