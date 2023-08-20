<template>
    <div id="app">
      <div class="top-section">
        <h1>Welcome to EstimaPro</h1>
        <p>Enter the User Story Number:</p>
        <input v-model="userStory" type="text" placeholder="User Story Number" />
        <button @click="startSession">Start Session</button>
        <user-list :session-id="sessionId" v-if="sessionId"></user-list>
        <!-- end buttons -->
        <button @click="showResults">show results</button>
        <button @click="restart">restart</button>
        <button @click="newStory">newStory</button>
        <button @click="saveInfo">saveInfo</button>
      </div>
      <div class="bottom-section" v-if="sessionStarted">
        <!-- Your results table will go here -->
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
        sessionLink:'',
        sessionId:null,
        users: [] // Will hold the users
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
      showResults() {
        console.log('showing results')
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
      simulateUsersJoining() {
        // Add users at intervals
        const names = ['John', 'Jane', 'Alice', 'Bob']
        names.forEach((name, index) => {
          setTimeout(() => {
            this.users.push({ id: index, name: name, image: 'https://via.placeholder.com/50' })
          }, index * 2000) // Add a user every 2 seconds
        })
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
  