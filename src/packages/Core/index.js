import Dashboard from './src/dashboard/Dashboard';

import AddTemplate from './src/email-management/AddTemplate';
import Templates from './src/email-management/Templates';

import AddRole from './src/roles/AddRole';
import Roles from './src/roles/RolePageList';
import RRow from './src/roles/Row';
// roles
import RoleList from './src/roles/src/RoleList';

import FrontPageSettings from './src/settings/FrontPageSettings';
import GeneralSettings from './src/settings/GeneralSettings';
import LinkSettings from './src/settings/LinkSettings';
import PriceSettings from './src/settings/PriceSettings';
import SearchSettings from './src/settings/SearchSettings';
import Settings from './src/settings/Settings';
import SiteSettings from './src/settings/SiteSettings';

// users
import AddUser from './src/users/AddUser';
//should remove previous users component
import Users from './src/users/Users';
import UserList from './src/users/src/UserList';
//

import URow from './src/users/Row';
import RegisterPage from './src/users/RegisterPage';
import ForgotPasswordPage from './src/users/ForgotPasswordPage';
import LoginPage from './src/users/LoginPage';

// partials
import Header from './Components/Header';

// contexts
import AuthContextProvider, { AuthContext } from './contexts/AuthContext';
import { authReducer } from './reducers/authReducer';

export {
  Dashboard,
  //
  AddTemplate,
  Templates,
  //
  AddRole,
  Roles,
  URow,
  RoleList,
  //
  FrontPageSettings,
  GeneralSettings,
  LinkSettings,
  PriceSettings,
  SearchSettings,
  Settings,
  SiteSettings,
  //
  AddUser,
  Users,
  RRow,
  RegisterPage,
  ForgotPasswordPage,
  LoginPage,
  UserList,
  //
  Header,
  AuthContextProvider,
  AuthContext,
  authReducer,
};
