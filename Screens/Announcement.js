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
        <AnnouncementCard />
        <AnnouncementCard />
      </ScrollView>

      <BottomTab />
    </View>
  );
};

export default Announcements;
