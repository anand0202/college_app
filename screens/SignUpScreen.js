/* eslint-disable react-native/no-inline-styles */
//import liraries
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

// create a component
const SignUpScreen = ({setHasAccount}) => {
  const handleSubmit = () => {
    setHasAccount(true);
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required('Please, provide your name!'),
        email: yup.string().email().required(),
        password: yup
          .string()
          .min(4)
          .max(14, 'Password should not excced 10 chars.')
          .required(),
      })}>
      {({values, handleChange, errors, setFieldTouched, touched, isValid}) => (
        <Box bgColor={'#009be5'} py={'35%'}>
          <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
              <Heading
                size="xl"
                color="white"
                _dark={{
                  color: 'white',
                }}
                fontWeight="semibold">
                Welcome
              </Heading>
              <Heading
                mt="1"
                color="white"
                _dark={{
                  color: 'white',
                }}
                fontWeight="medium"
                size="xs">
                Sign up to continue!
              </Heading>
              <VStack space={3} mt="5">
                <FormControl color="white">
                  <FormControl.Label color="white">
                    {' '}
                    <Text style={{color: 'white'}}>Name</Text>
                  </FormControl.Label>
                  <Input
                    bgColor={'white'}
                    color={'black'}
                    placeholder={'Enter Name Here'}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={() => setFieldTouched('name')}
                  />
                  {touched.name && errors.name && (
                    <Text style={{fontSize: 12, color: '#FFf'}}>
                      {errors.name}
                    </Text>
                  )}
                </FormControl>
                <FormControl color="white">
                  <FormControl.Label>
                    {' '}
                    <Text style={{color: 'white'}}>Email</Text>
                  </FormControl.Label>
                  <Input
                    bgColor={'white'}
                    color={'black'}
                    placeholder={'Enter Email Here'}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                  />
                  {touched.email && errors.email && (
                    <Text style={{fontSize: 12, color: '#FFf'}}>
                      {errors.email}
                    </Text>
                  )}
                </FormControl>
                <FormControl>
                  <FormControl.Label>
                    <Text style={{color: 'white'}}>Password</Text>
                  </FormControl.Label>
                  <Input
                    type="password"
                    bgColor={'white'}
                    color={'black'}
                    placeholder={'Enter Password Here'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    secureTextEntry={true}
                  />
                  {touched.password && errors.password && (
                    <Text style={{fontSize: 12, color: '#FFf'}}>
                      {errors.password}
                    </Text>
                  )}
                </FormControl>
                <FormControl>
                  <FormControl.Label>
                    {' '}
                    <Text style={{color: 'white'}}>Confirm Password</Text>
                  </FormControl.Label>
                  <Input
                    type="password"
                    bgColor={'white'}
                    color={'black'}
                    placeholder={'Enter Password Here'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    secureTextEntry={true}
                  />
                </FormControl>
                {touched.password && errors.password && (
                  <Text style={{fontSize: 12, color: '#FFf'}}>
                    {errors.password}
                  </Text>
                )}
                <Button mt="2" bg="white" onPress={handleSubmit}>
                  <Text style={{color: '#009be5'}}>Sign up</Text>
                </Button>
              </VStack>
            </Box>
          </Center>
        </Box>
      )}
    </Formik>
  );
};

//make this component available to the app
export default SignUpScreen;
