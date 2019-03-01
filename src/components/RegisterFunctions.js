// import axios from 'axios'
import API from './Api'

export const register = newUser => {
    // If defined, use the API_URL endpoint
    // const endpoint = process.env.REACT_APP_API_URL || "http://localhost:3001";
    // return axios
        //.post(endpoint + '/users/register', {
    return API.post('/users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            org: newUser.org,
            email: newUser.email,
            passwd: newUser.passwd
        })
        .then(res => {
            console.log('Reistered')
        })
}

