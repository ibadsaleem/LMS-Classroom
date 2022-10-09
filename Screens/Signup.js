import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  Alert
} from 'react-native';
import {
 GoogleSignin,
 GoogleSigninButton,
 statusCodes,
} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';




const Signup=() =>{
  const navigation = useNavigation();
  const [fname,setfname]=useState('');
  const [lname,setlname]=useState('');
  const [email,setemail]=useState('');
  const [phone,setphone]=useState('');
  const [password,setpassword]=useState('');
  const [cpassword,setcpassword]=useState('');
  
  let clearFields =()=>{
    setfname('');
    setlname('');
    setemail('');
    setphone('');
    setpassword('');
    setcpassword('');
  }
  let onClickRegister=()=>{
      //API CALL for submitting data
      
      clearFields();
  }
  return (
    <ScrollView  style={{width:'100%',height:'100%',backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
      
      <Image source={require("../media/FAST.png")} style={{marginTop:50,width:150,height:150,alignSelf:'center',marginBottom:10}} />
      <Text style={{fontSize:25,fontWeight:'400',alignSelf:'center',marginBottom:20,color:'black',textAlign:'center'}}>Welcome To Learning Management System (LMS)</Text>

      <View>

      <TextInput onChangeText={text=>setfname(text)} value={fname} style={{elevation:2,width:'80%',height:50,alignSelf:'center',padding:15,marginBottom:10,backgroundColor:'#EFEFEF',borderRadius:5}} placeholder="First Name"></TextInput>
      <TextInput onChangeText={text=>setlname(text)} value={lname} style={{elevation:2,width:'80%',height:50,alignSelf:'center',padding:15,marginBottom:10,backgroundColor:'#EFEFEF',borderRadius:5}} placeholder="Last Name"></TextInput>
      <TextInput onChangeText={text=>setemail(text)} keyboardType='email-address' value={email} style={{elevation:2,width:'80%',height:50,alignSelf:'center',padding:15,marginBottom:10,backgroundColor:'#EFEFEF',borderRadius:5}} placeholder="Email Address"></TextInput>
      <TextInput onChangeText={text=>setphone(text)} keyboardType='number-pad'  value={phone} style={{elevation:2,width:'80%',height:50,alignSelf:'center',padding:15,marginBottom:10,backgroundColor:'#EFEFEF',borderRadius:5}} placeholder="Phone"></TextInput>
      <TextInput onChangeText={text=>setpassword(text)} value={password} style={{elevation:2,width:'80%',height:50,alignSelf:'center',padding:15,marginBottom:10,backgroundColor:'#EFEFEF',borderRadius:5}}  secureTextEntry={true} placeholder="Password"></TextInput>
      <TextInput onChangeText={text=>setcpassword(text)} value={cpassword} style={{elevation:2,width:'80%',height:50,alignSelf:'center',padding:15,marginBottom:10,backgroundColor:'#EFEFEF',borderRadius:5}}  secureTextEntry={true} placeholder="Confirm Password"></TextInput>
      </View>
      
      <TouchableOpacity onPress={onClickRegister} style={{alignSelf:'center',width:'70%',height:50,elevation:2,backgroundColor:'#0099cc',justifyContent:'center',alignItems:'center',marginTop:20,marginBottom:20,borderRadius:5}}>
        <Text style={{color:'white',fontFamily:'Sans-Serif',fontWeight:'800',fontSize:18}} >Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("LOGIN")}}>
        <Text style={{color:'black',fontFamily:'Sans-Serif',fontWeight:'800',fontSize:12,textAlign:'center'}} >Already a Member? Login</Text>
      </TouchableOpacity>
    </ScrollView >
  );
};



export default Signup;
