import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';


export default {
    data() {
      return {
        playerName: '',
      };
    },
    methods: {
      joinGame() {
        // Logic to join the game with the entered player name
        // You can emit an event or call an API here
      },
    },
  };
    