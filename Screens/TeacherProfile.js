import {React,useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  BackHandler,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTab from '../components/BottomTab';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { titleCase } from 'title-case';
import moment from 'moment';
const TeacherProfile = () => {
  const month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const [Loading, setLoading] = useState(true);
  const [name,setName]=useState('')
  const [id,setID]=useState('')
  const [assignments,setAssignments]=useState([])
  const navigation = useNavigation();
  let jsonValue={};
  const isFocused = useIsFocused();
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
      );
      
      return () => {backHandler.remove()};
    

  })
  useEffect(() => {
    func();
    getAllAssignments();
    // const backAction = () => {
    //   navigation.goBack();
    //   return true;
    // };

    // const backHandler = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   backAction,
    // );
    // return () => backHandler.remove();
  },[isFocused])

  const getAllAssignments = async () => {
    let jsonValue=await AsyncStorage.getItem('userinfo');
    fetch(
      `https://ipt-lms-1.herokuapp.com/api/teacher/Teacher/announcements/all`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
        },
      },
    )
      .then(response => response.json())
      .then(json => {
       
        setAssignments(json);
        setLoading(false);
        // 
      });
  };
  const logout= async ()=>{
    navigation.navigate("LOGIN");
    await AsyncStorage.setItem('loginStatus', 'false');
    await AsyncStorage.setItem('loginMember', '');
  }
  const func = async ()=>{
   jsonValue = await AsyncStorage.getItem('userinfo');
   
   setID(JSON.parse(jsonValue).id);
   setName(titleCase(JSON.parse(jsonValue).name));
    
  }
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          backgroundColor: '#ffffff',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: '70%'}}>
          <Text
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: 30,
              fontWeight: '600',
              color: 'black',
            }}>
            {id} - {name}
          </Text>
        </View>
        <View>
          <Image
            source={require('../media/FAST.png')}
            style={{width: 80, height: 80, borderRadius: 55}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          width: '100%',
          alignContent: 'center',
          justifyContent: 'space-evenly',
        }}>
        {/* <TouchableOpacity
          style={{
            backgroundColor: '#EFEFEF',
            width: 120,
            height: 120,
            marginRight: 15,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: 'blue', fontWeight: '600'}}>
           06
          </Text>
          <Text style={{color: 'blue',fontWeight: '500'}}>Assignments</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          style={{
            backgroundColor: '#EFEFEF',
            width: 120,
            height: 120,
            marginRight: 15,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: 'red', fontWeight: '600'}}>
            12
          </Text>
          <Text style={{color: 'red',fontWeight: '500'}}>Class Owner</Text>
        </TouchableOpacity> */}

    
      </View>
          <TouchableOpacity onPress={logout} style={{borderRadius:40,width:'95%',height:50,backgroundColor:'#EFEFEF',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:20,color:'black',fontWeight:'600'}}><MaterialCommunityIcons name='logout' style={{fontWeight:'600'}} size={25}/>{' '}Logout</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>navigation.navigate("CHANGEPASSWORD")} style={{borderRadius:40,width:'95%',height:50,marginTop:20,backgroundColor:'#EFEFEF',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:20,color:'black',fontWeight:'600'}}><MaterialCommunityIcons name='lock' style={{fontWeight:'600'}} size={25}/>{' '}Update Password</Text>
          </TouchableOpacity> */}
      <View style={{
                padding: 10,
                marginTop: 20,
                width: '95%',
                justifyContent: 'center',
                alignSelf: 'center',
             
              }}>
        <Text style={{fontSize:25,color:'black',fontWeight:'700'}}>Assignments</Text>
      </View>
      <View style={{flexDirection:'row'}}>

      <View style={{width:100,height:4,marginLeft:20,backgroundColor:'black'}}></View>
              <View style={{width:4,height:4,backgroundColor:'black',marginLeft:5,borderRadius:50}}></View>
      </View>
      <ScrollView>
        

     {Loading?
     <View style={{justifyContent:'center',marginTop:100}}>

     <ActivityIndicator size={40} color="black"/>
     <Text style={{textAlign:'center',color:'black',fontWeight:'700',marginTop:5}}>Loading Assignments...</Text>
     </View>:
        assignments.map((item,index)=>{
          return(
            <TouchableOpacity
            key={index}
            style={{
                padding: 10,
                paddingBottom:0,
                marginTop: 10,
                width: '95%',
                justifyContent: 'center',
                alignSelf: 'center',
             
              }}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
              {titleCase(item.title)}
            </Text>
            <Text style={{fontSize: 10, color: 'violet', fontWeight: '600'}}>
              Class: {titleCase(item.class.course.courseName + '-' + item.class.section)}
            </Text>
            <Text style={{fontSize: 10, color: 'red', fontWeight: '600',marginBottom:10}}>
              Deadline: {moment(item.dueDate).format('DD-MM-YYYY hh:mm A')}
            </Text>
            <View style={{borderBottomWidth:0.5,width:'50%',borderColor:'black'}}></View>
          </TouchableOpacity>
          );
        })
     }
        
        
      
      </ScrollView>

      <BottomTab />
    </View>
  );
};

export default TeacherProfile;
