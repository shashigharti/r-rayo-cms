// API: Page
export const API_PAGE = 'api/pages';
export const API_PAGE_STORE = 'api/pages/:id';
export const API_PAGE_UPDATE = 'api/pages/:id';
export const API_PAGE_DELETE = 'api/pages/destroy';

// Route: Page
export const PAGE = 'pages';
export const PAGE_EDIT = 'pages/edit/:id/';
export const PAGE_CREATE = 'pages/create';

// Actions: Page
export const ACTIONS = [
    { name: 'Edit', url: 'pages/edit/:id/', classname: '' },
    { name: 'Delete', callback: 'handleDelete', classname: '' }
];

// Toolbar: Page
export const TOOLBAR = [
    { name: 'Add', url: 'pages/create', classname: 'add' },
    { name: 'Download', url: '', classname: 'file_upload' },
    { name: 'Upload', url: '', classname: 'file_download' }
];

// Breadcrumb: Page
export const BREADCRUMB_PAGE = [{
    name: 'Home',
    subPath: '',
    path: '',
},
{
    name: 'Page',
    subPath: 'pages',
    path: '/pages',
}];
export const BREADCRUMB_PAGE_EDIT = [{
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
    name: 'Edit',
    subPath: 'edit',
    path: '/pages/edit',
}
];
export const BREADCRUMB_PAGE_CREATE = [{
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
    path: '/pages/create',
}
];
