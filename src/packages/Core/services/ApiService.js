import axios from "axios";


class ApiService {
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