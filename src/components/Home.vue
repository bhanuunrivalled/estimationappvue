<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Welcome to EstimaPro</h1>
        <v-text-field v-model="userStory" label="User Story Number" placeholder="Enter Session Name"></v-text-field>
        <v-btn @click="startSession">Start Session</v-btn>

        <user-list :session-id="sessionId" v-if="sessionId"></user-list>

       
      </v-col>
    </v-row>

    <v-row v-if="showResults">
      <v-col>

      </v-col>
    </v-row>
  </v-container>
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
}
</style>
  