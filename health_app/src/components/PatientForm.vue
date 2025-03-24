<template>
  <div>
    <button @click="showModal = true">Add Patient</button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2>Add Patient</h2>
        <form @submit.prevent="addPatient">
          <label>Name:</label>
          <input v-model="patient.name" required />

          <label>Email:</label>
          <input v-model="patient.email" type="email" required />

          <label>Phone:</label>
          <input v-model="patient.phone" type="tel" required />

          <label>Date of Birth:</label>
          <input v-model="patient.date_of_birth" type="date" required @change="calculateAge" />

          <label>Age:</label>
          <input v-model="patient.age" type="number" readonly />

          <button type="submit">Submit</button>
          <button @click="showModal = false">Close</button>
        </form>
      </div>
    </div>

    <h2>Patients List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date of Birth</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.id">
          <td>{{ patient.name }}</td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.phone }}</td>
          <td>{{ patient.date_of_birth }}</td>
          <td>{{ patient.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const showModal = ref(false);
    const patients = ref([]);
    const patient = ref({
      name: "",
      email: "",
      phone: "",
      date_of_birth: "",
      age: 0
    });

    // Fetch patients on component mount
    onMounted(async () => {
      const { data } = await axios.get("http://localhost:3000/patients", {
        headers: { Authorization: `Bearer ${store.state.token}` }
      });
      patients.value = data;
    });

    // Function to add a new patient
    const addPatient = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/patients",
          { patient: patient.value },
          { headers: { Authorization: `Bearer ${store.state.token}` } }
        );

        patients.value.push(data);
        showModal.value = false;
        resetForm();
      } catch (error) {
        console.error("Error adding patient:", error.response.data);
      }
    };

    // Calculate age based on date of birth
    const calculateAge = () => {
      if (patient.value.date_of_birth) {
        const birthDate = new Date(patient.value.date_of_birth);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        patient.value.age = today < new Date(birthDate.setFullYear(today.getFullYear())) ? age - 1 : age;
      }
    };

    // Reset form fields
    const resetForm = () => {
      patient.value = { name: "", email: "", phone: "", date_of_birth: "", age: 0 };
    };

    return { showModal, patients, patient, addPatient, calculateAge };
  }
};
</script>

<style>
/* Modal Styling */
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
</style>
