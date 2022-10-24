import {React,useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTab from '../components/BottomTab';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [name,setName]=useState('')
  const [id,setID]=useState('')
  const navigation = useNavigation();
  let jsonValue={};
  useEffect(() => {
   func();
  })
  const logout= async ()=>{
    navigation.navigate("LOGIN");
    await AsyncStorage.setItem('loginStatus', 'false');
  }
  const func = async ()=>{
   jsonValue = await AsyncStorage.getItem('userinfo');
   setID(JSON.parse(jsonValue).id);
   setName(JSON.parse(jsonValue).firstName + ' ' + JSON.parse(jsonValue).lastName);
    
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
            {id} - {name}
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
        <TouchableOpacity
          style={{
            backgroundColor: '#EFEFEF',
            width: 120,
            height: 120,
            marginRight: 15,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: 'blue', fontWeight: '700'}}>
            96
          </Text>
          <Text style={{color: 'blue'}}>Assigned</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#EFEFEF',
            width: 120,
            height: 120,
            marginRight: 15,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: 'red', fontWeight: '700'}}>
            500
          </Text>
          <Text style={{color: 'red'}}>Missing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#EFEFEF',
            width: 120,
            height: 120,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: 'green', fontWeight: '700'}}>
            0
          </Text>
          <Text style={{color: 'green'}}>Done</Text>
        </TouchableOpacity>
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
            borderBottomWidth:0.8,
            borderBottomColor:'lightgrey'
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
            Assignment 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            marginTop: 5,
            width: '95%',
            justifyContent: 'center',
            alignSelf: 'center',
            borderBottomWidth:0.8,
            borderBottomColor:'lightgrey'
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
            Assignment 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            marginTop: 5,
            width: '95%',
            justifyContent: 'center',
            alignSelf: 'center',
            borderBottomWidth:0.8,
            borderBottomColor:'lightgrey'
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
            Assignment 3
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomTab />
    </View>
  );
};

export default Profile;
