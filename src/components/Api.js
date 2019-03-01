import axios from 'axios';
require('dotenv').config()

export default axios.create({
  //baseURL: `http://localhost:3001`
  //baseURL: `process.env.REACT_APP_API_URL || http://localhost:3001`
  //baseURL: `process.env.REACT_APP_API_URL`
  baseURL: `http://ec2-52-33-129-5.us-west-2.compute.amazonaws.com`
});
