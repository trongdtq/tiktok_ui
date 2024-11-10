import axios from 'axios';

console.log(process.env);

const httpRequest = axios.create({
  baseURL: 'process.env.REACT_APP_BASE_URL',
});

export const get = async (api, options = {}) => {
  const response = await httpRequest.get(api, options);
  return response.data;
};

export default httpRequest;
