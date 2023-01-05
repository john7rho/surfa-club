import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useTheme } from '@mui/material/styles';
import { TextField, Button, Box, Typography } from '@mui/material';
import Main from 'layouts/Main';

const RMessage = (message) => {
  return (
    <div>
      <Typography
        style={{ textAlign: 'left', marginLeft: '30px' }}
        variant="h6"
      >
        {message}
      </Typography>
    </div>
  );
};

const SMessage = (message) => {
  return (
    <div>
      <Typography
        style={{
          textAlign: 'right',
          marginRight: '30px',
        }}
        variant="h6"
      >
        {message}
      </Typography>
    </div>
  );
};

const Pricing = () => {
  const [message, setMessage] = useState('');
  const [receiver, setReceiver] = useState('');
  const [socket, setSocket] = useState(null);
  const [convo, setConvo] = useState({ received: [], sent: [] });

  const theme = useTheme();

  const { user, setUser } = useContext(UserContext);

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

  const sortConvo = () => {
    const sent = convo.sent;
    const received = convo.received;

    let ans = [];

    while (sent.length > 0 && received.length > 0) {
      const sentLast = sent[sent.length - 1];
      const receivedLast = received[received.length - 1];

      if (sentLast[1] > receivedLast[1]) {
        ans.push(['s', sent.pop()[0]]);
      } else {
        ans.push(['r', received.pop()[0]]);
      }
    }

    if (sent.length > 0) {
      ans.push(...sent.map((msg) => ['s', msg[0]]));
    }

    if (received.length > 0) {
      ans.push(...received.map((msg) => ['r', msg[0]]));
    }

    ans.reverse();
    return ans;
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
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <Box style={{ flexGrow: 1 }}>Your conversations</Box>

        <Box style={{ flexGrow: 3 }}>
          <TextField
            InputProps={{
              style: { borderRadius: '30px' },
            }}
            style={{ width: '100%' }}
            placeholder="Message User"
            onChange={(event) => handleReceiverChange(event)}
          />

          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '20vw',
              width: '100%',
            }}
          >
            {sortConvo().map((msg) => {
              const flag = msg[0];
              const message = msg[1];

              if (flag === 'r') {
                return RMessage(message);
              } else if (flag === 's') {
                return SMessage(message);
              }
            })}
          </Box>

          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <TextField
              InputProps={{
                style: { borderRadius: '30px' },
              }}
              style={{ flexGrow: 12 }}
              placeholder="Message..."
              onChange={(event) => handleMessageChange(event)}
            />

            <Button onClick={handleMessageSend} style={{ flexGrow: 1 }}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Pricing;
