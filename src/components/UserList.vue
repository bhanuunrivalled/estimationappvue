<template>
  <v-container fluid>
    <!-- Top Row -->
    <v-row align="center">
      <v-col cols="10">
        <v-text-field v-model="userStory" label="User Story" placeholder="Enter User Story Number"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn small color="green" @click="query_jira_push">Fetch</v-btn>
      </v-col>
    </v-row>

    <!-- Middle Section -->
    <v-row>
      <!-- User List Column (60%) -->
      <v-col cols="12" md="7">
        <v-row>
          <v-col v-for="user in users" :key="user.id" cols="12" sm="6" md="4" lg="3" class="text-center">
            <v-avatar size="120" :image="user.image" :class="['user-avatar', user.estimation !== -1 ? 'estimated' : '']">
            </v-avatar>
            <div>{{ user.name }}</div>
            <v-btn small color="red" @click="deleteUser(user.id)">X</v-btn>
          </v-col>
        </v-row>
      </v-col>

      <!-- Results Table Column (40%) -->
      <v-col cols="12" md="5">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Calories
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

    <!-- Bottom Row -->
    <v-row>
      <v-col class="text-center">
        <v-btn class="mx-2">Show Results</v-btn>
        <v-btn class="mx-2">Restart</v-btn>
        <v-btn class="mx-2">New Story</v-btn>
        <v-btn class="mx-2">Save Info</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
}
</style>