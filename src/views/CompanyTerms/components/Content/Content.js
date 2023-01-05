import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: '1.1 Eligibility',
    description:
    'In order to use the Service, you must be at least 18 years old and able to enter into legally binding contracts. If you are under 18, you may not use the Service.',
  },
  {
    title: '1.2 Account creation',
    description:
      'In order to use certain features of the Service, you must create an account. You must provide accurate and complete information when creating your account, and you must keep your account information up-to-date. You are responsible for maintaining the confidentiality of your account and password, and you agree to accept responsibility for all activities that occur under your account. If you suspect that someone else has accessed your account without your permission, you must notify Surfa Club immediately.',
  },
  {
    title: '1.3 Content',
    description:
      'You are responsible for the content you post on the Service, including any photos or descriptions of the accommodations you offer or request. You must not post any content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise inappropriate. Surfa Club reserves the right to remove any content that violates these terms or that we determine is inappropriate for any reason. You are responsible for your own safety and the safety of your personal property while using the Service. Surfa Club does not guarantee the safety of any member or the accuracy of any content posted on the Service. You should exercise caution and use your own judgment when using the Service, including when staying with or hosting a member.',
  },
  {
    title: '1.4 Hosting and staying',
    description:
      'By hosting or staying with another member through the Service, you agree to follow all local laws and regulations and to respect the rights and safety of your host or guest. You must not engage in any illegal activity or cause any damage to the accommodations you are staying in. You are responsible for any theft or loss of property that occurs during your stay or hosting experience. Surfa Club is not responsible for any theft or loss of property and will not be liable for any damages resulting from such theft or loss. If you violate these terms or cause any damage, Surfa Club may terminate your account and you may be liable for any damages.',
  },
  {
    title: '2.1 Payments',
    description:
      'Surfa Club uses a third-party payment processor to handle payments for accommodations and other services offered through the Service. By using the Service, you agree to be bound by the terms and conditions of the payment processor. Surfa Club is not responsible for any errors or issues with payments processed through the third-party payment processor.',
  },
  {
    title: '2.2 Refunds.',
    description:
      'Surfa Club does not offer refunds for accommodations or other services purchased through the Service. If you are not satisfied with your stay or experience, you may file a complaint with Surfa Club and we will try to resolve the issue to the best of our ability.',
  },
  {
    title: '3.1 Surfa Club\'s rights',
    description:
      'Surfa Club owns all intellectual property rights in the Service, including the website, mobile applications, and content posted by Surfa Club or its users. You may not use any of Surfa Club\'s intellectual property without our written permission.',
  },
  {
    title:
      '3.2 User content',
    description:
      'You retain ownership of any intellectual property rights in the content you post on the Service. By posting content on the Service, you grant Surfa Club a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the content in connection with the Service and Surfa Club\'s business.',
  },
  {
    title:
      '4.1 The Service is provided on an "as is" and "as available" basis.',
    description:
      'Surfa Club provides no promises or warranties regarding the quality of furnishing or lodging. Moreover, Surfa Club cannot guarantee the safety of your belongings or property.'
  },
  {
    title:
      '4.2 Surfa Club makes no warranties of any kind',
    description:
      'Surfa Club makes no warranties of any kind, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Surfa Club does not guarantee that the Service will be available at all times or that it will be error-free.'
  },
  {
    title:
      '4.3 Surfa Club does not endorse any content or users of the Service',
    description:
      'Surfa Club does not endorse any content or users of the Service, and you use the Service at your own risk. Surfa Club is not responsible for any damages or losses that may result from your use of the Service.'
  },
  {
    title:
      '5. Limitation of liability',
    description:
      '5.1 In no event will Surfa Club be liable for any indirect, incidental, consequential, special, or punitive damages, or any loss of profits or revenues, arising out of or in connection with the Service or these Terms. 5.2 Surfa Club\'s total liability for any claim arising out of or in connection with the Service or these Terms will not exceed the amount you paid to Surfa Club in the past six months, or $100 if you have not made any payments to Surfa Club.'
  },
  {
    title:
      '6. Termination',
    description:
      '6.1 Surfa Club reserves the right to terminate or suspend your account or access to the Service at any time, without notice, for any reason or no reason. 6.2 Upon termination of your account, you lose access to the Service and any content you have posted on the Service may be deleted.'
  },
  {
    title:
      'Governing law',
    description:
      'These Terms and your use of the Service will be governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law.'
  },
  {
    title:
      'Dispute resolution',
    description:
      'Any disputes arising out of or in connection with the Service or these Terms will be resolved through binding arbitration in accordance with the American Arbitration Association\'s rules for consumer-related disputes. The arbitration will be conducted in Delaware.'
  },
  {
    title:
      'Miscellaneous',
    description:
      '9.1 Entire agreement. These Terms constitute the entire agreement between you and Surfa Club and supersede any prior agreements or understandings, whether oral or written. 9.2 Waiver. Surfa Club\'s failure to exercise or enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. 9.3 Severability. If any provision of these' 
      + ' Terms is found to be invalid or unenforceable, that provision will be enforced to the maximum extent possible and the remaining provisions will remain in full force and effect. 9.4 Assignment. You may not assign or transfer your rights or obligations under these Terms without the prior written consent of Surfa Club. Surfa Club may assign or transfer its rights or obligations under these Terms without your consent.'
  },
];

const PrivacySection = ({ title, description }) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
      <Typography component={'p'} color={'text.secondary'}>
        {description}
      </Typography>
    </Box>
  );
};

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Content = () => {
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={i < mock.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
