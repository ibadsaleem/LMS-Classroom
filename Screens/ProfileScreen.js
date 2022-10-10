import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';



const Profile=() =>{


  return (
    <ScrollView  style={{width:'100%',height:'100%',backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
      <View style={{flexDirection:'row',padding:20,backgroundColor:'#ffffff',justifyContent:'space-between',alignItems:'center'}}>
       <View style={{width:'70%'}}>
        <Text style={{justifyContent:'center',alignContent:'center',fontSize:30,fontWeight:'600',color:'black'}}>K190146 - Ali Hamza Usmani</Text>
       </View>
       <View>
        <Image source={require("../media/FAST.png")} style={{width:80,height:80,borderRadius:55}} />
       </View>
      </View>
      
      <View style={{flexDirection:'row',padding:20,width:'100%',alignContent:'center',justifyContent:'space-evenly'}}>
       <TouchableOpacity style={{backgroundColor:'#EFEFEF',width:120,height:120,marginRight:15,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:45,color:'blue',fontWeight:'700'}}>96</Text>
        <Text style={{color:'blue'}}>Assigned</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={{backgroundColor:'#EFEFEF',width:120,height:120,marginRight:15,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:45,color:'red',fontWeight:'700'}}>500</Text>
        <Text style={{color:'red'}}>Missing</Text>
        
       </TouchableOpacity>
       
       <TouchableOpacity style={{backgroundColor:'#EFEFEF',width:120,height:120,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontSize:45,color:'green',fontWeight:'700'}}>0</Text>
        <Text style={{color:'green'}}>Done</Text>
       </TouchableOpacity>
       
      </View>
      {/* <View style={{flexDirection:'row',padding:10,width:'100%',alignContent:'center'}}>
       <TouchableOpacity style={{backgroundColor:'#EFEFEF',width:'100%',height:120,marginRight:15,borderRadius:15}}>
        
       </TouchableOpacity>
       
      </View> */}
        {/* <View>
            <TouchableOpacity style={{padding:10,marginTop:20,width:'95%',justifyContent:'center',alignSelf:'center'}}>
                <Text style={{fontSize:25,color:'black',fontWeight:'600'}}>Promotions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10,marginTop:5,width:'95%',justifyContent:'center',alignSelf:'center'}}>
                <Text style={{fontSize:25,color:'black',fontWeight:'600'}}>Promotions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10,marginTop:5,width:'95%',justifyContent:'center',alignSelf:'center'}}>
                <Text style={{fontSize:25,color:'black',fontWeight:'600'}}>Promotions</Text>
            </TouchableOpacity>
        </View> */}

        
           {/* <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'red'}}>

            <TouchableOpacity><Text>Home</Text></TouchableOpacity>
            <TouchableOpacity><Text>Home</Text></TouchableOpacity>
            <TouchableOpacity><Text>Home</Text></TouchableOpacity>
            <TouchableOpacity><Text>Home</Text></TouchableOpacity>
            <TouchableOpacity><Text>Home</Text></TouchableOpacity>
           </View> */}
    </ScrollView >
  );
};



export default Profile;
