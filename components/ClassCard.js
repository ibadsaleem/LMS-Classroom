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
import { titleCase } from 'title-case';

const ClassCard=(props) =>{
  const navigation = useNavigation();


  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ANNOUNCEMENTS",{name:props.name,teacherName:props.teacher,id:props.id,courseCode:props.courseCode})}  style={{borderRadius:15,width:'95%',height:270,backgroundColor:'#ffffff',marginTop:20,alignSelf:'center',elevation:8,marginBottom:10}}>
    <Image source={props.cover} style={{width:'100%',height:170,borderTopRightRadius:15,borderTopLeftRadius:15}} />
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <View style={{}}>
        <Text style={{fontSize:20,color:'black',fontWeight:'500'}}>{props.name}</Text>    
        <Text style={{fontSize:14,color:'black',fontWeight:'500'}}>{titleCase(props.teacher)}</Text>    
        <Text style={{fontSize:14,color:'black',fontWeight:'500'}}>{'Section: '+titleCase(props.section)}</Text>    
    </View>
    </View>
    </TouchableOpacity>
    
  );
};



export default ClassCard;
