import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import AnnouncementCard from '../components/AnnoucmentCard';
import {useRoute} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FloatingAction} from 'react-native-floating-action';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {titleCase} from 'title-case';
const Announcements = props => {
  const route = useRoute();
  const name = route.params['name'];
  const teacherName = route.params['teacherName'];
  const id = route.params['id'];
  const [annoucements, setannoucements] = useState([]);
  const [isTeacher, setIsTeacher] = useState(true);
  const [loading, setloading] = useState(true);
  let loginMember='';
  useEffect(() => {
    func();
  });

  const func = async () => {
    let jsonValue = await AsyncStorage.getItem('userinfo');
    loginMember = await AsyncStorage.getItem('loginMember');
    fetch(
      `https://ipt-lms-1.herokuapp.com/api/user/Users/annoucements/class/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
        },
      },
    )
      .then(response => response.json())
      .then(async json => {
        setannoucements(json);
        setloading(false);
      });
  };

  const navigation = useNavigation();

  const actions = [
    {
      text: 'Add Assignment',
      icon: require('../media/assignment.png'),
      name: 'assignment',
      position: 2,
    },
    {
      text: 'Add Material',
      icon: require('../media/table.png'),
      name: 'material',
      position: 1,
    },
  ];
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <ScrollView
        style={{width: '100%', backgroundColor: '#ffffff'}}
        showsVerticalScrollIndicator={false}>
        <Header title={'Class Announcement'} hidden={false} />
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
            Class: {titleCase(name)}
          </Text>
          <Text style={{color: '#000000', fontSize: 20}}>
            {titleCase(teacherName)}
          </Text>
        </View>
        {loginMember=='student'? null:<View
          style={{
            width: '95%',
            alignSelf: 'center',
            borderWidth: 0.8,
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            borderColor: 'lightgrey',
            flexDirection: 'row',
          }}>
          <View style={{width: '10%', marginRight: 20}}>
            <Image
              source={require('../media/FAST.png')}
              style={{width: 45, height: 45, borderRadius: 55}}
            />
          </View>
          <View style={{width: '75%'}}>
            <TextInput
              placeholder="Share with your class"
              multiline={true}></TextInput>
          </View>
          <View style={{justifyContent: 'center', alignContent: 'flex-end'}}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="send-circle"
                size={30}
                color="blue"
              />
            </TouchableOpacity>
          </View>
        </View>}
        {loading ? (
          <View>
          <ActivityIndicator size="large" color="black" style={{marginTop:200}} />
          <Text style={{textAlign:'center',color:'black'}}>Loading...</Text>
          </View>
        ) : (
          
            annoucements.map((item, index) => {
            return (
              <AnnouncementCard
                teacher={titleCase(teacherName)}
                description={titleCase(item.description)}
              />
            );
          })
        )}

      </ScrollView>
      {loginMember=='student' ? <BottomTab/>: (
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            if (name == 'assignment') {
              navigation.navigate('ASSIGNMENT', {name: 'Add Assignment'});
            } else if (name == 'material') {
              navigation.navigate('MATERIAL', {name: 'Add Material'});
            }
          }}
        />
      )}
    </View>
  );
};

export default Announcements;
