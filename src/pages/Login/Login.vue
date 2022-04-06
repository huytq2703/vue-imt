<template>
  <div class="surface-0 flex align-items-center justify-content-center min-h-screen overflow-hidden">
    <div
      class="grid justify-content-center p-2 lg:p-0"
      style="min-width:80%"
    >
      <div
        class="col-12 xl:col-6 mt-5 border-primary-color"
        style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, #ed1c24, rgba(33, 150, 243, 0) 30%);"
      >
        <div
          class="h-full w-full m-0 py-7 px-4"
          style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));"
        >
          <div class="text-center mb-5">
            <img
              src="images/logo-dark.svg"
              alt="Image"
              height="50"
              class="mb-3"
            >
            <div class="text-900 text-3xl font-medium mb-3">
              Welcome, Isabel!
            </div>
            <span class="text-600 font-medium">Sign in to continue</span>
          </div>
                
          <div class="w-full md:w-10 mx-auto">
            <form @submit="preLogin(!v$.$invalid)">
              <!-- Start: Username -->
              <label
                for="userName"
                class="block text-900 text-xl font-medium mb-2"
              >Số điện thoại/Email</label>
              <inputText-component
                id="userName"
                v-model="v$.userLogin.userName.$model"
                type="text"
                class="w-full"
                placeholder="DienQuang@..."
                style="padding:1rem;"
                :class="{'p-invalid':v$.userLogin.userName.$invalid && submitted}"
              />
              <small
                v-if="(v$.userLogin.userName.$invalid && submitted) || v$.userLogin.userName.$pending.$response"
                class="p-error"
              >
                <span v-if=" v$.userLogin.userName.required.$invalid">
                  {{ v$.userLogin.userName.required.$message }}
                </span>
                <span v-else-if=" v$.userLogin.userName.maxlength.$invalid">
                  {{ v$.userLogin.userName.maxlength.$message }}
                </span>
              </small>
              <!-- End: Username -->

              <!-- Start: Password -->
              <label
                for="password"
                class="block text-900 font-medium text-xl mb-2 mt-3"
              >Mật khẩu</label>
              <password-component
                id="password"
                v-model="v$.userLogin.password.$model"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                :toggle-mask="true"
                class="w-full"
                input-class="w-full"
                input-style="padding:1rem"
                :class="{'p-invalid':v$.userLogin.password.$invalid && submitted}"
              />
              <small
                v-if="(v$.userLogin.password.$invalid && submitted) || v$.userLogin.password.$pending.$response"
                class="p-error"
              >
                <span v-if=" v$.userLogin.password.required.$invalid">
                  {{ v$.userLogin.password.required.$message }}
                </span>
                <span v-else-if=" v$.userLogin.password.maxlength.$invalid">
                  {{ v$.userLogin.password.maxlength.$message }}
                </span>
              </small>
              <!-- End: Password -->
              <!-- Start: Remember me and Forgot password -->
              <div class="flex align-items-center justify-content-between mb-5 mt-3">
                <div class="flex align-items-center">
                  <checkbox-component
                    id="rememberMe"
                    v-model="rememberMe"
                    :binary="true"
                    class="mr-2"
                  />
                  <label for="rememberMe">Ghi nhớ</label>
                </div>

                <!-- <router-link
                  :to="{name: 'forgotPassword'}"
                  class="no-underline ml-2 text-right cursor-pointer text-primary-color"
                >
                  Quên mật khẩu?
                </router-link> -->
                <a
                  class="no-underline ml-2 text-right cursor-pointer text-primary-color"
                >
                  Quên mật khẩu?
                </a>
              </div>
              <!-- End: Remember me and Forgot password -->
              <button-component
                type="submit"
                label="Đăng nhập"
                class="w-full p-3 p-button-danger bg-primary-color"
              />
            </form>
            <!-- Go to register page -->
            <p class="text-center mt-5">
              Bạn chưa có tài khoản
              <!-- <router-link
                class="text-primary-color"
                :to="{name: 'register'}"
              >
                Đăng ký? 
              </router-link> -->
              <a
                class="text-primary-color"
              >
                Đăng ký? 
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, maxLength  } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { mapActions } from 'vuex';
import { LOGIN, PRE_LOGIN_ACTION} from "./store-module/type";
export default {
  data() {
    return {
      v$: useVuelidate(),
      submitted: false,
      userLogin: {
        grantType: "password",
        userName: 'dev01@gmail.com',
        password: '12345',
      },
      rememberMe: false
    };
  },
  validations() {
    return {
      userLogin: {
        userName: {
          required,
          maxlength: maxLength(250),
        },
        password: {
          required,
          maxLength: maxLength(100)
        },
      },
    };
  },
  computed: {
    logoColor() {
      if (this.$appState.darkTheme) return 'white';
      return 'dark';
    }
  }, 
  methods: {
    ...mapActions(LOGIN, [PRE_LOGIN_ACTION]),
    preLogin(isValid){
      this.submitted = true;
      if(!isValid) return;
      this.PRE_LOGIN_ACTION(this.userLogin);
      // console.log(this.userLogin);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";
.bg-primary-color {
  background-color: $color-design-10;
}
.text-primary-color {
color: $color-design-10;
}
.border-primary-color {
  border-color: $color-design-10;
}
.pi-eye {
    transform:scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform:scale(1.6);
    margin-right: 1rem;
}

</style>