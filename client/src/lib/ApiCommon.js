import axios from 'axios';

const get = (path, data) => {
  const requestData = data || '';
  return axios.get(path + requestData);
};

const post = (path, data) => {
  const requestData = data || '';
  return axios.post(path, requestData);
};

const patch = (path, id = '', data) => {
  return axios.patch(path + id, data);
};

const remove = (path, id = '') => {
  return axios.delete(path + id);
};

export default { get, post, patch, remove };
