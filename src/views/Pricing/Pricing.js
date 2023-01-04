import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useTheme } from '@mui/material/styles';
import { TextField, Button, Box } from '@mui/material';
import Main from 'layouts/Main';

const Pricing = () => {
  const [message, setMessage] = useState('');
  const [receiver, setReceiver] = useState('');
  const [socket, setSocket] = useState(null);
  const [convo, setConvo] = useState({ received: [], sent: [] });
  const theme = useTheme();

  const { user } = useContext(UserContext);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleReceiverChange = (event) => {
    setReceiver(event.target.value);
  };

  const handleMessageSend = () => {
    if (socket !== null) {
      const payload = JSON.stringify({
        action: 'sendmessage',
        message: message,
        receiver: receiver,
      });

      socket.send(payload);

      setConvo((prev) => ({ ...prev, sent: [...prev.sent, message] }));
    }
  };

  useEffect(() => {
    const ws = new WebSocket(
      'wss://kxqyjwb9w2.execute-api.us-east-1.amazonaws.com/production',
    );
    ws.onopen = () => {
      console.log('connection opened');
    };

    ws.onclose = () => {
      console.log('connection closed');
    };

    ws.onmessage = (event) => {
      if (event.data.receiver == user) {
        setConvo((prev) => ({
          ...prev,
          received: [...prev.received, event.data.message],
        }));
      }
    };

    ws.onerror = (error) => {
      console.log(error);
    };

    setSocket(ws);

    return () => {
      if (socket !== null) socket.close();
    };
  }, []);

  console.log(user, convo);
  return (
    <Main>
      <Box>
        <p>user lookup component</p>
        <TextField
          placeholder="Message User"
          onChange={(event) => handleReceiverChange(event)}
        />
      </Box>

      <Box>
        <p>send message component</p>
        <TextField
          placeholder="Message..."
          onChange={(event) => handleMessageChange(event)}
        />
        <Button onClick={handleMessageSend}>Send</Button>
      </Box>
    </Main>
  );
};

export default Pricing;
