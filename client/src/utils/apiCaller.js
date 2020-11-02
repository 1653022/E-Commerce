import axios from 'axios';
import * as Config from '../constants/config';

const token = localStorage.getItem('user_token');

let config = {
    headers: { Authorization: `Bearer ${token}` }
};
// const setToken = (token) => {
//     config= {
//         headers: { Authorization: `Bearer ${token}` }
//     }
// } 

// export default function callApi(endpoint, method = 'GET', body) {
//     return axios({
//         method: method,
//         url: `${Config.API_URL}/${endpoint}`,
//         data: body
//     },
//     config).catch(err => {
//         console.log(err);
//     })
// }

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    },
    config).catch(err => {
        console.log(err);
    })
}
