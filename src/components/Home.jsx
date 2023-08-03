import { Box, Container, Heading, Stack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MyCarousel from './MyCarousel';
import img6 from '../assets/services.jpg';
const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxWidth={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
          //direction column for small screens and row for larger screens (responsive)
        >
          <Image
            src={img6}
            borderTopLeftRadius={['50', '100']}
            borderBottomRightRadius={['50', '100']}
            w={500}
            m={'auto'}
            filter={'hue-rotate(-130deg)'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'150%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Welcome to our Gaming Services Hub! Whether you're a casual gamer or
            a seasoned pro, we've got you covered with a wide range of random
            services tailored to enhance your gaming experience. Our offerings
            include in-game coaching to improve your skills, character
            customization for creating the ultimate avatar, and quest assistance
            to overcome challenges. Feel lucky with our loot box opening party,
            or get a professional Twitch stream overlay design if you're a
            content creator. Spice up your gaming experience with custom game
            mods or get assistance with tournament registrations. Discover game
            secrets with our walkthroughs, and explore new gaming environments
            with custom maps. Get expert recommendations on gaming gear, achieve
            100% completion with our help, and manage your clan/guild
            successfully. We'll even find rare gaming merchandise and assist
            with VR setup to immerse you in virtual worlds. Experience optimized
            gaming performance through our technical support. Embrace the
            excitement of gaming with our diverse services!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
