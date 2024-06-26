import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

export default {
  props: ['sessionId'],
  data() {
    return {
      users: [],
      socket: null
    }
  },
  mounted() {
    this.connectToSession()
  },
  methods: {
    connectToSession() {
      this.socket = io(`http://localhost:5000`, {
        query: { room_id: this.sessionId },
      });
      this.socket.on('connect', () => {
        console.log('Connected to the server');
      });
      this.socket.emit('subscribe_to_room', {
        room: this.sessionId
      });
      this.socket.on('user_joined', (data) => {
        console.log('User joined:', data);
        let user_obj = {
          id: data.sid,
          name: data.username,
          image:  this.create_image_url(),
          estimation : -1
        };
        //this.users.filter((user) => user.name == data.username)
        this.users.push(user_obj);
      });

      this.socket.on('user_estimation_response', (data) =>{
        console.log('User estimated:', data);
        let userId = data.userid
        let user_obj = this.users.find(user => user.id == userId)
        console.log(user_obj)
        user_obj.estimation = data.estimation
      });

      console.log('users:', this.users);

      },

    create_image_url(){
      console.log("create_image_url")
        // create a random number between 1 and 10
        let random_number = Math.floor(Math.random() * 50) + 1;
        let gender = null  // randm decide men or woman
        gender = random_number % 2 == 0 ? "women" : "men";
        let image_url = "https://randomuser.me/api/portraits/" + gender + "/" + random_number + ".jpg"
        console.log(image_url);
        return image_url;
      }
  },
  beforeDestroy() {
    // Close the WebSocket connection when the component is destroyed
    if (this.socket) {
      console.log('Disconnecting from the server');
      this.socket.disconnect();
      //
      this.socket.close()
    }
  }
}
