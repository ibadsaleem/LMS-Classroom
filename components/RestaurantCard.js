import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';



const RestaurantCard=() =>{


  return (
    <TouchableOpacity style={{width:'95%',height:250,backgroundColor:'#ffffff',marginTop:20,alignSelf:'center',elevation:6,marginBottom:20}}>
    <Image source={require("../media/UberEats.png")} style={{width:'100%',height:'70%'}} />
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <View style={{}}>
        <Text style={{fontSize:25,color:'black'}}>McDonalds</Text>    
        <Text style={{fontSize:12,color:'black'}}>Delivery Fees: Rs 50</Text>    
    </View>
    <View>
        <Text style={{fontSize:12,color:'black'}}>25 min - 40 min</Text>    
    </View>
    </View>
    </TouchableOpacity>
    
  );
};



export default RestaurantCard;
