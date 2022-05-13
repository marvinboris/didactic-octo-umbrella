import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import asyncComponent from './hoc/asyncComponent/asyncComponent';

import AuthCustomerLayout from './containers/Auth/Customer/Layout';
import AuthUserLayout from './containers/Auth/User/Layout';
import AuthAdminLayout from './containers/Auth/Admin/Layout';
import FrontendLayout from './containers/Frontend/Layout';
import BackendLayout from './containers/Backend/Layout';
import BackendCustomerLayout from './containers/Backend/Customer/Layout';
import BackendUserLayout from './containers/Backend/User/Layout';

import Spinner from './components/UI/Spinner';

import { authCheckState } from './store/actions/auth';
import { getContent } from './store/actions/content';

import 'aos/dist/aos.css';

// Customer routes
const asyncCustomerDashboard = asyncComponent(() => import('./containers/Backend/Customer/Dashboard'));

const asyncCustomerProjectsForms = asyncComponent(() => import('./containers/Backend/Customer/Projects/Forms'));
const asyncCustomerProjects = asyncComponent(() => import('./containers/Backend/Customer/Projects'));

const asyncCustomerFiles = asyncComponent(() => import('./containers/Backend/Customer/Files'));

const asyncCustomerMyReport = asyncComponent(() => import('./containers/Backend/Customer/MyReport'));

const asyncCustomerWorkReport = asyncComponent(() => import('./containers/Backend/Customer/WorkReport'));

const asyncCustomerWithdraw = asyncComponent(() => import('./containers/Backend/Customer/Withdraw'));

const asyncCustomerSettings = asyncComponent(() => import('./containers/Backend/Customer/Settings'));



// User routes
const asyncUserCmsGlobal = asyncComponent(() => import('./containers/Backend/User/Cms/Global'));
const asyncUserCmsGeneral = asyncComponent(() => import('./containers/Backend/User/Cms/General'));
const asyncUserCmsMessages = asyncComponent(() => import('./containers/Backend/User/Cms/Messages'));
const asyncUserCmsComponents = asyncComponent(() => import('./containers/Backend/User/Cms/Components'));
const asyncUserCmsAuth = asyncComponent(() => import('./containers/Backend/User/Cms/Auth'));
const asyncUserCmsBackend = asyncComponent(() => import('./containers/Backend/User/Cms/Backend'));
const asyncUserCmsFrontend = asyncComponent(() => import('./containers/Backend/User/Cms/Frontend'));


const asyncUserDashboard = asyncComponent(() => import('./containers/Backend/User/Dashboard'));


const asyncUserFeatures = asyncComponent(() => import('./containers/Backend/User/Features'));
const asyncUserFeaturesAdd = asyncComponent(() => import('./containers/Backend/User/Features/Add'));
const asyncUserFeaturesEdit = asyncComponent(() => import('./containers/Backend/User/Features/Edit'));


const asyncUserLanguages = asyncComponent(() => import('./containers/Backend/User/Languages'));
const asyncUserLanguagesAdd = asyncComponent(() => import('./containers/Backend/User/Languages/Add'));
const asyncUserLanguagesEdit = asyncComponent(() => import('./containers/Backend/User/Languages/Edit'));


const asyncUserRoles = asyncComponent(() => import('./containers/Backend/User/Roles'));
const asyncUserRolesAdd = asyncComponent(() => import('./containers/Backend/User/Roles/Add'));
const asyncUserRolesEdit = asyncComponent(() => import('./containers/Backend/User/Roles/Edit'));


const asyncUserSettingsLanguage = asyncComponent(() => import('./containers/Backend/User/Settings/Language'));


const asyncUserUsers = asyncComponent(() => import('./containers/Backend/User/Users'));
const asyncUserUsersAdd = asyncComponent(() => import('./containers/Backend/User/Users/Add'));
const asyncUserUsersEdit = asyncComponent(() => import('./containers/Backend/User/Users/Edit'));


// const asyncUserCustomers = asyncComponent(() => import('./containers/Backend/User/Customers'));
// const asyncUserCustomersAdd = asyncComponent(() => import('./containers/Backend/User/Customers/Add'));
// const asyncUserCustomersEdit = asyncComponent(() => import('./containers/Backend/User/Customers/Edit'));


const asyncUserProjects = asyncComponent(() => import('./containers/Backend/User/Projects'));
const asyncUserProjectsAdd = asyncComponent(() => import('./containers/Backend/User/Projects/Add'));
const asyncUserProjectsEdit = asyncComponent(() => import('./containers/Backend/User/Projects/Edit'));


// Admin routes
const asyncAdminAdmins = asyncComponent(() => import('./containers/Backend/Admin/Admins'));
const asyncAdminAdminsAdd = asyncComponent(() => import('./containers/Backend/Admin/Admins/Add'));
const asyncAdminAdminsEdit = asyncComponent(() => import('./containers/Backend/Admin/Admins/Edit'));


