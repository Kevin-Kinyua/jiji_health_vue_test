<!--
<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template> -->

<script>
// import axios from 'axios';

// export default {
//   data() {
//     return {
//       name: '',
//       email: '',
//       password: '',
//       message: ''
//     };
//   },
//   methods: {
//     async registerUser() {
//       try {
//         const response = await axios.post('http://localhost:3000/api/auth/users', {
//           user: {
//             name: this.name,
//             email: this.email,
//             password: this.password
//           }
//         });
//         this.message = response.data.message;
//       } catch (error) {
//         this.message = error.response.data.errors.join(', ');
//       }
//     }
//   }
// };

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: { email: '', password: '', password_confirmation: '' }
    };
  },
  methods: {
    ...mapActions(['register']),
    async register() {
      try {
        await this.register(this.user);
        this.$router.push('/dashboard');
      } catch (error) {
        alert('Registration failed');
      }
    }
  }
};
</script>
_____________________________________________________________________________________________________

<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="register">
      <label for="name">Name:</label>
      <input v-model="name" placeholder="Name" required /><br>
      <label for="email">Email:</label>
      <input v-model="email" placeholder="Email" required /><br>
      <label for="password">Password:</label>
      <input v-model="password" type="password" placeholder="Password" required /><br>
      <label for="confirmPassword">Confirm Password:</label>
      <input v-model="password" type="password" placeholder="ConfirmPassword" required /><br>
      <button type="submit">Sign Up</button>
      <br>
      <router-link to="/login">Already have an account? Login</router-link>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>
