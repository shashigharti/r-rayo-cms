// API: Banner
export const API_BANNER = 'api/banners';
export const API_BANNER_STORE = '/api/banners';
export const API_BANNER_EDIT = '/api/banners/:id/edit';
export const API_BANNER_UPDATE = '/api/banners/';
export const API_BANNER_DELETE = 'api/banners';

// Route: Banner
export const BANNER = '/banners';
export const BANNER_EDIT = 'banners/edit/:id/';
export const BANNER_CREATE = 'banners/create';

// Actions: Banner
export const ACTIONS = [
  { name: 'Edit', url: 'banners/edit/:id/', classname: 'edit' },
  { name: 'Delete', url: '/api/banners/', callback: 'handleDelete', classname: 'delete' },
];

// Toolbar: Banner
export const TOOLBAR = [
  { name: 'Add', url: 'banners/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: Banner
export const COLUMNS = [
  { key: 'id', display: 'ID' },
  { key: 'name', display: 'Name' },
  { key: 'banner_template', display: 'Template' },
];

// Breadcrumb: Banner
export const BREADCRUMB_BANNER = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Banner',
    subPath: 'banners',
    path: '/banners',
  },
];
export const BREADCRUMB_BANNER_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Banner',
    subPath: 'banners',
    path: '/banners',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/banners/edit',
  },
];
export const BREADCRUMB_BANNER_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Banner',
    subPath: 'banners',
    path: '/banners',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/banners/create',
  },
];

export const DROPDOWN_APIS = {
  cities: '/api/dropdown/cities',
  counties: '/api/dropdown/counties',
  zips: '/api/dropdown/zips',
  areas: '/api/dropdown/areas',
};
