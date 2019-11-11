import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import M from 'materialize-css';

import {
  PageList,
  AddPage,
  EditPage,
  PageCategoryList,
  AddPageCategory,
  EditPageCategory,
  PageContextProvider,
  PageCategoryContextProvider,
} from './packages/Pages';

import {
  AddTemplate,
  Templates,
  TemplateContextProvider,
  AddRole,
  Settings,
  AddUser,
  RegisterPage,
  LoginPage,
  Dashboard,
  Roles,
  Users,
  Header,
  AuthContextProvider,
  UserList,
  UserContextProvider,
  RoleList,
  RoleContextProvider,
  TemplateList,
} from './packages/Core';

import { BannerList, BannerContextProvider, AddBanner } from './packages/Banners';

import {
  AgentList,
  AgentContextProvider,
  LeadList,
  LeadContextProvider,
  CityList,
  CityContextProvider,
  ZipList,
  ZipContextProvider,
  CountyList,
  CountyContextProvider,
} from './packages/RealEstate';

// import { Groups } from '/packages/groups/Groups';
// import { AddGroup } from '/packages/groups/AddGroup';
// import { Leads } from '/packages/leads/Leads';
// import { LeadDetails } from '/packages/leads/LeadDetails';
// import { CityList } from '/packages/landmarks/CityList';
// import { CityEdit } from '/packages/landmarks/CityEdit';
// import { ZipList } from '/packages/landmarks/ZipList';
// import { ZipEdit } from '/packages/landmarks/ZipEdit';
// import { CountyList } from '/packages/landmarks/CountyList';
// import { CountyEdit } from '/packages/landmarks/CountyEdit';
import { PrivateRoute } from './packages/Core/Components/PrivateRoute';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Header />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/add-email-template" component={AddTemplate} />

          <PrivateRoute exact path="/settings" component={Settings} />

          <TemplateContextProvider>
            <PrivateRoute exact path="/templates" component={TemplateList} />
          </TemplateContextProvider>

          <RoleContextProvider>
            <PrivateRoute exact path="/roles" component={RoleList} />
            <PrivateRoute exact path="/roles/create" component={AddRole} />
            <PrivateRoute exact path="/roles/edit/:id" component={AddRole} />
          </RoleContextProvider>

          <UserContextProvider>
            <PrivateRoute exact path="/users" component={UserList} />
            <PrivateRoute exact path="/add-user" component={AddUser} />
            <PrivateRoute exact path="/user-edit/:id/" component={AddUser} />
          </UserContextProvider>

          <PageContextProvider>
            <PrivateRoute exact path="/pages" component={PageList} />
            <PrivateRoute exact path="/pages/create" component={AddPage} />
            <PrivateRoute exact path="/pages/edit/:id" component={EditPage} />
          </PageContextProvider>

          <PageCategoryContextProvider>
            <PrivateRoute exact path="/pages/categories" component={PageCategoryList} />
            <PrivateRoute exact path="/pages/categories/create" component={AddPageCategory} />
            <PrivateRoute exact path="/pages/categories/:id/edit" component={EditPageCategory} />
          </PageCategoryContextProvider>

          <BannerContextProvider>
            <PrivateRoute exact path="/banners" component={BannerList} />
            <PrivateRoute exact path="/banners/create" component={AddBanner} />
          </BannerContextProvider>

          <AgentContextProvider>
            <PrivateRoute exact path="/agents" component={AgentList} />
          </AgentContextProvider>

          <LeadContextProvider>
            <PrivateRoute exact path="/leads" component={LeadList} />
          </LeadContextProvider>

          <CityContextProvider>
            <PrivateRoute exact path="/cities" component={CityList} />
          </CityContextProvider>

          <ZipContextProvider>
            <PrivateRoute exact path="/zips" component={ZipList} />
          </ZipContextProvider>

          <CountyContextProvider>
            <PrivateRoute exact path="/counties" component={CountyList} />
          </CountyContextProvider>

          {/* <PrivateRoute exact path="/menus" component={Menus} />
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
          <PrivateRoute exact path="/leads/:id" component={LeadDetails} /> */}
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </AuthContextProvider>
      </Router>
    </>
  );
};

export default App;
