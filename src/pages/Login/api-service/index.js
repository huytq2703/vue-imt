import axios from '@axios';
import { preLoginEndpoint } from './defaultConfig';

export default {
  preLogin(args) {
    console.log(args.grantType);
    var bodyFormData = new FormData();
    bodyFormData.append('grant_type', args.grantType);
    bodyFormData.append('username', args.userName);
    bodyFormData.append('password', args.password);
    // return axios({
    //   method: "post",
    //   url: preLoginEndpoint,
    //   data: bodyFormData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    // const username = 'username';
    // const password = 'password';

    const username = 'browser';
    const password = '123456a@A';
    const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
    const authorization = `Basic ${encodedBase64Token}`;

    
    // var basicAuth = 'Basic ' + btoa(username + ':' + password);
    // const token = `${username}:${password}`;
    // const encodedToken = Buffer.from(token).toString('base64');
    // console.log(encodedToken);
    return axios({
      url: preLoginEndpoint,
      method: 'post',
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': authorization,
      },
      data: bodyFormData // Request Body if you have     
  });
    // return axios.post(preLoginEndpoint,bodyFormData,{
    //   auth: {
    //     username: username,
    //     password: password // Bad password
    //   }
    // });



    // var body = new FormData();
    // body.append('grant_type', 'password');
    // body.append('username', 'dev01@gmail.com');
    // body.append('password', '12345');
    // return axios({
    //   method: 'post',
    //   url: preLoginEndpoint,
    //   auth: {
    //     username: username,
    //     password: password
    //   },
    //   data: bodyFormData,
    //   config: { headers: {'Content-Type': 'multipart/form-data' }}
    //   });
      // .then(function (response) {
      //     //handle success
      //     console.log(response);
      // })
      // .catch(function (response) {
      //     //handle error
      //     console.log(response);
      // });
  }
};