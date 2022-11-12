import React,{useEffect, useState} from 'react';
import {Text, TouchableOpacity, View,BackHandler,ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
const AddNewClass = () => {
  const [className,setclassName]=useState('');
  const [classSection,setclassSection]=useState('');
  const [Loading,setLoading]=useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  })
  const createClass = async () => {
    setLoading(true);
      let jsonValue = await AsyncStorage.getItem('userinfo');
      let loginMember = await AsyncStorage.getItem('loginMember');
      fetch(
        `https://ipt-lms-1.herokuapp.com/api/teacher/Teacher/class/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
          },
          body: JSON.stringify({
            section: classSection,
            courseID: className,
            startDate: moment().format('YYYY-MM-DD').toString(),
          }),
        },
      )
        .then(response => response.json())
        .then(json => {
          setLoading(false);
          alert('Class Created Successfully');
          navigation.navigate('CLASS');
          console.log(json);
        });
    };
  return (
    <View style={{backgroundColor: '#ffffff', height: '100%', width: '100%'}}>
      <Header title='Add New Class' hidden={false} />
      <View style={{marginTop: 200, height: '60%'}}>
        <TextInput
          onChangeText={(text)=>setclassName(text)}
          keyboardType="default"
          style={{
            elevation: 2,
            width: '80%',
            height: 50,
            alignSelf: 'center',
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#EFEFEF',
            borderRadius: 15,
          }}
          placeholder="Enter Class Name"></TextInput>
        <TextInput
          onChangeText={(text)=>setclassSection(text)}
          keyboardType="default"
          style={{
            elevation: 2,
            width: '80%',
            height: 50,
            alignSelf: 'center',
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#EFEFEF',
            borderRadius: 15,
          }}
          placeholder="Enter Class Section"></TextInput>
      <TouchableOpacity
          onPress={() => {
            createClass();
          }}
          style={{
            width: 180,
            height: 50,
            borderRadius: 20,
            backgroundColor: '#0099cc',
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>

          {Loading?<ActivityIndicator size={30} color='white'/>:<Text style={{color: '#ffffff', fontSize: 18, fontWeight: '500'}}>
            Create New Class
          </Text>}
        </TouchableOpacity>
     
      </View>
      <BottomTab />
    </View>
  );
};

export default AddNewClass;
