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
       <View>
        <Text style={{justifyContent:'center',alignContent:'center',fontSize:30,fontWeight:'600',color:'black'}}>Asif Siddiqui</Text>
       </View>
       <View>
        <Image source={require("../media/UberEats.png")} style={{width:80,height:80,borderRadius:55}} />
       </View>
      </View>
      
      <View style={{flexDirection:'row',padding:20,width:'100%',alignContent:'center',justifyContent:'space-evenly'}}>
       <TouchableOpacity style={{backgroundColor:'#EFEFEF',width:120,height:120,marginRight:15,borderRadius:15}}>
        
       </TouchableOpacity>
       
       <TouchableOpacity style={{backgroundColor:'#EFEFEF',width:120,height:120,marginRight:15,borderRadius:15}}>
        
       </TouchableOpacity>
       
       <TouchableOpacity style={{backgroundColor:'#EFEFEF',width:120,height:120,borderRadius:15}}>
        
       </TouchableOpacity>
       
      </View>
      <View style={{flexDirection:'row',padding:10,width:'100%',alignContent:'center'}}>
       <TouchableOpacity style={{backgroundColor:'#EFEFEF',width:'100%',height:120,marginRight:15,borderRadius:15}}>
        
       </TouchableOpacity>
       
      </View>
        <View>
            <TouchableOpacity style={{padding:10,marginTop:20,width:'95%',justifyContent:'center',alignSelf:'center'}}>
                <Text style={{fontSize:25,color:'black',fontWeight:'600'}}>Promotions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10,marginTop:5,width:'95%',justifyContent:'center',alignSelf:'center'}}>
                <Text style={{fontSize:25,color:'black',fontWeight:'600'}}>Promotions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10,marginTop:5,width:'95%',justifyContent:'center',alignSelf:'center'}}>
                <Text style={{fontSize:25,color:'black',fontWeight:'600'}}>Promotions</Text>
            </TouchableOpacity>
        </View>

        
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
