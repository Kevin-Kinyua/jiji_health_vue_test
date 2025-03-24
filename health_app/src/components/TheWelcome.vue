<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import UserIcon from './icons/IconUser.vue'
// import ToolingIcon from './icons/IconTooling.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'
// import { useRouter } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'
// const router = useRouter();
// const goToRegister = () => router.push('/register');
// const goToLogin = () => router.push('/login');
// //
// //

// const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>

      <router-link to="/register">
        <button>Sign Up</button>
      </router-link>

    <router-link to="/login">
        <button>Log in</button>
      </router-link>

  </WelcomeItem>
</template>

<style>
button {
  background-color: #00BD7E; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
