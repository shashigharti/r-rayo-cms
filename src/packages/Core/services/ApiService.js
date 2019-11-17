import axios from 'axios';
import { generatePath } from 'react-router';

/** @class ApiService is a parent class responsible for all the rest api calls. */
class ApiService {
  getAll(path) {
    return axios.get(process.env.API_ENDPOINT + '/' + path);
  }

  /**
   * Makes a GET api call.
   *
   * @param {string} id id of the record.
   * @param {string} path Path to the endpoint .
   * @return {Promise} Promise for the API call.
   */
  getById(id, path) {
    path = generatePath(path, { id });
    return axios.get(process.env.API_ENDPOINT + '/' + path);
  }

  store(path, data) {
    return axios.post(path, data);
  }

  delete(path) {
    return axios.delete(path);
  }

  update(path, data) {
    return axios.put(path, data);
  }
}

export const apiService = new ApiService();
