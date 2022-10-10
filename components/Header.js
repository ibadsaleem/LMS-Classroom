import React from 'react';
import {
  Text,
  View
} from 'react-native';
const Header=() =>{


  return (
        <View style={{width:'100%',height:70,backgroundColor:'#ffffff',marginBottom:2,borderBottomWidth:1,borderBottomColor:'lightgrey',elevation:2,justifyContent:'center'}}>
        <Text style={{fontSize:25,fontWeight:'700',padding:10,color:'black'}}>Learning Management System</Text>
        </View>
   
  );
};



export default Header;