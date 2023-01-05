import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Basics'}
          items={[
            {
              title: 'Is joining Surfa free?',
              subtitle:
                'Yes! Surfa is free to join. Once accepted into the community, you can create an account and start using Surfa right away.',
            },
            {
              title: 'Who is eligible to join Surfa?',
              subtitle:
                'Anyone who is 18 years or older and has a valid college email address is eligible to join Surfa.',
            },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Account & settings'}
          items={[
            {
              title: 'How does contacting a host work?',
              subtitle:
                'Send a message to the host through the platform. The host will receive your message and can respond to you through the platform.',
            },
            {
              title: 'Do I have unlimited stays?',
              subtitle:
                'Yes! You can stay as many times as you want with a host as long as you have sufficient credits in your account. Surfa operates based on a credit system in which credits are deducted from your account when you stay with a host and are added to your account when you host a guest (1/night).',
            }
          ]}
        />
      </Box>
      <Box>
        <FaqGroupItem
          title={'Security and Safety'}
          items={[
            {
              title: 'What steps do you take to protect hosts and guests?',
              subtitle:
                'Surfa performs a background check on each host and guest. We also provide a secure platform for payments (in case you want to leave a tip).',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;
