<template>
  <div>
    <h1>Enter your name</h1>
    <input v-model="playerName" type="text" placeholder="Your name" />
    <button @click="joinGame">Join</button>
    <!-- Add card components or other UI elements here -->
  </div>
</template>

<script src="./player.js"></script>

<style>
/* Add styling as needed */
</style>
