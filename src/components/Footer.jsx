import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={4}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to Get Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here.."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0px 20px 20px 0px'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={'center'}
            mt={2}
          >
            GAMING ZONE
          </Heading>
          <Text>All right reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md '} textTransform={'uppercase'} mt={2}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="https://www.facebook.com/sushilwarrior">
              Facebook
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="https://www.instagram.com/sushildwd/">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="https://github.com/SushilDawadi">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
