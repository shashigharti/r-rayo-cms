import { pageConstant } from '../constants';
import { request } from 'https';


export Const PageActions = {
    getAll,
    add,
    edit,
    delete : _delete
}

function getAll() {
    return dispatch => {
        dispatch(request({}));
    }
}