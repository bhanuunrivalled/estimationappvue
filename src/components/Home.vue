<template>
  <div id="app">
    <div class="top-section">
      <h1>Welcome to EstimaPro</h1>
      <p>Enter the User Story Number:</p>
      <input v-model="userStory" type="text" placeholder="User Story Number" />
      <button @click="startSession">Start Session</button>
      <user-list :session-id="sessionId" v-if="sessionId"></user-list>
      <!-- end buttons -->
      <button @click="showingResults">show results</button>
      <button @click="restart">restart</button>
      <button @click="newStory">newStory</button>
      <button @click="saveInfo">saveInfo</button>
    </div>
    <div class="bottom-section">
      <table v-if="showResults">
        <thead>
          <tr>
            <th>Name</th>
            <th>Estimation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.estimation }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script>
import UserList from './UserList.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    UserList
  },
  data() {
    return {
      userStory: '',
      sessionStarted: false,
      sessionLink: '',
      sessionId: null,
      users: [], // Will hold the users
      showResults: false,
    }
  },
  methods: {
    async startSession() {
      if (this.userStory !== '') {
        console.log(`Starting session for User Story: ${this.userStory}`)
        this.sessionStarted = true

        try {
          // TODO move to config later 
          const response = await axios.post('http://localhost:5000/start_session');
          console.log(response)
          this.sessionId = response.data.session_id;
          console.log(this.sessionId)
        } catch (error) {
          console.error('An error occurred while starting the session:', error);
        }
        // Simulate users joining the session
        //this.simulateUsersJoining()
      } else {
        console.log('Please enter a User Story Number.')
      }
    },
    showingResults() {
      console.log('showing results')
      this.showResults = true
    },
    restart() {
      console.log('restarting')
    },
    newStory() {
      console.log('new story')
    },
    saveInfo() {
      console.log('save info')
    },
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
}</style>
  