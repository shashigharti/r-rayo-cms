// import React from 'react';
import axios from 'axios';
import M from 'materialize-css';

class CrudTrait {
  static postApi(url, data) {
    console.log(url);
    return axios.post(url, data).then(response => {
      M.toast({ html: 'Successfully Added' });
    });
  }

  static putApi(url, data) {
    return axios.put(url, data).then(response => {
      M.toast({ html: 'Successfully Edited' });
    });
  }
  static getApi(url, name, self) {
    return axios.get(url).then(response => {
      self.setState({
        [name]: response.data.data,
        status: true,
      });
    });
  }

  static deleteApi(url, callback) {
    console.log(url);
    return axios.delete(url).then(response => {
      M.toast({ html: 'Successfully Deleted' });
    });
  }
  static getAllApi(url, name, self) {
    return axios.get(url).then(response => {
      self.setState({
        loading: false,
        [name]: response.data.data,
        pagination: {
          links: response.data.links,
          meta: response.data.meta,
        },
      });
    });
  }
  static handleChange(event, data_name, self) {
    const { name, value } = event.target;
    const data = self.state[data_name];
    console.log(data);
    self.setState({
      [data_name]: {
        ...data,
        [name]: value,
      },
    });
  }
}

export default CrudTrait;
