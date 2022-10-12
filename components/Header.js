import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Header=() =>{
  const navigation = useNavigation();


  return (
        <View style={{flexDirection:'row',width:'100%',height:70,padding:10,backgroundColor:'#ffffff',marginBottom:2,borderBottomWidth:1,borderBottomColor:'lightgrey',elevation:2}}>
        <TouchableOpacity style={{justifyContent:'center',alignSelf:'center',height:50}} onPress={()=>{navigation.goBack()}}>
        <AntDesign name="arrowleft" size={25} color='black'/>
        </TouchableOpacity>
        <View style={{justifyContent:'center',width:'80%',marginLeft:10,height:50}}>
        <Text style={{fontSize:20,fontWeight:'700',padding:10,color:'black'}}>
          Learning Management System
          </Text>
        </View>
        </View>
   
  );
};



export default Header;