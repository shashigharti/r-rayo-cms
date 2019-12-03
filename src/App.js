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
    PageContextProvider,
} from './packages/Pages';

import {
    AddTemplate,
    EditTemplate,
    TemplateContextProvider,
    AddRole,
    Settings,
    RegisterPage,
    LoginPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    Dashboard,
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

import { PrivateRoute } from './packages/Core/Components/PrivateRoute';

const App = () => {
    useEffect(() => {
        M.AutoInit();
    }, []);
    return (
        <>
            <Router basename={process.env.SUB_URL}>
                <AuthContextProvider>
                    <Header />
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute exact path="/add-email-template" component={AddTemplate} />

                    <PrivateRoute exact path="/settings" component={Settings} />

                    <TemplateContextProvider>
                        <PrivateRoute exact path="/templates" component={TemplateList} />
                        <PrivateRoute exact path="/templates/create" component={AddTemplate} />
                        <PrivateRoute exact path="/templates/edit/:id" component={EditTemplate} />
                    </TemplateContextProvider>

                    <RoleContextProvider>
                        <PrivateRoute exact path="/roles" component={RoleList} />
                        <PrivateRoute exact path="/roles/create" component={AddRole} />
                        <PrivateRoute exact path="/roles/edit/:id" component={AddRole} />
                    </RoleContextProvider>

                    <UserContextProvider>
                        <PrivateRoute exact path="/users" component={UserList} />
                        <PrivateRoute exact path="/users/create" component={AddUser} />
                        <PrivateRoute exact path="/users/edit/:id/" component={EditUser} />
                    </UserContextProvider>

                    <PageContextProvider>
                        <PrivateRoute exact path="/pages" component={PageList} />
                        <PrivateRoute exact path="/pages/create" component={AddPage} />
                        <PrivateRoute exact path="/pages/edit/:id" component={EditPage} />
                    </PageContextProvider>

                    <CategoryContextProvider>
                        <PrivateRoute exact path="/pages/categories" component={PageCategoryList} />
                        <PrivateRoute exact path="/pages/categories/create" component={AddPageCategory} />
                    </CategoryContextProvider>

                    <BannerContextProvider>
                        <PrivateRoute exact path="/banners" component={BannerList} />
                        <PrivateRoute exact path="/banners/create" component={AddBanner} />
                        <PrivateRoute exact path="/banners/edit/:id" component={EditBanner} />
                    </BannerContextProvider>

                    <AgentContextProvider>
                        <PrivateRoute exact path="/agents" component={AgentList} />
                        <PrivateRoute exact path="/agents/create" component={AddAgent} />
                        <PrivateRoute exact path="/agents/edit/:id" component={EditAgent} />
                    </AgentContextProvider>

                    <LeadContextProvider>
                        <PrivateRoute exact path="/leads" component={LeadList} />
                        <PrivateRoute exact path="/leads/create" component={AddLead} />
                        <PrivateRoute exact path="/leads/edit/:id" component={EditLead} />
                    </LeadContextProvider>

                    <CityContextProvider>
                        <PrivateRoute exact path="/cities" component={CityList} />
                        <PrivateRoute exact path="/cities/create" component={AddCity} />
                        <PrivateRoute exact path="/cities/edit/:id" component={EditCity} />
                    </CityContextProvider>

                    <ZipContextProvider>
                        <PrivateRoute exact path="/zips" component={ZipList} />
                        <PrivateRoute exact path="/zips/create" component={AddZip} />
                        <PrivateRoute exact path="/zips/edit/:id" component={EditZip} />
                    </ZipContextProvider>

                    <CountyContextProvider>
                        <PrivateRoute exact path="/counties" component={CountyList} />
                        <PrivateRoute exact path="/counties/create" component={AddCounty} />
                        <PrivateRoute exact path="/counties/edit/:id" component={EditCounty} />
                    </CountyContextProvider>

                    <GroupContextProvider>
                        <PrivateRoute exact path="/groups" component={GroupList} />
                        <PrivateRoute exact path="/groups/create" component={AddGroup} />
                        <PrivateRoute exact path="/groups/edit/:id" component={EditGroup} />
                    </GroupContextProvider>

                    <MenuContextProvider>
                        <PrivateRoute exact path="/menus" component={MenuList} />
                        <PrivateRoute exact path="/menus/create" component={AddMenu} />
                        <PrivateRoute exact path="/menus/edit/:id" component={EditMenu} />
                    </MenuContextProvider>

                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/password/recover" component={ForgotPasswordPage} />
                    <Route path="/password/reset" component={ResetPasswordPage} />
                </AuthContextProvider>
            </Router>
        </>
    );
};

export default App;