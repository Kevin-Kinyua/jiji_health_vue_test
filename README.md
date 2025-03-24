# Vue.js + Ruby on Rails API Authentication-Based CRUD App

## 📌 Project Overview

This project is a basinc **Vue.js** frontend application connected to a **Ruby on Rails API** backend. It implements **user authentication** using **Devise JWT** and allows users to **add and manage patient records** through a modal form. The patients' details are stored in a database and displayed in a table.

## 🚀 Features

- **User Authentication** (Register, Login, Logout) via JWT
- **Dashboard with Authenticated User Display**
- **Add Patient Modal Form**
- **CRUD Operations on Patients**
- **Age Auto-Calculation from Date of Birth**
- **Rails API with Devise JWT for Secure Authentication**

## 🛠️ Technologies Used

### **Frontend (Vue.js)**

- Vue 3
- Vue Router
- Vuex (State Management)
- Axios (API Requests)

### **Backend (Ruby on Rails API)**

- Ruby on Rails 7
- Devise JWT (Authentication)
- Rack-CORS (CORS Handling)

## 📂 Project Structure

```
project-root/
│── backend/                 # Ruby on Rails API server
│   ├── app/
│   ├── config/
│   ├── db/
│   ├── Gemfile
│   └── ...
│
│── health_app/                # Vue.js Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   ├── store/
│   │   ├── services/
│   │   ├── main.js
│   │   └── App.vue
│   ├── public/
│   ├── package.json
│   └── ...
```

## 🔧 Setup & Installation

### **1. Backend (Rails API)**

#### **Step 1: Install Dependencies**

```sh
cd jiji_health_vue_test
bundle install
```

#### **Step 2: Set Up Database**

```sh
rails db:create db:migrate
```

#### **Step 3: Start the Rails API**

```sh
rails s
```

### **2. Frontend (Vue.js)**

#### **Step 1: Install Dependencies**

```sh
cd health_app
npm install
```

#### **Step 2: Start the Vue App**

```sh
npm run serve
```

## 🔑 Authentication Flow

1. **Register** a new user via `/register` page.
2. **Login** via `/login` page.
3. **User is redirected to the Dashboard**, where their name appears.
4. **Click "Add Patient"** to open the modal form.
5. **Enter patient details**, submit, and see them appear in the table.

## 📌 API Endpoints

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| POST   | `/users`          | Register User      |
| POST   | `/users/sign_in`  | Login User         |
| DELETE | `/users/sign_out` | Logout User        |
| GET    | `/users/profile`  | Get Logged-in User |
| POST   | `/patients`       | Add Patient        |
| GET    | `/patients`       | Get All Patients   |

## 🛠️ Future Improvements

- Role-based authorization
- Edit & Delete patient records
- Profile management
- Postgresql integration

## 🎯 Contributors

- **Kevin Kinyua** - Developer

## 📜 License

This project is licensed under the **MIT License**.

