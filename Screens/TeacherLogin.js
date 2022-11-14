import {React, useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  BackHandler,
  ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const TeacherLogin = ({navigation}) => {
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setLoading] = useState(false);
  let clearFields = () => {
    setusername('');
    setpassword('');
  };
  let onClickLogin = async() => {
    await AsyncStorage.setItem('loginStatus', '');
    await AsyncStorage.setItem('loginMember', '');
    setLoading(true);
    //API CALL for submitting data
    fetch('https://ipt-lms-1.herokuapp.com/api/teacher/Teacher/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(async data => {
        console.log(data);
        if (data['token']) {
          setLoading(false);
          const dataUser = JSON.stringify(data);
          await AsyncStorage.setItem('userinfo', dataUser);
          await AsyncStorage.setItem('loginStatus', 'true');
          await AsyncStorage.setItem('loginMember', 'teacher');
          clearFields();
          navigation.navigate('CLASS');
        } else if (data.m === 'Incorrect Username Or Password') {
          setLoading(false);
          Alert.alert('Sign In Failed', 'Incorrect Username Or Password');
        } else if (
          data.errors.Username == 'The Username field is required.' &&
          data.errors.Password == 'The Password field is required.'
        ) {
          setLoading(false);

          Alert.alert('Sign In Failed', 'Username and Password Required');
        } else {
          setLoading(false);

          Alert.alert('Sign In Failed', 'Something Went Wrong!');
        }
      })
      .catch(error => {
        setLoading(false);

        Alert.alert('Sign In Failed', 'Internet Connectivity Not Found');
      });
  };
  return (
    <ScrollView
      style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}
      showsVerticalScrollIndicator={false}>
      <Image
        source={require('../media/FAST.png')}
        style={{
          marginTop: 70,
          width: 150,
          height: 150,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: '400',
          alignSelf: 'center',
          marginBottom: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Welcome To Learning Management System (LMS)
      </Text>
      <View>
        <TextInput
          onChangeText={text => setusername(text)}
          keyboardType="username-address"
          value={username}
          style={{
            elevation: 2,
            width: '80%',
            height: 50,
            alignSelf: 'center',
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#EFEFEF',
            borderRadius: 5,
          }}
          placeholder="Teacher User Name eg: johndavid"></TextInput>
        <TextInput
          onChangeText={text => setpassword(text)}
          value={password}
          secureTextEntry={true}
          style={{
            elevation: 2,
            width: '80%',
            height: 50,
            alignSelf: 'center',
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#EFEFEF',
            borderRadius: 5,
          }}
          placeholder="Password"></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('FORGOTPASSWORD')}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              padding: 10,
              fontWeight: '600',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LOGIN')}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              padding: 10,
              fontWeight: '600',
            }}>
            Are you Student? Click Here
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={onClickLogin}
        style={{
          alignSelf: 'center',
          width: '70%',
          height: 50,
          elevation: 2,
          backgroundColor: '#0099cc',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 20,
          borderRadius: 5,
        }}>
        {loading ? (
          <ActivityIndicator size="large"  color="#ffffff" />
        ) : (
          <Text
            style={{
              color: 'white',
              fontFamily: 'Sans-Serif',
              fontWeight: '800',
              fontSize: 18,
            }}>
            Login
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TeacherLogin;
