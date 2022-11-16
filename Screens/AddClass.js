import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import BottomTab from '../components/BottomTab';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddClass = () => {
  const navigation = useNavigation();
  const [loading, setloading] = useState(false);
  const [classCode, setclassCode] = useState('');

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      backHandler.remove();
    };
  });

  const enrollClass = async () => {
    setloading(true);
    if (classCode == '') {
      Alert.alert('Important', 'Please enter class code');
      setloading(false);
      return;
    }

    let jsonValue = await AsyncStorage.getItem('userinfo');
    let loginMember = await AsyncStorage.getItem('loginMember');
    fetch(
      `https://ipt-lms-1.herokuapp.com/api/user/Users/add/class/${classCode}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        if (json.m == 'Duplicate Entry. Already enrolled!') {
          setclassCode('');
          Alert.alert('Important', json.m);
        } else if (
          json.m == 'Object reference not set to an instance of an object.'
        ) {
          setclassCode('');

          Alert.alert('Important', 'Class Code is not valid!');
        } else {
          setclassCode('');

          Alert.alert('Important', 'Class Enrolled!');
        }
        setloading(false);
      });
  };

  return (
    <View style={{backgroundColor: '#ffffff', height: '100%', width: '100%'}}>
      <Header title="Add Class" />
      <View style={{marginTop: 200, height: '60%'}}>
        <TextInput
          onChangeText={text => setclassCode(text)}
          value={classCode}
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
          placeholder="Enter Class Code"></TextInput>
        <TouchableOpacity
          onPress={enrollClass}
          style={{
            width: 100,
            height: 50,
            borderRadius: 20,
            backgroundColor: '#0099cc',
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {loading ? (
            <ActivityIndicator size={30} color="white" />
          ) : (
            <Text style={{color: '#ffffff', fontSize: 18, fontWeight: '500'}}>
              Submit
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <BottomTab />
    </View>
  );
};

export default AddClass;
