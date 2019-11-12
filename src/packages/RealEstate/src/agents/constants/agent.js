// API: AGENT
export const API_AGENT = 'api/leads/agents';
export const API_AGENT_EDIT = 'leads/agents/edit/:id/';
export const API_AGENT_STORE = 'api/leads/agents';
export const API_AGENT_UPDATE = 'api/leads/agents/:id';
export const API_AGENT_DELETE = 'api/leads/agents/destroy';

// Route: AGENT
export const AGENT = 'leads/agents';
export const AGENT_EDIT = 'leads/agents/edit/:id/';
export const AGENT_CREATE = 'leads/agents/create';

// Actions: AGENT
export const ACTIONS = [
  { name: 'Edit', url: 'leads/agents/edit/:id/', classname: 'edit', type: 'LinkAction' },
  { name: 'Delete', callback: 'handleDelete', classname: 'delete', type: 'AnchorAction' },
];

// Toolbar: AGENT
export const TOOLBAR = [
  { name: 'Add', url: '/agents/create', classname: 'add' },
  { name: 'Download', url: '', classname: 'file_upload' },
  { name: 'Upload', url: '', classname: 'file_download' },
];

// Columns: AGENT
export const COLUMNS = [{ key: 'id', display: 'ID' }, { key: 'first_name', display: 'First Name' }];

// Breadcrumb: AGENT
export const BREADCRUMB_AGENT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'AGENT',
    subPath: 'leads/agents',
    path: '/leads/agents',
  },
];
export const BREADCRUMB_AGENT_EDIT = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'AGENT',
    subPath: 'leads/agents',
    path: '/leads/agents',
  },
  {
    name: 'Edit',
    subPath: 'edit',
    path: '/leads/agents/edit',
  },
];
export const BREADCRUMB_AGENT_CREATE = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'AGENT',
    subPath: 'leads/agents',
    path: '/leads/agents',
  },
  {
    name: 'Create',
    subPath: 'create',
    path: '/leads/agents/create',
  },
];
