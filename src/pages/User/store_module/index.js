import UserServices from '../api-service';
import {
  // Getters  
  GET_USER_INFO_GETTER,
  GET_PROVINES_GETTER,
  // Actions
  GET_USER_INFO_ACTION,
  GET_PROVINES_ACTION, 
} from './type';

import commonData from '../../../@db/common';

export default {
  namespaced: true,
  state: {
    userInfo: {},
    provinces: {},
  },
  getters: {
    [GET_USER_INFO_GETTER](state) {
      return state.userInfo;
    },
    [GET_PROVINES_GETTER](state) {
      return state.provinces;
    },
  },
  mutations: {},



  
  actions: {
    [GET_USER_INFO_ACTION]({ state }, val) {
      UserServices
        .getUserInfo(val)
        // .then(response => response.data)
        // .then(res => {
        //   if (res.success) {
        //     console.log(res);
        //     // state.userInfo = res.data
        //   } else {
        //     console.log("Không có data");
        //   }
        // })
        // .catch(error => {
        //   toasts.error(notificationResponseMessage(null, error.message))
        // })
        .then(response => state.userInfo = response);
    },
    [GET_PROVINES_ACTION]({ state }) {
      UserServices
        .getProvince()
        .then(response => response.data)
        .then(res => {
          if (res.errorCode == commonData.errorCodes[0].code) {
            state.provinces = res.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
