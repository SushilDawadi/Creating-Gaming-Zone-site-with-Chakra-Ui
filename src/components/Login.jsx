import {
  Container,
  Heading,
  Input,
  VStack,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={8}
          w={['full', '96']}
          margin={'auto'}
          my={16}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder="Email"
            type="Email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple.500"
          />
          <Button colorScheme="purple" variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>forget Password?</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            {' '}
            Login
          </Button>
          <Text textAlign={'right'}>
            New user?{' '}
            <Button colorScheme="purple" variant={'link'} mx={1}>
              <Link to={'/signup'}>SignUp</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
