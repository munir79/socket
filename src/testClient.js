import { io } from 'socket.io-client';

//  connect to the backend

const socket = io('http://localhost:5000');

// console log if connection successfull

socket.on('connect', () => {
  console.log('connected to the server', socket.id);

  // now send message in server
  socket.emit('send_message', {
    user: 'Munir',
    text: ' hello 00  from test client',
  });
});

// if messge from server then console log

socket.on('receive_message', (data) => {
  console.log(' message from the server', data);
});

// disconnect

socket.on('disconnect', () => {
  console.log(' disconnect from the server ');
});
