import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {};

const resources = [
    'admins', 'cms', 'notifications', 'dashboard', 'features', 'languages', 'roles', 'users',
    'customers', 'settings', 'projects', 'files', 'my_report', 'work_report', 'withdraw'
];

resources.forEach(resource => {
    initialState[resource] = {
        loading: false,
        error: null
    }
});

const reset = (root, state) => updateObject(state, { [root]: initialState[root] });
const start = (root, state) => updateObject(state, { [root]: updateObject(state[root], { loading: true, message: null }) });
const success = (root, state, action) => updateObject(state, { [root]: updateObject(state[root], { loading: false, error: null, ...action }) });
const fail = (root, state, action) => updateObject(state, { [root]: updateObject(state[root], { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMINS_RESET: return reset('admins', state);
        case actionTypes.ADMINS_START: return start('admins', state);
        case actionTypes.ADMINS_SUCCESS: return success('admins', state, action);
        case actionTypes.ADMINS_FAIL: return fail('admins', state, action);

        case actionTypes.CMS_RESET: return reset('cms', state);
        case actionTypes.CMS_START: return start('cms', state);
        case actionTypes.CMS_SUCCESS: return success('cms', state, action);
        case actionTypes.CMS_FAIL: return fail('cms', state, action);

        case actionTypes.NOTIFICATIONS_RESET: return reset('notifications', state);
        case actionTypes.NOTIFICATIONS_START: return start('notifications', state);
        case actionTypes.NOTIFICATIONS_SUCCESS: return success('notifications', state, action);
        case actionTypes.NOTIFICATIONS_FAIL: return fail('notifications', state, action);

        case actionTypes.DASHBOARD_RESET: return reset('dashboard', state);
        case actionTypes.DASHBOARD_START: return start('dashboard', state);
        case actionTypes.DASHBOARD_SUCCESS: return success('dashboard', state, action);
        case actionTypes.DASHBOARD_FAIL: return fail('dashboard', state, action);

        case actionTypes.FEATURES_RESET: return reset('features', state);
        case actionTypes.FEATURES_START: return start('features', state);
        case actionTypes.FEATURES_SUCCESS: return success('features', state, action);
        case actionTypes.FEATURES_FAIL: return fail('features', state, action);

        case actionTypes.LANGUAGES_RESET: return reset('languages', state);
        case actionTypes.LANGUAGES_START: return start('languages', state);
        case actionTypes.LANGUAGES_SUCCESS: return success('languages', state, action);
        case actionTypes.LANGUAGES_FAIL: return fail('languages', state, action);

        case actionTypes.ROLES_RESET: return reset('roles', state);
        case actionTypes.ROLES_START: return start('roles', state);
        case actionTypes.ROLES_SUCCESS: return success('roles', state, action);
        case actionTypes.ROLES_FAIL: return fail('roles', state, action);

        case actionTypes.USERS_RESET: return reset('users', state);
        case actionTypes.USERS_START: return start('users', state);
        case actionTypes.USERS_SUCCESS: return success('users', state, action);
        case actionTypes.USERS_FAIL: return fail('users', state, action);



        case actionTypes.CUSTOMERS_RESET: return reset('customers', state);
        case actionTypes.CUSTOMERS_START: return start('customers', state);
        case actionTypes.CUSTOMERS_SUCCESS: return success('customers', state, action);
        case actionTypes.CUSTOMERS_FAIL: return fail('customers', state, action);

        case actionTypes.SETTINGS_RESET: return reset('settings', state);
        case actionTypes.SETTINGS_START: return start('settings', state);
        case actionTypes.SETTINGS_SUCCESS: return success('settings', state, action);
        case actionTypes.SETTINGS_FAIL: return fail('settings', state, action);



        case actionTypes.PROJECTS_RESET: return reset('projects', state);
        case actionTypes.PROJECTS_START: return start('projects', state);
        case actionTypes.PROJECTS_SUCCESS: return success('projects', state, action);
        case actionTypes.PROJECTS_FAIL: return fail('projects', state, action);
        case actionTypes.PROJECTS_PROGRESS: return updateObject(state, { projects: updateObject(state.projects, { loading: true, error: null, ...action }) });

        case actionTypes.FILES_RESET: return reset('files', state);
        case actionTypes.FILES_START: return start('files', state);
        case actionTypes.FILES_SUCCESS: return success('files', state, action);
        case actionTypes.FILES_FAIL: return fail('files', state, action);

        case actionTypes.MY_REPORT_RESET: return reset('my_report', state);
        case actionTypes.MY_REPORT_START: return start('my_report', state);
        case actionTypes.MY_REPORT_SUCCESS: return success('my_report', state, action);
        case actionTypes.MY_REPORT_FAIL: return fail('my_report', state, action);

        case actionTypes.WORK_REPORT_RESET: return reset('work_report', state);
        case actionTypes.WORK_REPORT_START: return start('work_report', state);
        case actionTypes.WORK_REPORT_SUCCESS: return success('work_report', state, action);
        case actionTypes.WORK_REPORT_FAIL: return fail('work_report', state, action);

        case actionTypes.WITHDRAW_RESET: return reset('withdraw', state);
        case actionTypes.WITHDRAW_START: return start('withdraw', state);
        case actionTypes.WITHDRAW_SUCCESS: return success('withdraw', state, action);
        case actionTypes.WITHDRAW_FAIL: return fail('withdraw', state, action);



        default: return state;
    }
};