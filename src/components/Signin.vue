<template>
	<div>
		  <g-signin-button
	    :params="googleSignInParams"
	    @success="onSignInSuccess"
	    @error="onSignInError">
	    Sign in with Google
	  </g-signin-button>
	</div>
</template>
 
<script>
export default {
  data() {
    return {
      googleSignInParams: {
        client_id: '883260797244-sascs5qkfrf07ri138337hijeqe46u62.apps.googleusercontent.com',
      },
    };
  },
  methods: {
    onSignInSuccess(googleUser) {
      this.$router.push('/');
      console.log('Login successfully:', googleUser.getBasicProfile().getName());
    },
    onSignInError(error) {
      console.log('OH NOES', error);
    },
  },
};
</script> 
 
<style>
.g-signin-button {
  display: inline-block;
  padding: 10px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
}
.g-signin-button:hover {
	cursor: pointer;
}
</style>
