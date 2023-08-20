<template>
  <div class="user-list">
    <div v-for="user in users" :key="user.id" class="user">
      <img :src="user.image" :alt="user.name" class="user-image" />
      <button @click="deleteUser(user.id)" class="delete-btn">X</button>
      <p>{{ user.name }} <span v-if="user.estimation !== -1">Estimated: {{ user.estimation }}</span></p>
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

.user {
  text-align: center;
}

.user-image {
  border-radius: 50%;
}
</style>
  