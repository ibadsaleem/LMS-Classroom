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
import Header from '../components/Header';
const Classes=() =>{

  const navigation = useNavigation();

  return (
    <View style={{width:'100%',height:'100%'}}>
        <Header/>
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