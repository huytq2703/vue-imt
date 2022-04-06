import LoginServices from '@/pages/Login/api-service';
import { 
  USER_INFO_GETTER, 
  PRE_LOGIN_ACTION 
} from './type';
import commonData from '../../../@db/common';

export default {
  namespaced: true,
  state: {
    userInfo: {},
  },
  getters: {
    [USER_INFO_GETTER](state) {
      return state.userInfo;
    },
  },
  mutations: {},
  actions: {
    [PRE_LOGIN_ACTION]({ state }, val) {
      LoginServices
        .preLogin(val)
        .then(response => response.data)
        .then(res => {
         console.log(res);
        })
        .catch(error => {})
    },
  },
}
