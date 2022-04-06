import { createStore } from 'vuex';

// Systems
import app from './app';
import users from '../pages/User/store_module';
import login from '../pages/Login/store-module';

const store = createStore({
  modules: {
    // System
    app,

    // user
    users,

    // Login
    login
  },
});

export default store;