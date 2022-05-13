import { manageResource } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

const start = () => ({ type: actionTypes.FILES_START });
const success = data => ({ type: actionTypes.FILES_SUCCESS, ...data });
const fail = error => ({ type: actionTypes.FILES_FAIL, error });

const resource = (type, ...params) => manageResource('files', { start, success, fail }, type, ...params);

export const resetFiles = () => ({ type: actionTypes.FILES_RESET });
export const getFiles = (page, show, search) => resource('index', page, show, search);
export const getFilesInfo = () => resource('info');
export const getFile = id => resource('show', id);
export const postFiles = data => resource('post', data);
export const patchFiles = (id, data) => resource('patch', id, data);
export const deleteFiles = id => resource('delete', id);