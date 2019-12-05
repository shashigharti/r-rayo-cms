// API: GROUP
export const API_GROUP = 'api/groups';
export const API_GROUP_EDIT = '/api/groups/:id/edit';
export const API_GROUP_STORE = '/api/groups';
export const API_GROUP_UPDATE = '/api/groups/';
export const API_GROUP_DELETE = 'api/groups/destroy';

// Route: GROUP
export const GROUP = '/groups';
export const GROUP_EDIT = 'groups/edit/:id';
export const GROUP_CREATE = 'groups/create';

// Actions: GROUP
export const ACTIONS = [
  { name: 'Edit', url: 'groups/edit/:id/', classname: 'edit', type: 'LinkAction' },
  {
    name: 'Delete',
    url: '/api/groups/',
    callback: 'handleDelete',
    classname: 'delete',
    type: 'AnchorAction',
  },
];

// Toolbar: GROUP
export const TOOLBAR = [
  { name: 'Add', url: '/groups/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: GROUP
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'name', display: 'Name' }];

// Breadcrumb: GROUP
export const BREADCRUMB_GROUP = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'GROUP',
    subPath: 'groups',
    path: '/groups',
  },
];
export const BREADCRUMB_GROUP_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'GROUP',
    subPath: 'groups',
    path: '/groups',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/groups/edit',
  },
];
export const BREADCRUMB_GROUP_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'GROUP',
    subPath: 'groups',
    path: '/groups',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/groups/create',
  },
];
