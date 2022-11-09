import {React,useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  BackHandler,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTab from '../components/BottomTab';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { titleCase } from 'title-case';
const TeacherProfile = () => {
  const [name,setName]=useState('')
  const [id,setID]=useState('')
  const navigation = useNavigation();
  let jsonValue={};
  useEffect(() => {
    func();
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
  const logout= async ()=>{
    navigation.navigate("LOGIN");
    await AsyncStorage.setItem('loginStatus', 'false');
  }
  const func = async ()=>{
   jsonValue = await AsyncStorage.getItem('userinfo');
   console.log(jsonValue)
   setID(JSON.parse(jsonValue).id);
   setName(JSON.parse(jsonValue).name);
    
  }
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          backgroundColor: '#ffffff',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: '70%'}}>
          <Text
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: 30,
              fontWeight: '600',
              color: 'black',
            }}>
            {id} - {titleCase(name)}
          </Text>
        </View>
        <View>
          <Image
            source={require('../media/FAST.png')}
            style={{width: 80, height: 80, borderRadius: 55}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          width: '100%',
          alignContent: 'center',
          justifyContent: 'space-evenly',
        }}>
        {/* <TouchableOpacity
          style={{
            backgroundColor: '#EFEFEF',
            width: 120,
            height: 120,
            marginRight: 15,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: 'blue', fontWeight: '600'}}>
           06
          </Text>
          <Text style={{color: 'blue',fontWeight: '500'}}>Assignments</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          style={{
            backgroundColor: '#EFEFEF',
            width: 120,
            height: 120,
            marginRight: 15,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: 'red', fontWeight: '600'}}>
            12
          </Text>
          <Text style={{color: 'red',fontWeight: '500'}}>Class Owner</Text>
        </TouchableOpacity> */}

    
      </View>
          <TouchableOpacity onPress={logout} style={{borderRadius:40,width:'95%',height:50,backgroundColor:'#EFEFEF',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:20,color:'black',fontWeight:'600'}}><MaterialCommunityIcons name='logout' style={{fontWeight:'600'}} size={25}/>{' '}Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("CHANGEPASSWORD")} style={{borderRadius:40,width:'95%',height:50,marginTop:20,backgroundColor:'#EFEFEF',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:20,color:'black',fontWeight:'600'}}><MaterialCommunityIcons name='lock' style={{fontWeight:'600'}} size={25}/>{' '}Update Password</Text>
          </TouchableOpacity>
      <ScrollView>
        

        <TouchableOpacity
          style={{
              padding: 10,
              marginTop: 20,
              width: '95%',
              justifyContent: 'center',
              alignSelf: 'center',
           
            }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
            Assignment 1
          </Text>
          <Text style={{fontSize: 10, color: 'violet', fontWeight: '600'}}>
            Class: IPT-7G
          </Text>
          <Text style={{fontSize: 10, color: 'red', fontWeight: '600'}}>
            Deadline: 28-Oct-2022
          </Text>
        </TouchableOpacity>
        
        
      
      </ScrollView>

      <BottomTab />
    </View>
  );
};

export default TeacherProfile;
