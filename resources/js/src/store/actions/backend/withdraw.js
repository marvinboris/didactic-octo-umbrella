import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetWithdraw = () => ({ type: actionTypes.WITHDRAW_RESET });
const withdrawStart = () => ({ type: actionTypes.WITHDRAW_START });
const withdrawSuccess = data => ({ type: actionTypes.WITHDRAW_SUCCESS, ...data });
const withdrawFail = error => ({ type: actionTypes.WITHDRAW_FAIL, error });
export const getWithdraw = () => async (dispatch, getState) => {
    dispatch(withdrawStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/withdraw`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(withdrawSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(withdrawFail(error));
    }
};

export const postWithdraw = data => async (dispatch, getState) => {
    dispatch(withdrawStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/withdraw`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(withdrawSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(withdrawFail(error));
    }
};