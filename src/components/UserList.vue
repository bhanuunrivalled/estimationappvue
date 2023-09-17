<template>
  <v-row>
    <v-col v-for="user in users" :key="user.id" cols="12" sm="4" md="1" class="text-center">
      <v-avatar size="120" :image="user.image" :class="['user-avatar', user.estimation !== -1 ? 'estimated' : '']">
      </v-avatar>
      <div>{{ user.name }}</div>
      <v-btn small color="red" @click="deleteUser(user.id)">X</v-btn>
    </v-col>
  </v-row>
</template>



<script src="./userlist.js"></script>
<style>
.user-avatar {
  border: 2px solid red;
  /* default border color */
}

.user-avatar.estimated {
  border: 2px solid green;
  /* border color when estimated */
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