import axios from 'axios';
import * as Config from '../constants/config';

export default function callApiHeader (endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: {'Content-Type': 'multipart/form-data' }
    }).catch(err => {
        console.log(err);
    })
}