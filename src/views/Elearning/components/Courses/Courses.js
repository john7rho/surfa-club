import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  region: 'us-east-1',
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const Spaces = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      dynamoDb.scan({ TableName: 'users' }, (err, data) => {
        if (err) {
          console.error(
            'Unable to scan table. Error JSON:',
            JSON.stringify(err, null, 2),
          );
        } else {
          setItems(data.Items);
        }
      });
    };
    fetchItems();
  }, []);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      {/*...*/}
      <Box maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={'0 auto'}>
        <Slider {...sliderOpts}>
          {items.map((item, i) => (
            <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{ backgroundImage: 'none' }}
                >
                  <CardMedia
                    title={item.firstName}
                    image={item.image}
                    sx={{
                      position: 'relative',
                      height: { xs: 240, sm: 340, md: 280 },
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component={'svg'}
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1921 273"
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    ></Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      position={'absolute'}
                      bottom={0}
                      padding={2}
                      width={1}
                      zIndex={2}
                    >
                      <Box
                        padding={1}
                        bgcolor={'background.paper'}
                        boxShadow={1}
                        borderRadius={2}
                      >
                        <Typography sx={{ fontWeight: 600 }}>
                          {item.school}
                        </Typography>
                      </Box>
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      align={'left'}
                      sx={{ fontWeight: 700 }}
                    >
                      {item.firstName}
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} marginY={2}>
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                        marginRight={1}
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </Box>
                      <Typography variant={'subtitle1'} color="text.secondary">
                        {item.bio}
                      </Typography>
                    </Box>
                    <Box
                      marginTop={2}
                      display={'flex'}
                      justifyContent={'space-between'}
                    >
                      {/* <AvatarGroup max={4}>
                        {item.users.map((u) => (
                          <Avatar key={u} src={u} />
                        ))}
                      </AvatarGroup> */}
                      <Box display={'flex'} alignItems={'center'}>
                        <Box
                          component={'svg'}
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          color={colors.yellow[700]}
                          marginRight={1}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </Box>
                        <Typography sx={{ fontWeight: 700 }}>5.0</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <Box flexGrow={1} />
                  {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button>Learn more</Button>
                  </CardActions> */}
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Spaces;
