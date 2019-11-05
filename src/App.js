import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './containers/home/Dashboard';
import { LoginPage } from './containers/login/LoginPage';
import { RegisterPage } from './containers/register/RegisterPage';
import { AddTemplate } from './containers/email-management/AddTemplate';
import { Templates } from './containers/email-management/Templates';
import { Settings } from './containers/settings/Settings';
import { Roles } from './containers/user-management/Roles/Roles';
import { Users } from './containers/user-management/Users/Users';
import { AddRole } from './containers/user-management/Roles/AddRole';
import { AddUser } from './containers/user-management/Users/AddUser';
import { Menus } from './containers/menus/Menus';
import { AddMenu } from './containers/menus/AddMenu';
import { Groups } from './containers/groups/Groups';
import { AddGroup } from './containers/groups/AddGroup';
import { Leads } from './containers/leads/Leads';
import { LeadDetails } from './containers/leads/LeadDetails';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PrivateRoute } from './components';
import AuthContextProvider from './contexts/AuthContext';
import { Header } from './containers/core/Header';
import { PageList, PageEdit, PageCategoryList, AddPageCategory } from './containers/Pages';

const App = () => {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Header />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/add-email-template" component={AddTemplate} />
          <PrivateRoute exact path="/templates" component={Templates} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <PrivateRoute exact path="/roles" component={Roles} />
          <PrivateRoute exact path="/roles-add" component={AddRole} />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/add-user" component={AddUser} />
          <PrivateRoute exact path="/page-add" component={PageEdit} />
          <PrivateRoute exact path="/pages/:id/edit" component={PageEdit} />
          <PrivateRoute exact path="/pages" component={PageList} />
          <PrivateRoute exact path="/pages" component={PageCategoryList} />
          <PrivateRoute exact path="/add-page-category" component={AddPageCategory} />
          <PrivateRoute exact path="/menus" component={Menus} />
          <PrivateRoute exact path="/add-menu" component={AddMenu} />
          <PrivateRoute exact path="/groups" component={Groups} />
          <PrivateRoute exact path="/add-group" component={AddGroup} />
          <PrivateRoute exact path="/edit-group" component={AddGroup} />
          <PrivateRoute exact path="/leads" component={Leads} />
          <PrivateRoute exact path="/leads/:id" component={LeadDetails} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </AuthContextProvider>
      </Router >
    </>
  );
}

export default App;