const asyncAdminCmsGlobal = asyncComponent(() => import('./containers/Backend/Admin/Cms/Global'));
const asyncAdminCmsGeneral = asyncComponent(() => import('./containers/Backend/Admin/Cms/General'));
const asyncAdminCmsMessages = asyncComponent(() => import('./containers/Backend/Admin/Cms/Messages'));
const asyncAdminCmsComponents = asyncComponent(() => import('./containers/Backend/Admin/Cms/Components'));
const asyncAdminCmsAuth = asyncComponent(() => import('./containers/Backend/Admin/Cms/Auth'));
const asyncAdminCmsBackend = asyncComponent(() => import('./containers/Backend/Admin/Cms/Backend'));


const asyncAdminDashboard = asyncComponent(() => import('./containers/Backend/Admin/Dashboard'));


const asyncAdminFeatures = asyncComponent(() => import('./containers/Backend/Admin/Features'));
const asyncAdminFeaturesAdd = asyncComponent(() => import('./containers/Backend/Admin/Features/Add'));
const asyncAdminFeaturesEdit = asyncComponent(() => import('./containers/Backend/Admin/Features/Edit'));


const asyncAdminLanguages = asyncComponent(() => import('./containers/Backend/Admin/Languages'));
const asyncAdminLanguagesAdd = asyncComponent(() => import('./containers/Backend/Admin/Languages/Add'));
const asyncAdminLanguagesEdit = asyncComponent(() => import('./containers/Backend/Admin/Languages/Edit'));


const asyncAdminRoles = asyncComponent(() => import('./containers/Backend/Admin/Roles'));
const asyncAdminRolesAdd = asyncComponent(() => import('./containers/Backend/Admin/Roles/Add'));
const asyncAdminRolesEdit = asyncComponent(() => import('./containers/Backend/Admin/Roles/Edit'));


const asyncAdminSettingsLanguage = asyncComponent(() => import('./containers/Backend/Admin/Settings/Language'));


const asyncAdminUsers = asyncComponent(() => import('./containers/Backend/Admin/Users'));
const asyncAdminUsersAdd = asyncComponent(() => import('./containers/Backend/Admin/Users/Add'));
const asyncAdminUsersEdit = asyncComponent(() => import('./containers/Backend/Admin/Users/Edit'));


// Auth routes
const asyncAuthCustomerSignup = asyncComponent(() => import('./containers/Auth/Customer/Signup'));
const asyncAuthCustomerLogin = asyncComponent(() => import('./containers/Auth/Customer/Login'));


const asyncAuthUserLogin = asyncComponent(() => import('./containers/Auth/User/Login'));


const asyncAuthAdminLogin = asyncComponent(() => import('./containers/Auth/Admin/Login'));
const asyncAuthAdminVerify = asyncComponent(() => import('./containers/Auth/Admin/Verify'));


