import Dashboard from './src/dashboard/Dashboard';

import TemplateList from './src/email-management/src/TemplateList';
import AddTemplate from './src/email-management/src/AddTemplate';
import EditTemplate from './src/email-management/src/EditTemplate';

import TemplateContextProvider, {
  TemplateContext,
} from './src/email-management/contexts/TemplateContext';

import AddRole from './src/roles/src/AddRole';
import Roles from './src/roles/RolePageList';
import RRow from './src/roles/Row';
// roles
import RoleList from './src/roles/src/RoleList';
import RoleContextProvider, { RoleContext } from './src/roles/contexts/RoleContext';

import FrontPageSettings from './src/settings/FrontPageSettings';
import GeneralSettings from './src/settings/GeneralSettings';
import LinkSettings from './src/settings/LinkSettings';
import PriceSettings from './src/settings/PriceSettings';
import SearchSettings from './src/settings/SearchSettings';
import Settings from './src/settings/Settings';
import SiteSettings from './src/settings/SiteSettings';

// users
import AddUser from './src/users/src/AddUser';
import EditUser from './src/users/src/EditUser';
import UserList from './src/users/src/UserList';
import UserContextProvider, { UserContext } from './src/users/contexts/UserContext';

import RegisterPage from './src/users/src/auth/RegisterPage';
import ForgotPasswordPage from './src/users/src/auth/ForgotPasswordPage';
import LoginPage from './src/users/src/auth/LoginPage';
import ResetPasswordPage from './src/users/src/auth/ResetPasswordPage';

// partials
import Header from './Components/Header';

import SideMenu from './Components/SideMenu/src/SideMenu';
import SideMenuContextProvider, {
  SideMenuContext,
} from './Components/SideMenu/contexts/SideMenuContext';

// contexts
import AuthContextProvider, { AuthContext } from './contexts/AuthContext';
import { authReducer } from './reducers/authReducer';

import { apiService } from './services/ApiService';
import { alertService } from './services/AlertService';

export {
  Dashboard,
  //
  AddTemplate,
  TemplateList,
  EditTemplate,
  TemplateContextProvider,
  TemplateContext,
  //
  AddRole,
  Roles,
  RoleList,
  RoleContextProvider,
  RoleContext,
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
  EditUser,
  RRow,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  LoginPage,
  UserList,
  UserContextProvider,
  UserContext,
  //
  Header,
  AuthContextProvider,
  AuthContext,
  authReducer,
  apiService,
  alertService,
  SideMenu,
  SideMenuContext,
  SideMenuContextProvider,
};
