<template>
  <div>
    <div v-if="!isJoined">
      <h1>Enter your name</h1>
      <input v-model="playerName" type="text" placeholder="Your name" />
      <button @click="joinGame">Join</button>
    </div>
    <div v-if="isJoined">
      <label for="estimate">Choose an estimate:</label>
      <select id="estimate" v-model="selectedEstimate">
        <option disabled value="">Please select an estimate</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        <option>?</option>
      </select>
      <button @click="submitEstimate" :disabled="!selectedEstimate">Estimate</button>
    </div>
  </div>
</template>

<script src="./player.js"></script>

<style>
/* Add styling as needed */
</style>
