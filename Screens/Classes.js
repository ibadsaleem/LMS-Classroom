import {React,useEffect} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
  BackHandler,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ClassCard from '../components/ClassCard';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
const Classes=() =>{
  
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);
  const navigation = useNavigation();

  return (
    <View style={{width:'100%',height:'100%'}}>
        <Header title="Enrolled Classes" hidden={true}/>
    <ScrollView  style={{width:'100%',backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
        <ClassCard name="Information Security" teacher="Dr.Nadeem Kafi" cover={require("../media/IS.jpg")}/>
        <ClassCard name="Information Security" teacher="Dr.Nadeem Kafi" cover={require("../media/IS.jpg")}/>
        <ClassCard name="Information Security" teacher="Dr.Nadeem Kafi" cover={require("../media/IS.jpg")}/>
        <ClassCard name="Information Security" teacher="Dr.Nadeem Kafi" cover={require("../media/IS.jpg")}/>
      
    </ScrollView >
    
    <BottomTab/>
    </View>
  );
};



export default Classes;