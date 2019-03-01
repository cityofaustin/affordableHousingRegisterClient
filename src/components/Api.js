import axios from 'axios';
require('dotenv').config()

export default axios.create({
  //baseURL: `http://localhost:3001`
  //baseURL: `process.env.REACT_APP_API_URL || http://localhost:3001`
  baseURL: `process.env.REACT_APP_API_URL`
});
