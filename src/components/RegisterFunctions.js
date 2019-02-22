import axios from 'axios'

export const register = newUser => {

    console.log("We will need to add environment variables");

    const endpoint = process.env.NODE_ENV !== 'production' ? 
                     process.env.REACT_APP_API_URL : // Set up at build time
                     "http://localhost:3001"; // Default local dev

    console.log("Current endpoint: " + endpoint);

    return axios
        .post(endpoint + '/users/register', {
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
