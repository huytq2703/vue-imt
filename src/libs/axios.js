import { createApp } from 'vue';
import AppWrapper from '../AppWrapper.vue';

// axios
import axios from 'axios';

// const axiosIns = axios.create({
//   // You can add your headers here
//   // ================================
//   baseURL: process.env.VUE_APP_BASE_URL,
//   // timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.proxy = true;
const app = createApp(AppWrapper);


app.config.globalProperties.$http = axios;

export default axios;
