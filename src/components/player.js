import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';


export default {
    data() {
        return {
            isJoined: false,
            socket: null,
            playerName: '',
            selectedEstimate: '',
            roomName: this.$route.params.roomName, // Access the room name from the URL
        };
    },
    methods: {
        joinGame() {
            if (!this.isJoined) {
                // Code to join the room using this.roomName and this.playerName
                console.log('Joining room:', this.roomName);
                this.socket = io(`http://localhost:5000`, {
                    query: {
                        room: this.roomName
                    }
                });

                this.socket.emit('join_room', {
                    user: this.playerName,
                    room: this.roomName
                });
                this.isJoined = true;
            }
            else {
                console.log('Already joined!');
            }
        },
        submitEstimate() {
            // Handle submitting the estimate
            console.log('Estimated:', this.selectedEstimate);
            this.socket.emit('user_estimation', { userid: this.socket.id, estimation: this.selectedEstimate })
        },
    }
}