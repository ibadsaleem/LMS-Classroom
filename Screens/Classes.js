import {React, useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
  BackHandler,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ClassCard from '../components/ClassCard';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Classes = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    classesEnrolled();
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);
  const navigation = useNavigation();
  const classesEnrolled = async () => {
    let loginMember = await AsyncStorage.getItem('loginMember');
    let api = loginMember=='student'?'https://ipt-lms-1.herokuapp.com/api/user/Users/classes':'https://ipt-lms-1.herokuapp.com/api/teacher/Teacher/classes'
    let jsonValue = await AsyncStorage.getItem('userinfo');
    fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
      },
    })
      .then(response => response.json())
      .then(async json => {
        if (json.message === 'Unauthroized') {
          navigation.navigate('LOGIN');
          AsyncStorage.setItem('loginStatus', 'false');
        }else{

          setCourses(json);
        }
      })
      
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Header title="Enrolled Classes" hidden={true} />
      <ScrollView
        style={{width: '100%', backgroundColor: '#ffffff'}}
        showsVerticalScrollIndicator={false}>
        {courses.map((item, index) => {
          return (
            <ClassCard
              key={index}
              name={item.course.courseName + ' ' + item.section}
              teacher={item.instructor.name}
              cover={require('../media/IS.jpg')}
              id={item.id}
            />
          );
        })}
      </ScrollView>

      <BottomTab />
    </View>
  );
};

export default Classes;
