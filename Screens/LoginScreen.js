 import {React,useState} from 'react';
 import {
   ScrollView,
   Text,
   Image,
   TouchableOpacity,
   View,
   TextInput
 } from 'react-native';
 import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';




const Login=({navigation}) =>{
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  let clearFields=()=>{
    setemail('');
    setpassword('');
  }
  let onClickLogin=()=>{
      
      //API CALL for submitting data
      console.log(email,password);
      navigation.navigate('CLASS');
      clearFields();
    }
   return (
     <ScrollView  style={{width:'100%',height:'100%',backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
       
       <Image source={require("../media/FAST.png")} style={{marginTop:70,width:150,height:150,alignSelf:'center',marginBottom:30}} />
        <Text style={{fontSize:25,fontWeight:'400',alignSelf:'center',marginBottom:30,color:'black',textAlign:'center'}}>Welcome To Learning Management System (LMS)</Text>
       <View>
 
       <TextInput onChangeText={(text)=>setemail(text)} keyboardType='email-address' value={email} style={{elevation:2,width:'80%',height:50,alignSelf:'center',padding:15,marginBottom:10,backgroundColor:'#EFEFEF',borderRadius:5}} placeholder="Email Address or Phone"></TextInput>
       <TextInput onChangeText={(text)=>setpassword(text)} value={password} secureTextEntry={true} style={{elevation:2,width:'80%',height:50,alignSelf:'center',padding:15,marginBottom:10,backgroundColor:'#EFEFEF',borderRadius:5}} placeholder="Password"></TextInput>
      <TouchableOpacity>
       <Text style={{color:'black',alignSelf:'center',padding:10,fontWeight:'600'}}>Forgot Password?</Text>
      </TouchableOpacity>
       </View>
       
       <TouchableOpacity onPress={onClickLogin} style={{alignSelf:'center',width:'70%',height:50,elevation:2,backgroundColor:'#0099cc',justifyContent:'center',alignItems:'center',marginTop:20,marginBottom:20,borderRadius:5}}>
         <Text style={{color:'white',fontFamily:'Sans-Serif',fontWeight:'800',fontSize:18}}>Login</Text>
       </TouchableOpacity>
     
 
      
     </ScrollView >
   );
 };
 
 
 
 export default Login;
 