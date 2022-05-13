import { manageResource } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

const start = () => ({ type: actionTypes.WORK_REPORT_START });
const success = data => ({ type: actionTypes.WORK_REPORT_SUCCESS, ...data });
const fail = error => ({ type: actionTypes.WORK_REPORT_FAIL, error });

const resource = (type, ...params) => manageResource('work-report', { start, success, fail }, type, ...params);

export const resetWorkReport = () => ({ type: actionTypes.WORK_REPORT_RESET });
export const getWorkReport = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');