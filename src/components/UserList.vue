<template>
  <div class="user-list">
    <div v-for="user in users" :key="user.id" class="user-container">
      <img :src="user.image" :alt="user.name" :class="['user-image', user.estimation !== -1 ? 'estimated' : '']" />
      <button @click="deleteUser(user.id)" class="delete-btn">X</button>
      <p class="username">{{ user.name }}</p>
    </div>
  </div>
</template>


<script src="./userlist.js"></script>
<style>
.user-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.user-container {
  position: relative;
  display: flex;
  align-items: center;
}

.user-image {
  border-radius: 50%;
  border: 5px solid red;
  /* Default border color */
  transition: all 0.3s;
  /* Optional: for smooth color change */
}

.user-image.estimated {
  border-color: green;
  /* Border color when estimated */
}

.username {
  text-align: center;
  font-size: 1rem;
  /* Other styles as per your preference */
}

.delete-btn {
  position: absolute;
  top: -10px;
  /* Adjust as needed */
  right: -10px;
  /* Adjust as needed */
  background-color: white;
  /* Background color */
  border: none;
  /* Remove border */
  font-size: 18px;
  /* Font size */
  cursor: pointer;
  /* Mouse pointer */
}</style>