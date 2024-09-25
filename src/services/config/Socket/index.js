import io from 'socket.io-client';
import {BASE_URL} from '../Axiosinstance';
import {setUserData} from '../../../store/userDetails';

let socket;

const connectSocket = () => {
  if (!socket) {
    socket = io(BASE_URL);

    socket.on('connect', () => {
      console.log('Connected to server');
    });
  }
};

const socketService = (dispatch, authToken, userData) => {
  connectSocket();

  const handleUpdateUserData = data => {
    dispatch(setUserData(data));
  };

  socket.on('updateUserData', handleUpdateUserData);

  const cleanup = () => {
    socket.off('updateUserData', handleUpdateUserData);
  };
  return cleanup;
};

export {socket, socketService};
