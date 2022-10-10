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


const ClassCard=(props) =>{
  const navigation = useNavigation();


  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ANNOUNCEMENTS",{name:props.name,teacherName:props.teacher})}  style={{borderRadius:15,width:'95%',height:250,backgroundColor:'#ffffff',marginTop:20,alignSelf:'center',elevation:8,marginBottom:10}}>
    <Image source={props.cover} style={{width:'100%',height:170,borderTopRightRadius:15,borderTopLeftRadius:15}} />
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <View style={{}}>
        <Text style={{fontSize:25,color:'black',fontWeight:'500'}}>{props.name}</Text>    
        <Text style={{fontSize:14,color:'black'}}>{props.teacher}</Text>    
    </View>
    </View>
    </TouchableOpacity>
    
  );
};



export default ClassCard;
