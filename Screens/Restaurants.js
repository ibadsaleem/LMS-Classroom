import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

import RestaurantCard from '../components/RestaurantCard';
import BottomTab from '../components/BottomTab';
const Restaurant=() =>{


  return (
    <View style={{width:'100%',height:'100%'}}>
        <View style={{width:'100%',height:70,backgroundColor:'#ffffff',marginBottom:2,borderBottomWidth:1,borderBottomColor:'lightgrey',elevation:2}}>
        <Text style={{fontSize:32,textAlign:'center',fontWeight:'700',padding:10,color:'black'}}>Home</Text>
        </View>
    <ScrollView  style={{width:'100%',backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </ScrollView >
    <BottomTab />
    </View>
  );
};



export default Restaurant;
