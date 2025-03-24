<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" required /><br>
      <input v-model="password" type="password" placeholder="Password" required /><br>
      <button type="submit">Login</button>
      <br>
      <router-link to="/register">Don't have an account? Register</router-link>
    </form>
  </div>
</template>

<script>
// import { useStore } from 'vuex';
// import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import { mapActions } from 'vuex';

// export default {
//   setup() {
//     const store = useStore();
//     const router = useRouter();
//     const email = ref('');
//     const password = ref('');

//     const login = async () => {
//       await store.dispatch('login', { email: email.value, password: password.value });
//       router.push('/dashboard');
//     };

//     return { email, password, login };
//   }
// };

export default {
  data() {
    return {
      user: { email: '', password: '' }
    };
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      try {
        await this.login(this.user);
        this.$router.push('/dashboard');
      } catch (error) {
        alert('Login failed');
      }
    }
  }
};
</script>
