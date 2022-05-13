import { manageResource } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

const resource = (type, ...params) => manageResource('customers', {
    start: () => ({ type: actionTypes.CUSTOMERS_START }),
    success: data => ({ type: actionTypes.CUSTOMERS_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.CUSTOMERS_FAIL, error })
}, type, ...params);

export const resetCustomers = () => ({ type: actionTypes.CUSTOMERS_RESET });
export const getCustomers = (page, show, search) => resource('index', page, show, search);
export const getCustomersInfo = () => resource('info');
export const getCustomer = id => resource('show', id);
export const postCustomers = data => resource('post', data);
export const patchCustomers = (id, data) => resource('patch', id, data);
export const deleteCustomers = id => resource('delete', id);