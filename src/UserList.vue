<template>
    <div class="user-list">
      <div v-for="user in users" :key="user.id" class="user">
        <img :src="user.image" :alt="user.name" class="user-image">
        <p>{{ user.name }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserList',
    data() {
      return {
        users: [
          { id: 1, name: 'John Doe', image: 'https://via.placeholder.com/50' },
          { id: 2, name: 'Jane Doe', image: 'https://via.placeholder.com/50' },
          // Add more users as needed
        ]
      }
    }
  }
  </script>
  
  <style>
  .user-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
  
  .user {
    text-align: center;
  }
  
  .user-image {
    border-radius: 50%;
  }
  </style>
  