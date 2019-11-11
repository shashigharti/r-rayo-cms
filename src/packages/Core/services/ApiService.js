import axios from 'axios';
import { generatePath } from 'react-router';

/** @class ApiService is a parent class responsible for all the rest api calls. */
class ApiService {
  /**
   * Makes a GET api call.
   *
   * @param {string} path Path to the endpoint .
   * @return {Promise} Promise for the API call.
   */
  get(path) {
    return axios.get(path);
  }

  store(path, data) {
    return axios.post(path, data);
  }

  delete(id, path) {
    path = generatePath(path, { id });
    return axios.delete(path);
  }

  update(id, path, data) {
    path = generatePath(path, { id });
    return axios.put(path, data);
  }
}

export const apiService = new ApiService();
