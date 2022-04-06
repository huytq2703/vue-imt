<template>
  <div class="layout-topbar">
    <router-link
      to="/"
      class="layout-topbar-logo"
    >
      <img
        alt="Logo"
        :src="topbarImage()"
      >
    </router-link>
    <button
      class="p-link layout-menu-button layout-topbar-button"
      @click="onMenuToggle"
    >
      <i class="pi pi-bars" />
    </button>

    <breadcrumb-component
      v-if="$route.meta.pageTitle"
      :home="breadcrumbHome"
      :model="breadcrumbItems"
			class=""
    />

    <button
      v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', 
                      leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}"
      class="p-link layout-topbar-menu-button layout-topbar-button"
    >
      <i class="pi pi-ellipsis-v" />
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user" />
          <span>Profile</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			breadcrumbHome: {icon: 'pi pi-home', to: '/'},
			breadcrumbItems: [],
			test: "",
		};
	},
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		}
	},
	watch: {
		'$route.meta.pageTitle': {
			handler() {
        localStorage.setItem('breadcrumbPageTitle', this.$route.meta.pageTitle);
				this.breadcrumbItems = [];
        this.breadcrumbItems.push( { label: this.$route.meta.pageTitle } );
			},
			deep: true,
		}
	},
  mounted() {
    console.log(localStorage.getItem('breadcrumbPageTitle'));
    this.breadcrumbItems = [];
		this.breadcrumbItems.push( { label: localStorage.getItem('breadcrumbPageTitle') } );
  },
	methods: {
		onMenuToggle(event) {
				this.$emit('menu-toggle', event);
		},
		onTopbarMenuToggle(event) {
			this.$emit('topbar-menu-toggle', event);
		},
		topbarImage() {
			return this.$appState.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg';
		}
	}
};
</script>