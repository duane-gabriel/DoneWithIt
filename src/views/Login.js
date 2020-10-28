import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, AppForm, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function Login() {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon='email'
          name='email'
          placeholder='Email'
          autoCapitalize='none'
          autoCorrect={false}
          KeyboardType='email-address'
          textContentType='emailAddress'
        />

        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});