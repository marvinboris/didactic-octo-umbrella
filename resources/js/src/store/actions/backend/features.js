import { manageResource } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

const resource = (type, ...params) => manageResource('features', {
    start: () => ({ type: actionTypes.FEATURES_START }),
    success: data => ({ type: actionTypes.FEATURES_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.FEATURES_FAIL, error })
}, type, ...params);

export const resetFeatures = () => ({ type: actionTypes.FEATURES_RESET });
export const getFeatures = (page, show, search) => resource('index', page, show, search);
export const getFeaturesInfo = () => resource('info');
export const getFeature = id => resource('show', id);
export const postFeatures = data => resource('post', data);
export const patchFeatures = (id, data) => resource('patch', id, data);
export const deleteFeatures = id => resource('delete', id);
