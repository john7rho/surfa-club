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

      setConvo((prev) => ({
        ...prev,
        sent: [...prev.sent, [message, Date.now()]],
      }));
    }
  };

  const sortConvo = ({ sent, received }) => {
    let convo = [];
    while (sent.length > 0 && received.length > 0) {
      const sentLast = sent[sent.length - 1];
      const receivedLast = received[received.length - 1];

      if (sentLast[1] > receivedLast[1]) {
        const message = sent.pop();
        convo.push(message[0]);
      } else {
        const message = received.pop();
        convo.push(message[0]);
      }
    }

    if (sent.length > 0) {
      convo.push(...sent);
    }

    if (received.length > 0) {
      convo.push(...received);
    }

    return convo;
  };

  useEffect(() => {
    const ws = new WebSocket(
      'wss://kxqyjwb9w2.execute-api.us-east-1.amazonaws.com/production',
    );
    ws.onopen = () => {
      console.log('connection opened');
      console.log(user);
    };

    ws.onclose = () => {
      console.log('connection closed');
    };

    ws.onmessage = (event) => {
      const receiver = JSON.parse(event.data).receiver;
      const message = JSON.parse(event.data).message;

      if (receiver == user.username) {
        setConvo((prev) => ({
          ...prev,
          received: [...prev.received, [message, Date.now()]],
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
      <Box>
        {sortConvo(convo).map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </Box>
    </Main>
  );
};

export default Pricing;
