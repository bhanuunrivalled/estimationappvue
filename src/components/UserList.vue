<template>
  <v-col v-for="user in users" :key="user.id" cols="12" sm="4" md="3" class="text-center">
    <v-avatar size="120" :image="user.image" :class="['user-avatar', 'estimated', user.estimation !== -1 ? 'estimated' : '']" >
    </v-avatar>
    <div>{{ user.name }}</div>
  </v-col>
  </template>


<script src="./userlist.js"></script>
<style>
.estimated {
  border: 2px solid green;
}

.user-image {
  border: 2px solid red;
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
}
</style>