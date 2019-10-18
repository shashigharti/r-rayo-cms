import config from 'config';
import { authHeader } from '../helpers';

export const pageService = {
  getAll,
  edit,
  add,
  delete: _delete,
};

function getAll(url) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(url, requestOptions).then(handleResponse);
}

function add() {
  const page = {
    name: '',
    excerpt: '',
    category_id: '',
    thumbnail: '',
    slug: '',
    content: '',
    meta_title: '',
    meta_keywords: '',
    meta_description: '',
  };
  return page;
}

function edit(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/api/page/edit/${id}`, requestOptions).then(handleResponse);
}
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/api/page/delete/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = data.data.message || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
