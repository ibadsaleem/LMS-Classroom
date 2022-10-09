import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import RestaurantCard from '../components/RestaurantCard';
import BottomTab from '../components/BottomTab';
import CategoryCard from '../components/CategoryCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Category=() =>{


  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#ffffff'}}>
        <View style={{width:'100%',height:80,backgroundColor:'#ffffff',marginBottom:2,padding:10}}>

            <TextInput style={{backgroundColor:'lightgrey',borderRadius:30,padding:10,height:55}} placeholder='Food, groceries, drinks, etc'></TextInput>
        </View>
        <Text style={{fontSize:25,fontWeight:'500',color:'black',marginLeft:20,marginBottom:10}}>Top categories</Text>
    <ScrollView  style={{width:'100%',backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            
    </ScrollView >
    <BottomTab/>
    </View>
  );
};



export default Category;
