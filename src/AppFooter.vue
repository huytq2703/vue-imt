<template>
  <div class="layout-footer">
    <img
      alt="Logo"
      :src="footerImage()"
      height="20"
      class="mr-2"
    >
    by
    <span class="font-medium ml-2">IMT Solutions</span>
  </div>
</template>

<script>
	export default {
		name: "AppFooter",
		computed: {
			darkTheme() {
				return this.$appState.darkTheme;
			}
		},
		methods: {
			footerImage() {
				return 'images/logo-dark.svg';
			}
		}
	};
</script>