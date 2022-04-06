<template>
  <div>
    <p>UserID: {{ userInfo.id }}</p>
    <p>User Name: {{ userInfo.name }}</p>
    <p>Email: {{ userInfo.email }}</p>
    <p>Phone: {{ userInfo.phone }}</p>
    <button-component
      label="Danger"
      class="bg-button-test mr-2 mb-2"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
    USERS,
    // Getters
    GET_USER_INFO_GETTER,
    GET_PROVINES_GETTER,

    // Actions
    GET_USER_INFO_ACTION,
    GET_PROVINES_ACTION,
} from './store_module/type';

export default {
  data() {
    return {
        userInfo: {
            id: null,
            name: '',
            email: '',
            phone: '',
        },
        province: {
          totalRecords: 0,
          items: [],
        }
    };
  },

  computed: {
      ...mapGetters(USERS, [GET_USER_INFO_GETTER, GET_PROVINES_GETTER]),
      getUserInfo() {
        if (this.GET_USER_INFO_GETTER) {
            return this.GET_USER_INFO_GETTER;
        }
        return {};
      },
      getProvince() {
        if (this.GET_PROVINES_GETTER.totalRecords > 0) {
          return this.GET_PROVINES_GETTER;
        }
        return {};
      }
  },
  watch: {
    getUserInfo() {
        this.userInfo = {...this.getUserInfo};
        // console.log(this.$isEmpty(this.userInfo.name));
    },
    getProvince() {
      if (this.getProvince) {
        // console.log('Data trả về từ state: ',this.getProvince);
        this.province.totalRecords = this.getProvince.totalRecords;
        this.province.items = [...this.getProvince.list];
        // console.log('Data trả về sau khi gán vào data cảu component: ',JSON.parse(JSON.stringify(this.province)));
      }
    },
  },

  created() {
    this.GET_USER_INFO_ACTION();
    this.GET_PROVINES_ACTION();
    // console.log(this.$isEmpty(this.userInfo.name));
  },
  methods: {
    ...mapActions(USERS, [GET_USER_INFO_ACTION, GET_PROVINES_ACTION])
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/color.scss";
  .bg-button-test {
    background-color: $color-design-7;
  }

</style>