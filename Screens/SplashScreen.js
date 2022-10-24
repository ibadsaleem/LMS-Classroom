import React, {useEffect, useState} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      CheckLogin();
    }, 2000);

    return () => clearTimeout();
  });
  const [c, setc] = useState(0);

  //Used this GetLearnFundamentalApi just for checking the unauthorization purpose only

  const GetUser = async () => {
    
    const jsonValue = await AsyncStorage.getItem('userinfo');
    let i = await fetch(
      'https://ipt-lms-1.herokuapp.com/api/user/Users',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
        },
      },
    )
      .then(response => response.json())
      .then( async json => {
       
        if (json.message === 'Unauthroized') {
          Alert.alert('Session Expired', 'Please Login Again');
          setc(1);
        } else {
          setc(0);
        }
      })
      .catch(error => {});
  };

  const CheckLogin = async () => {
    const LoginStatus = await AsyncStorage.getItem('loginStatus');
    const LoginMember = await AsyncStorage.getItem('loginMember');
    if (LoginStatus == 'true') {
     await  GetUser();
      await sleep(2000);
      if (c == 0) {
        navigation.navigate('CLASS');
      } else {
        if (LoginMember=='student')
        {navigation.navigate('LOGIN');}
        else if(LoginMember=='teacher'){
            {navigation.navigate('TEACHERLOGIN');}
        }
      }
    } else {
        if (LoginMember=='student')
        {navigation.navigate('LOGIN');}
        else if(LoginMember=='teacher'){
            {navigation.navigate('TEACHERLOGIN');}
        }
    }
  };
  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#fff'}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f1f4fb"
      />
      <View
        style={{height: '100%', width: '100%',backgroundColor:'#ffffff'}}
        // source={require('../media/BackGround.png')}
      />

      <View style={{height: '100%', width: '100%', position: 'absolute'}}>
        <View
          style={{
            height: '50%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Animatable.Image
            animation={'fadeInUpBig'}
            style={{height: 200, width: 400}}
            source={require('../media/FAST-NU.png')}
          />
        </View>
         <View
          style={{
            height: '50%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            
          }}>
          <Animatable.Image
            animation={'fadeInUpBig'}
            style={{height: 100, width: 100}}
            source={require('../media/FAST.png')}
          />
        </View> 

      </View>
    </View>
  );
};

export default SplashScreen;