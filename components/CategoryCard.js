import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

import RestaurantCard from './ClassCard';
import BottomTab from '../components/BottomTab';
const CategoryCard=() =>{


  return (
        
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10,marginBottom:10}}>
                <TouchableOpacity style={{width:170,height:150,borderRadius:15,borderWidth:1}}>
                <Image source={require("../media/UberEats.png")} style={{width:'100%',height:'60%',borderTopRightRadius:10,borderTopLeftRadius:10}} />
                <Text style={{fontSize:20,textAlign:'center',fontWeight:'600',color:'black'}}>Breakfast and Brunch</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{width:170,height:150,borderRadius:15,borderWidth:1}}>
                <Image source={require("../media/UberEats.png")} style={{width:'100%',height:'60%',borderTopRightRadius:10,borderTopLeftRadius:10}} />
                <Text style={{fontSize:20,textAlign:'center',fontWeight:'600',color:'black'}}>Breakfast and Brunch</Text>
                </TouchableOpacity>
                
                
            </View>
  );
};



export default CategoryCard;
