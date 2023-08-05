<template>
  <div id="app">
    <div class="top-section">
      <h1>Welcome to EstimaPro</h1>
      <p>Enter the User Story Number:</p>
      <input v-model="userStory" type="text" placeholder="User Story Number">
      <button @click="startSession">Start Session</button>
      <user-list v-if="sessionStarted"></user-list>
    </div>
    <div class="bottom-section" v-if="sessionStarted">
      <!-- Your results table will go here -->
    </div>
  </div>
</template>

<script>
import UserList from './UserList.vue'

export default {
  name: 'App',
  components: {
    UserList
  },
  data() {
    return {
      userStory: '',
      sessionStarted: false
    }
  },
  methods: {
    startSession() {
      if (this.userStory !== '') {
        console.log(`Starting session for User Story: ${this.userStory}`)
        this.sessionStarted = true
      } else {
        console.log('Please enter a User Story Number.')
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
  height: 100vh; /* Use the full viewport height */
}

.top-section {
  flex: 0.6; /* 60% of the container's height */
}

.bottom-section {
  flex: 0.4; /* 40% of the container's height */
  overflow: auto; /* Add a scrollbar if the content is too tall */
}
</style>
