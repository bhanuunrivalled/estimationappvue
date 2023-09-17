<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Welcome to EstimaPro</h1>
        <v-text-field v-model="teamName" label="Team Name" placeholder="Enter Team Name"></v-text-field>
        <v-btn @click="startSession">Start Session</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

  
<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      teamName: '',
    }
  },
  methods: {
    async startSession() {
      if (this.teamName !== '') {
        console.log(`Starting session  ${this.teamName}`)
        try {
          this.$router.push({ name: 'Userlist', params: { roomName: this.teamName } });
        } catch (error) {
          console.error('An error occurred while starting the session:', error);
        }
      }
    }
  }
}
</script>
  
<style>
#app {
  text-align: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* Use the full viewport height */
}

.top-section {
  flex: 0.6;
  /* 60% of the container's height */
}

.bottom-section {
  flex: 0.4;
  /* 40% of the container's height */
  overflow: auto;
  /* Add a scrollbar if the content is too tall */
}
</style>
  