import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img2 from '../assets/cyberpunk.jpg';
import img1 from '../assets/valorant.jpg';
import img3 from '../assets/pubg.jpg';
import img4 from '../assets/rainbow.jpg';
import img5 from '../assets/mincraft.jpg';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '[0%,25%]',
  transfrom: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Eat. Sleep. Game. Repeat.
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Keep calm and game on.
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Game brings people together
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
          life is a game play to win
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img5} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Gamers Don't Die <br />
          They Respawn
        </Heading>
      </Box>
    </Carousel>
  );
};

export default MyCarousel;
