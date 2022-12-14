import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BottomTab(props) {
  const [homeColor, setHomeColor] = useState('#000000');
  const [loginMember, setLoginMember] = useState(null);
  const [addColor, setaddColor] = useState('#000000');
  const [userColor, setuserColor] = useState('#000000');
  const navigation = useNavigation();
  useEffect(() => {
    func();
  });
  const func = async () => {
    const loginMember= await AsyncStorage.getItem('loginMember');
    setLoginMember(loginMember);
  }

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        borderTopWidth: 1,
        elevation: 4,
        borderColor: 'lightgrey',
      }}>
      <TouchableOpacity
        style={{marginRight: 40, justifyContent: 'center', width: 40}}
        onPress={() => {
         
          navigation.navigate('CLASS');
        }}>
        <Feather
          name="home"
          size={27}
          color={homeColor}
          style={{alignSelf: 'center'}}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 10,
            fontWeight: '700',
          }}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async() => {
          let loginMember1= await AsyncStorage.getItem('loginMember');
          
          loginMember1=='student'?navigation.navigate('STUDENTCLASS'):navigation.navigate('ADDNEWCLASS');
        }}
        style={{marginRight: 40, justifyContent: 'center', width: 40}}>
        <Feather
          name="plus"
          size={30}
          color={addColor}
          style={{alignSelf: 'center'}}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 10,
            fontWeight: '700',
          }}>
          Add
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
        
          
            loginMember=='teacher'? navigation.navigate('TEACHERPROFILE'):navigation.navigate('PROFILE');
          

      }}
      style={{justifyContent: 'center', width: 40}}>
        <MaterialCommunityIcons
          name="account"
          size={30}
          color={userColor}
          style={{alignSelf: 'center'}}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 10,
            fontWeight: '700',
          }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}
