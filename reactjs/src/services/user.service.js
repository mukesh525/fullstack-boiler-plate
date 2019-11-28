import {apiUrl} from '../config';
import { authHeader,handleResponse } from '../helpers';

export const userService = {
    getEthnicity,
   
};


function getEthnicity() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
      
    };
    return fetch(`${apiUrl}/v1/api/ethnicity`, requestOptions).then(handleResponse);
}


