import axios from 'axios';

export default axios.create({
  baseURL: `https://main-api.fulhaus.com/fulhaus-tech-test/get-products`
});