import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from '/packages/home/Dashboard';
import { LoginPage } from '/packages/login/LoginPage';
import { RegisterPage } from '/packages/register/RegisterPage';
import { AddTemplate } from '/packages/email-management/AddTemplate';
import { Templates } from '/packages/email-management/Templates';
import { Settings } from '/packages/settings/Settings';
import { Roles } from '/packages/user-management/Roles/Roles';
import { Users } from '/packages/user-management/Users/Users';
import { AddRole } from '/packages/user-management/Roles/AddRole';
import { AddUser } from '/packages/user-management/Users/AddUser';
import { Menus } from '/packages/menus/Menus';
import { AddMenu } from '/packages/menus/AddMenu';
import { Groups } from '/packages/groups/Groups';
import { AddGroup } from '/packages/groups/AddGroup';
import { Leads } from '/packages/leads/Leads';
import { LeadDetails } from '/packages/leads/LeadDetails';
import { CityList } from '/packages/landmarks/CityList';
import { CityEdit } from '/packages/landmarks/CityEdit';
import { ZipList } from '/packages/landmarks/ZipList';
import { ZipEdit } from '/packages/landmarks/ZipEdit';
import { CountyList } from '/packages/landmarks/CountyList';
import { PrivateRoute } from './components';
import { CountyEdit } from '/packages/landmarks/CountyEdit';
import { Header } from '/packages/core/Header';
import { PageList, PageEdit, PageCategoryList, AddPageCategory } from '/packages/Pages';
import AuthContextProvider from './contexts/AuthContext';

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
          <PrivateRoute exact path="/roles-edit/:id" component={AddRole} />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/add-user" component={AddUser} />
          <PrivateRoute exact path="/user-edit/:id/" component={AddUser} />
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
          <PrivateRoute exact path="/cities" component={CityList} />
          <PrivateRoute exact path="/city-edit/:id" component={CityEdit} />
          <PrivateRoute exact path="/city-add" component={CityEdit} />
          <PrivateRoute exact path="/zips" component={ZipList} />
          <PrivateRoute exact path="/zip-edit/:id" component={ZipEdit} />
          <PrivateRoute exact path="/zip-add" component={ZipEdit} />
          <PrivateRoute exact path="/counties" component={CountyList} />
          <PrivateRoute exact path="/county-edit/:id" component={CountyEdit} />
          <PrivateRoute exact path="/county-add" component={CountyEdit} />
          <PrivateRoute exact path="/leads" component={Leads} />
          <PrivateRoute exact path="/leads/:id" component={LeadDetails} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </AuthContextProvider>
      </Router>
    </>
  );
};

export default App;
