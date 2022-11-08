import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  BackHandler,
  ActivityIndicator,
  Alert,
} from 'react-native';
import BottomTab from '../components/BottomTab';
import AnnouncementCard from '../components/AnnoucmentCard';
import {useRoute} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FloatingAction} from 'react-native-floating-action';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';

const AnnouncementView = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const content = route.params['obj'];
  const date = route.params['date'];
  console.log(content.obj);
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <Header title={content.title} />

      <View>
        <View
          style={{
            width: '95%',
            backgroundColor: '#ffffff',
            marginTop: 20,
            alignSelf: 'center',
            borderWidth: 0.8,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            padding: 10,
            borderColor: 'lightgrey',
            borderBottomWidth: 0,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 10}}>
              <Image
                source={require('../media/FAST.png')}
                style={{width: 45, height: 45, borderRadius: 55}}
              />
            </View>
            <View>
              <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                {content.teacher}
              </Text>
              <Text style={{fontSize: 10, fontWeight: '700', color: 'grey'}}>
                {date}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                color: 'black',
                textAlign: 'justify',
                fontWeight: '400',
              }}>
              {content.description}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '95%',
            marginBottom: 1,
            borderWidth: 0.8,
            alignSelf: 'center',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderColor: 'lightgrey',
            justifyContent: 'center',
          }}>
          {content.obj.length==0?<Text style={{padding: 8, color: 'black'}}>
                  <Entypo name="attachment" size={15} color="black" />
                  {'  '}
                    No Attachments
                </Text>:
            content.obj.map((item, index) => {
              return (
                <TouchableOpacity>

                <Text style={{padding: 8, color: 'black'}}>
                  <Entypo name="attachment" size={15} color="black" />
                  {'  '}
                  {item.fileName}
                </Text>
                </TouchableOpacity>
              );
            }
          )}
        </View>
      </View>
    </View>
  );
};

export default AnnouncementView;
