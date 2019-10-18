import { pageConstants } from '../constants';
import { pageService } from '../services';
import { alertActions } from '.';
import { request } from 'https';

export const pageAction = {
  getAll,
  edit,
  add,
  delete: _delete,
};

function getAll(url) {
  return dispatch => {
    dispatch(request());
    pageService
      .getAll(url)
      .then(pages => dispatch(success(pages)), error => dispatch(failure(error.toString())));
  };

  function request() {
    return { type: pageConstants.GETALL_REQUEST };
  }

  function success(pages) {
    return { type: pageConstants.GETALL_SUCCESS, pages };
  }

  function failure(error) {
    return { type: pageConstants.GETALL_FAILURE, error };
  }
}

function add() {
  return dispatch => {
    dispatch(request);
    pageService
      .add()
      .then(page => dispatch(success(page), error => dispatch(failure(error.toString()))));
  };
  function request(id) {
    return { type: pageConstants.ADD_REQUEST, id };
  }
  function success(page) {
    return { type: pageConstants.ADD_SUCCESS, page };
  }
  function failure(id) {
    return { type: pageConstants.ADD_FAILURE, id };
  }
}
function edit(id) {
  return dispatch => {
    dispatch(request(id));
    pageService
      .edit(id)
      .then(page => dispatch(success(page)), error => dispatch(failure(error.toString())));
  };

  function request(id) {
    return { type: pageConstants.EDIT_REQUEST, id };
  }
  function success(page) {
    return { type: pageConstants.EDIT_SUCCESS, page };
  }
  function failure(id) {
    return { type: pageConstants.EDIT_FAILURE, id };
  }
}

function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    pageService
      .delete(id)
      .then(page => dispatch(success(id)), error => dispatch(failure(id, error.toString())));
  };

  function request(id) {
    return { type: pageConstants.DELETE_REQUEST, id };
  }

  function success(id) {
    return { type: pageConstants.DELETE_SUCCESS, id };
  }

  function failure(id, error) {
    return { type: pageConstants.DELETE_FAILURE, id, error };
  }
}
