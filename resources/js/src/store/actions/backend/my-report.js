import { manageResource } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

const start = () => ({ type: actionTypes.MY_REPORT_START });
const success = data => ({ type: actionTypes.MY_REPORT_SUCCESS, ...data });
const fail = error => ({ type: actionTypes.MY_REPORT_FAIL, error });

const resource = (type, ...params) => manageResource('my-report', { start, success, fail }, type, ...params);

export const resetMyReport = () => ({ type: actionTypes.MY_REPORT_RESET });
export const getMyReport = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');