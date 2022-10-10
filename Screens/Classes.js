import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ClassCard from '../components/ClassCard';
import BottomTab from '../components/BottomTab';
const Classes=() =>{

  const navigation = useNavigation();

  return (
    <View style={{width:'100%',height:'100%'}}>
        <View style={{width:'100%',height:70,backgroundColor:'#ffffff',marginBottom:2,borderBottomWidth:1,borderBottomColor:'lightgrey',elevation:2,justifyContent:'center'}}>
        <Text style={{fontSize:25,fontWeight:'700',padding:10,color:'black'}}>Learning Management System</Text>
        </View>
    <ScrollView  style={{width:'100%',backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
        <ClassCard name="Information Security" teacher="Dr.Nadeem Kafi" cover={require("../media/IS.jpg")}/>
        <ClassCard name="Information Security" teacher="Dr.Nadeem Kafi" cover={require("../media/IS.jpg")}/>
        <ClassCard name="Information Security" teacher="Dr.Nadeem Kafi" cover={require("../media/IS.jpg")}/>
        <ClassCard name="Information Security" teacher="Dr.Nadeem Kafi" cover={require("../media/IS.jpg")}/>
      
    </ScrollView >
    
    <BottomTab />
    </View>
  );
};



export default Classes;