// import axios from '@axios';
import axios from '../../../libs/axios';
import { getProvinceEndpoint } from './defaultConfig';
// import { formatURLParams } from '@/@core/utils/utils';

export default {
  getUserInfo(args) {
    // return axios.get(getUserInfoEndpoint, {
    //     params: formatURLParams(args),
    // })

    return new Promise((resolve, reject) => {
      resolve({
        id: 1,
        name: 'Gia Vỹ',
        email: 'vydoan@imt-soft.com',
        phone: '0364121908',
      });
    });
  },
  getProvince() {
    return axios.get(getProvinceEndpoint);
  }
};