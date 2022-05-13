import axios from 'axios';

import { manageResource } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

const start = () => ({ type: actionTypes.PROJECTS_START });
const success = data => ({ type: actionTypes.PROJECTS_SUCCESS, ...data });
const fail = error => ({ type: actionTypes.PROJECTS_FAIL, error });
const setProgress = progress => ({ type: actionTypes.PROJECTS_PROGRESS, progress });

const resource = (type, ...params) => manageResource('projects', { start, success, fail }, type, ...params);

export const resetProjects = () => ({ type: actionTypes.PROJECTS_RESET });
export const getProjects = (page, show, search) => resource('index', page, show, search);
export const getProjectsInfo = () => resource('info');
export const getProject = id => resource('show', id);
export const getProjectForm = (projectNumber, formNumber) => async (dispatch, getState) => {
    dispatch(start());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const url = `/api/${role}/projects/${projectNumber}/forms/${formNumber}`;
        const res = await fetch(url, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(success(resData));
    } catch (error) {
        console.log(error);
        dispatch(fail(error));
    }
};
export const postProjectForm = (projectNumber, formNumber, data) => async (dispatch, getState) => {
    dispatch(start());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await axios.post(`/api/${role}/projects/${projectNumber}/forms/${formNumber}`, form, {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = res.data;
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(success(resData));
    } catch (error) {
        console.log(error);
        dispatch(fail(error));
    }
}
export const postProjects = data => async (dispatch, getState) => {
    dispatch(start());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await axios.post(`/api/${role}/projects`, form, {
            method: 'POST',
            headers: {
                Authorization: token
            },
            onUploadProgress: payload => {
                const progress = Math.round(payload.loaded * 100 / payload.total);
                dispatch(setProgress(progress));
            }
        });
        const resData = res.data;
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(success(resData));
    } catch (error) {
        console.log(error);
        dispatch(fail(error));
    }
};
export const patchProjects = (id, data) => resource('patch', id, data);
export const deleteProjects = id => resource('delete', id);