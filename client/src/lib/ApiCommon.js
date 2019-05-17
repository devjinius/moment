import axios from 'axios';

// const axiosConfig = () => ({
//   headers: {
//     'x-access-token': localStorage.getItem('accessToken')
//   }
// });

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

const del = (path, id = '') => {
  return axios.delete(path + id);
};

export default { get, post, patch, del };
