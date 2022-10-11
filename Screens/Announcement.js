import React, { useEffect } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import AnnouncementCard from '../components/AnnoucmentCard';
import { useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Announcements = (props) => {
    const route = useRoute();
    const name  = route.params["name"];
    const teacherName  = route.params["teacherName"];
    return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <ScrollView
        style={{width: '100%', backgroundColor: '#ffffff'}}
        showsVerticalScrollIndicator={false}>
       <Header />
      <View
        style={{
          width: '100%',
          height: 150,
          padding: 10,
          justifyContent: 'center',
          backgroundColor: 'lightgrey',
          marginTop: 10,
        }}>
        <Text style={{color: '#000000', fontSize: 30}}>
          Class: {name}
        </Text>
        <Text style={{color: '#000000', fontSize: 20}}>{teacherName}</Text>
      </View>
      <View style={{width:'95%',alignSelf:'center',borderWidth: 0.8,
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            borderColor:'lightgrey',flexDirection:'row'}}>
          <View style={{width:'10%',marginRight:20}}>
          <Image
                source={require('../media/FAST.png')}
                style={{width: 45, height: 45, borderRadius: 55}}
              />
          </View>
        <View style={{width:'75%'}}>

        <TextInput placeholder='Share with your class' multiline={true}></TextInput>
            </View>
        <View style={{justifyContent:'center',alignContent:'flex-end'}}>
          <TouchableOpacity><MaterialCommunityIcons name='send-circle' size={30} color='blue'/></TouchableOpacity>
        </View>
      </View>
        <AnnouncementCard />
        <AnnouncementCard />
      </ScrollView>

      <BottomTab />
    </View>
  );
};

export default Announcements;
