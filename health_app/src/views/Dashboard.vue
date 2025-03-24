<!-- <template>
  <div>
    <h2>Dashboard</h2>
    <button @click="logout">Logout</button>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }} - {{ post.content }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const posts = ref([]);

    onMounted(async () => {
      const { data } = await axios.get('http://localhost:3000/posts', {
        headers: { Authorization: `Bearer ${store.state.token}` }
      });
      posts.value = data;
    });

    const logout = () => {
      store.dispatch('logout');
      router.push('/login');
    };

    return { posts, logout };
  }
};
</script> -->

<template>
  <div class="dashboard">
    <!-- Display logged-in user -->
    <h2>Welcome, {{ userName }}</h2>

    <!-- Button to open modal -->
    <button @click="showModal = true" class="btn">Add Patient</button>

    <!-- Patient Form Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Add Patient</h3>
        <form @submit.prevent="addPatient">
          <input v-model="patient.name" type="text" placeholder="Name" required />
          <input v-model="patient.email" type="email" placeholder="Email" required />
          <input v-model="patient.phone" type="text" placeholder="Phone Number" required />
          <input v-model="patient.dob" type="date" @change="calculateAge" required />
          <input v-model="patient.age" type="number" placeholder="Age" disabled />

          <button type="submit">Submit</button>
          <button @click="showModal = false" type="button">Close</button>
        </form>
      </div>
    </div>

    <!-- Patient List Table -->
    <h3>Patient List</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th> <br>
          <th>Email</th> <br>
          <th>Phone</th> <br>
          <th>Date of Birth</th> <br>
          <th>Age</th> <br>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(patient, index) in patients" :key="index">
          <td>{{ patient.name }}</td> <br>
          <td>{{ patient.email }}</td><br>
          <td>{{ patient.phone }}</td><br>
          <td>{{ patient.dob }}</td><br>
          <td>{{ patient.age }}</td><br>
        </tr>
      </tbody>
    </table>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '', // Logged-in user's name
      showModal: false,
      patient: {
        name: '',
        email: '',
        phone: '',
        dob: '',
        age: ''
      },
      patients: [] // List of patients
    }
  },
  methods: {
    calculateAge() {
      if (this.patient.dob) {
        const dob = new Date(this.patient.dob)
        const today = new Date()
        let age = today.getFullYear() - dob.getFullYear()
        const monthDiff = today.getMonth() - dob.getMonth()

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
          age--
        }

        this.patient.age = age
      }
    },
    addPatient() {
      // Add patient to the list
      this.patients.push({ ...this.patient })

      // Clear the form
      this.patient = { name: '', email: '', phone: '', dob: '', age: '' }

      // Close modal
      this.showModal = false
    }
  },
  created() {
    // Simulating fetching user data from API
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.userName = user.name
    }
  }


}
const logout = () => {
      store.dispatch('logout');
      router.push('/login');
    };

    // return { posts, logout }
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
.btn {
  background: #3498db;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
</style>

