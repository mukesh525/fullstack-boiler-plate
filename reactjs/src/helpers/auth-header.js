export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));


    
   // console.log('token ' +user.token)
    if (user && user.token) {
        //return { 'X-Auth-Token': user.token };
        return {
             'X-Auth-Token': user.token,
             'Content-Type': 'application/json',
           
           
          };
    } else {
        return {};
    }
}