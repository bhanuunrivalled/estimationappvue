<template>
  <v-container>
    <v-row>
      <v-col>
        <div v-if="!isJoined">
          <h1>Enter your name</h1>
          <v-text-field v-model="playerName" label="Your name" placeholder="Your name"></v-text-field>
          <v-btn @click="joinGame">Join</v-btn>
        </div>
        <div v-if="isJoined">
          <v-select :items="['S', 'M', 'L', 'XL', '?']" label="Choose an estimate" v-model="selectedEstimate"
             :hint="!selectedEstimate ? 'Please select an estimate' : ''"
            persistent-hint></v-select>
          <v-btn @click="submitEstimate" :disabled="!selectedEstimate">Estimate</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./player.js"></script>

<style>
/* Add styling as needed */
</style>
