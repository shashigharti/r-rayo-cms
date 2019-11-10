import axios from "axios";

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

    post(path, data) {
        return axios.post(path, data);
    }

    delete(path) {
        return axios.delete(path, data);
    }

    put(path, data) {
        return axios.put(path, data);
    }
}

export const apiService = new ApiService();