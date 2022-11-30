import {React, useEffect, useState} from 'react';
import {
  ScrollView,
  RefreshControl,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
  BackHandler,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import ClassCard from '../components/ClassCard';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Classes = () => {
  const route = useRoute();
  const [courses, setCourses] = useState([]);
  const [Loading,setLoading]=useState(true);
  const [refreshing,setRefreshing]=useState(false);
  const [flag,setFlag]=useState(0);
  const [LoginMember,setLoginMember]=useState(0);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = () => {
    setRefreshing(true);
    classesEnrolled();
  }
  
  const isFocused = useIsFocused();
  useEffect(() => {
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
      
      return () => {backHandler.remove()};
    

  })
  useEffect(() => {
    
      classesEnrolled();
  },[isFocused]);


  const navigation = useNavigation();
  const classesEnrolled = async () => {
    setLoading(true);
    // 
    let loginMember = await AsyncStorage.getItem('loginMember');
    setLoginMember(loginMember=='student'?0:1);
    let api = loginMember=='student'?'https://learningmanagementsystem-ipt.azurewebsites.net/api/user/Users/classes':'https://learningmanagementsystem-ipt.azurewebsites.net/api/teacher/Teacher/classes'
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
        // 
        if (json.message === 'Unauthroized'|| json.message === 'Forbidden Access') {
          setRefreshing(false);
          AsyncStorage.setItem('loginStatus', 'false');
          navigation.navigate('LOGIN');
        }else{
          setCourses(json);
          setRefreshing(false);
          setLoading(false);
        }
      })
      
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Header title="Classes" hidden={true} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={{width: '100%', backgroundColor: '#ffffff'}}
        showsVerticalScrollIndicator={false}>
        {Loading ?
         <View>
            <ActivityIndicator
              size="large"
              color="black"
              style={{marginTop: 200}}
            />
            <Text style={{textAlign: 'center', color: 'black',fontWeight:'600',fontSize:15}}>
              Loading Classes...
            </Text>
          </View> : courses.map((item, index) => {
          return (
            <ClassCard
              key={index}
              name={item.course.courseName}
              section={item.section}
              teacher={item.instructor.name}
              cover={require('../media/IS.jpg')}
              id={item.id}
              courseCode={item.classCode}
            />
          );
        })}
      </ScrollView>

      <BottomTab />
    </View>
  );
};

export default Classes;
