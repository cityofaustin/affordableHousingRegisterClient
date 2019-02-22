import axios from 'axios'

export const register = newUser => {

    console.log("We will need to add environment variables");

    // Set endpoint to API_URL if NODE_ENV is production or staging
    const endpoint = process.env.NODE_ENV === "development" ?
                     "http://localhost:3001" : // Default local dev
                     process.env.REACT_APP_API_URL; // Set up at build time

    //
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
