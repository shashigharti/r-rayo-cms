import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import M from 'materialize-css';

import {
  PageList,
  AddPage,
  EditPage,
  PageCategoryList,
  AddPageCategory,
  CategoryContextProvider,
  EditPageCategory,
  PageContextProvider,
} from './packages/Pages';

import {
  AddTemplate,
  Templates,
  EditTemplate,
  TemplateContextProvider,
  AddRole,
  Settings,
  RegisterPage,
  LoginPage,
  Dashboard,
  Roles,
  Users,
  Header,
  AuthContextProvider,
  UserList,
  AddUser,
  EditUser,
  UserContextProvider,
  RoleList,
  RoleContextProvider,
  TemplateList,
} from './packages/Core';

import { BannerList, AddBanner, EditBanner, BannerContextProvider } from './packages/Banners';

import {
  AgentList,
  AddAgent,
  EditAgent,
  AgentContextProvider,
  LeadList,
  AddLead,
  EditLead,
  LeadContextProvider,
  CityList,
  AddCity,
  EditCity,
  CityContextProvider,
  ZipList,
  AddZip,
  EditZip,
  ZipContextProvider,
  CountyList,
  AddCounty,
  EditCounty,
  CountyContextProvider,
  GroupList,
  AddGroup,
  EditGroup,
  GroupContextProvider,
  MenuList,
  AddMenu,
  EditMenu,
  MenuContextProvider,
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
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exact path='/add-email-template' component={AddTemplate} />

          <PrivateRoute exact path='/settings' component={Settings} />

          <TemplateContextProvider>
            <PrivateRoute exact path='/templates' component={TemplateList} />
            <PrivateRoute exact path='/templates/create' component={AddTemplate} />
            <PrivateRoute exact path='/templates/edit/:id' component={EditTemplate} />
          </TemplateContextProvider>

          <RoleContextProvider>
            <PrivateRoute exact path='/roles' component={RoleList} />
            <PrivateRoute exact path='/roles/create' component={AddRole} />
            <PrivateRoute exact path='/roles/edit/:id' component={AddRole} />
          </RoleContextProvider>

          <UserContextProvider>
            <PrivateRoute exact path='/users' component={UserList} />
            <PrivateRoute exact path='/users/create' component={AddUser} />
            <PrivateRoute exact path='/users/edit/:id/' component={EditUser} />
          </UserContextProvider>

          <PageContextProvider>
            <PrivateRoute exact path='/pages' component={PageList} />
            <PrivateRoute exact path='/pages/create' component={AddPage} />
            <PrivateRoute exact path='/pages/edit/:id' component={EditPage} />
          </PageContextProvider>

          <CategoryContextProvider>
            <PrivateRoute exact path='/pages/categories' component={PageCategoryList} />
            <PrivateRoute exact path='/pages/categories/create' component={AddPageCategory} />
          </CategoryContextProvider>

          <BannerContextProvider>
            <PrivateRoute exact path='/banners' component={BannerList} />
            <PrivateRoute exact path='/banners/create' component={AddBanner} />
            <PrivateRoute exact path='/banners/edit/:id' component={EditBanner} />
          </BannerContextProvider>

          <AgentContextProvider>
            <PrivateRoute exact path='/agents' component={AgentList} />
            <PrivateRoute exact path='/agents/create' component={AddAgent} />
            <PrivateRoute exact path='/agents/edit/:id' component={EditAgent} />
          </AgentContextProvider>

          <LeadContextProvider>
            <PrivateRoute exact path='/leads' component={LeadList} />
            <PrivateRoute exact path='/leads/create' component={AddLead} />
            <PrivateRoute exact path='/leads/edit/:id' component={EditLead} />
          </LeadContextProvider>

          <CityContextProvider>
            <PrivateRoute exact path='/cities' component={CityList} />
            <PrivateRoute exact path='/cities/create' component={AddCity} />
            <PrivateRoute exact path='/cities/edit/:id' component={EditCity} />
          </CityContextProvider>

          <ZipContextProvider>
            <PrivateRoute exact path='/zips' component={ZipList} />
            <PrivateRoute exact path='/zips/create' component={AddZip} />
            <PrivateRoute exact path='/zips/edit/:id' component={EditZip} />
          </ZipContextProvider>

          <CountyContextProvider>
            <PrivateRoute exact path='/counties' component={CountyList} />
            <PrivateRoute exact path='/counties/create' component={AddCounty} />
            <PrivateRoute exact path='/counties/edit/:id' component={EditCounty} />
          </CountyContextProvider>

          <GroupContextProvider>
            <PrivateRoute exact path='/groups' component={GroupList} />
            <PrivateRoute exact path='/groups/create' component={AddGroup} />
            <PrivateRoute exact path='/groups/edit/:id' component={EditGroup} />
          </GroupContextProvider>

          <MenuContextProvider>
            <PrivateRoute exact path='/menus' component={MenuList} />
            <PrivateRoute exact path='/menus/create' component={AddMenu} />
            <PrivateRoute exact path='/menus/edit/:id' component={EditMenu} />
          </MenuContextProvider>

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
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </AuthContextProvider>
      </Router>
    </>
  );
};

export default App;