// Frontend routes
const asyncHome = asyncComponent(() => import('./containers/Frontend/Home'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup, onGetContent } = this.props;
        onTryAuthSignup();
        onGetContent();
        init();
    }

    render() {
        const { content: { cms, countries }, auth: { role } } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        let routes = (
            <Switch>
                <Route path="/auth/admin">
                    <AuthAdminLayout>
                        <Switch>
                            <Route path="/auth/admin/verify" component={asyncAuthAdminVerify} />
                            <Route path="/auth/admin/login" component={asyncAuthAdminLogin} />
                        </Switch>
                    </AuthAdminLayout>
                </Route>
                <Redirect path="/admin" to="/auth/admin/login" />

                <Route path="/auth/user">
                    <AuthUserLayout>
                        <Switch>
                            <Route path="/auth/user/login" component={asyncAuthUserLogin} />
                        </Switch>
                    </AuthUserLayout>
                </Route>
                <Redirect path="/user" to="/auth/user/login" />

                <Route path="/">
                    <AuthCustomerLayout>
                        <Switch>
                            <Route path="/register" component={asyncAuthCustomerSignup} />
                            <Route path="/login" component={asyncAuthCustomerLogin} />
                        </Switch>
                    </AuthCustomerLayout>

                    <Redirect path="/customer" to="/login" />
                    <Redirect path="/auth" to="/login" />
                    <Redirect path="/" to="/login" />
                </Route>

                {/* <Route path="/">
                    <FrontendLayout>
                        <Switch>
                            <Route path="/" component={asyncHome} />
                        </Switch>
                    </FrontendLayout>
                </Route> */}
            </Switch>
        );

        if (isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/user">
                        <BackendUserLayout>
                            <Switch>
                                <Route path="/user/cms/global" component={asyncUserCmsGlobal} />
                                <Route path="/user/cms/general" component={asyncUserCmsGeneral} />
                                <Route path="/user/cms/messages" component={asyncUserCmsMessages} />
                                <Route path="/user/cms/components" component={asyncUserCmsComponents} />
                                <Route path="/user/cms/auth" component={asyncUserCmsAuth} />
                                <Route path="/user/cms/backend" component={asyncUserCmsBackend} />
                                <Route path="/user/cms/frontend" component={asyncUserCmsFrontend} />

                                <Route path="/user/dashboard" component={asyncUserDashboard} />

                                <Route path="/user/features/:id/edit" component={asyncUserFeaturesEdit} />
                                <Route path="/user/features/add" component={asyncUserFeaturesAdd} />
                                <Route path="/user/features" component={asyncUserFeatures} />

                                <Route path="/user/languages/:id/edit" component={asyncUserLanguagesEdit} />
                                <Route path="/user/languages/add" component={asyncUserLanguagesAdd} />
                                <Route path="/user/languages" component={asyncUserLanguages} />

                                <Route path="/user/roles/:id/edit" component={asyncUserRolesEdit} />
                                <Route path="/user/roles/add" component={asyncUserRolesAdd} />
                                <Route path="/user/roles" component={asyncUserRoles} />

                                <Route path="/user/settings/language" component={asyncUserSettingsLanguage} />

                                <Route path="/user/users/:id/edit" component={asyncUserUsersEdit} />
                                <Route path="/user/users/add" component={asyncUserUsersAdd} />
                                <Route path="/user/users" component={asyncUserUsers} />

                                <Route path="/user/projects/:id/edit" component={asyncUserProjectsEdit} />
                                <Route path="/user/projects/add" component={asyncUserProjectsAdd} />
                                <Route path="/user/projects" component={asyncUserProjects} />

                                <Redirect path="/user" to={`/user/dashboard`} />
                            </Switch>
                        </BackendUserLayout>
                    </Route>



                    <Route path="/admin">
                        <BackendLayout>
                            <Switch>
                                <Route path="/admin/admins/:id/edit" component={asyncAdminAdminsEdit} />
                                <Route path="/admin/admins/add" component={asyncAdminAdminsAdd} />
                                <Route path="/admin/admins" component={asyncAdminAdmins} />

                                <Route path="/admin/cms/global" component={asyncAdminCmsGlobal} />
                                <Route path="/admin/cms/general" component={asyncAdminCmsGeneral} />
                                <Route path="/admin/cms/messages" component={asyncAdminCmsMessages} />
                                <Route path="/admin/cms/components" component={asyncAdminCmsComponents} />
                                <Route path="/admin/cms/auth" component={asyncAdminCmsAuth} />
                                <Route path="/admin/cms/backend" component={asyncAdminCmsBackend} />

                                <Route path="/admin/dashboard" component={asyncAdminDashboard} />

                                <Route path="/admin/features/:id/edit" component={asyncAdminFeaturesEdit} />
                                <Route path="/admin/features/add" component={asyncAdminFeaturesAdd} />
                                <Route path="/admin/features" component={asyncAdminFeatures} />

                                <Route path="/admin/languages/:id/edit" component={asyncAdminLanguagesEdit} />
                                <Route path="/admin/languages/add" component={asyncAdminLanguagesAdd} />
                                <Route path="/admin/languages" component={asyncAdminLanguages} />

                                <Route path="/admin/roles/:id/edit" component={asyncAdminRolesEdit} />
                                <Route path="/admin/roles/add" component={asyncAdminRolesAdd} />
                                <Route path="/admin/roles" component={asyncAdminRoles} />

                                <Route path="/admin/settings/language" component={asyncAdminSettingsLanguage} />

                                <Route path="/admin/users/:id/edit" component={asyncAdminUsersEdit} />
                                <Route path="/admin/users/add" component={asyncAdminUsersAdd} />
                                <Route path="/admin/users" component={asyncAdminUsers} />

                                <Redirect path="/admin" to={`/admin/dashboard`} />
                            </Switch>
                        </BackendLayout>
                    </Route>



                    <Route path="/customer">
                        <BackendCustomerLayout>
                            <Switch>
                                <Route path="/customer/my-report" component={asyncCustomerMyReport} />

                                <Route path="/customer/work-report" component={asyncCustomerWorkReport} />

                                <Route path="/customer/files" component={asyncCustomerFiles} />

                                <Route path="/customer/projects/:projectNumber/forms/:formNumber" component={asyncCustomerProjectsForms} />
                                <Route path="/customer/projects" component={asyncCustomerProjects} />

                                <Route path="/customer/withdraw" component={asyncCustomerWithdraw} />

                                <Route path="/customer/settings" component={asyncCustomerSettings} />

                                <Route path="/customer/dashboard" component={asyncCustomerDashboard} />
                                <Redirect path="/customer" to={`/customer/dashboard`} />
                            </Switch>
                        </BackendCustomerLayout>
                    </Route>



                    <Redirect path="/dashboard" to={`/${role}/dashboard`} />
                    <Redirect path="/login" to={`/${role}/dashboard`} />
                    <Redirect path="/start" to={`/${role}/dashboard`} />
                    <Redirect path="/auth" to={`/${role}/dashboard`} />

                    <Route path="/">
                        <FrontendLayout>
                            <Switch>
                                <Route path="/" component={asyncHome} />
                            </Switch>
                        </FrontendLayout>
                    </Route>
                </Switch>
            );
        }

        const dataReady = cms !== undefined && countries !== undefined && ((isAuthenticated && role !== undefined) || !isAuthenticated);

        return <div className='App'>{dataReady ? routes : <Spinner />}</div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(authCheckState()),
    onGetContent: () => dispatch(getContent()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
