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
import RNFetchBlob from 'rn-fetch-blob';

const AnnouncementView = props => {
  const [userAssignment, setuserAssignment] = useState([]);
  const [fileSubmitted, setFileSubmitted] = useState([]);
  const [isFileSubmitted, setisFileSubmitted] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const [attachmentCount, setattachmentCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const content = route.params['obj'];
  const date = route.params['date'];
  const [loginMember, setLoginMember] = useState('');
  const [media, setMedia] = useState([]);
  const [type, setType] = useState('');
  useEffect(() => {
    func();
    checkFileSubmitted();

    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const docPicker = async () => {
    setattachmentCount(0);
    const res = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.allFiles],
    });
    setMedia(res);
    setattachmentCount(res.length);
  };

  const documentUpload = async () => {
    if (attachmentCount == 0) {
      alert('Please attach file');
    } else {
      setLoading(true);
      const doc = new FormData();
      media.forEach(element => {
        doc.append('fileToUpload', element);
      });
      let jsonValue = await AsyncStorage.getItem('userinfo');
      let id = content.id_Annoucement;
      fetch(
        `https://ipt-lms-1.herokuapp.com/api/user/Users/upload/mobile/assignment/${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
          },
          body: doc,
        },
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.success == 1) {
            setMedia([]);
            setattachmentCount(0);
            setLoading(false);
            alert('Assignment Submitted Successfully');
          } else {
            setMedia([]);
            setattachmentCount(0);
            alert('Something went wrong');
            setLoading(false);
          }
        })
        .catch(error => {
          setLoading(false);

          console.error(error);
        });
    }
  };

  const checkFileSubmitted = async () => {

    let jsonValue = await AsyncStorage.getItem('userinfo');
    console.log(content.id_Annoucement);
    fetch(
      `https://ipt-lms-1.herokuapp.com/api/user/Users/assignments/${content.id_Annoucement}`,
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
        console.log('================!>',json);
        if(json.length>0 || json.status!=404){
      setisFileSubmitted(true)
    }else{

      setisFileSubmitted(false);
    }
      });
  };
  const func = async () => {
    let _loginMember = await AsyncStorage.getItem('loginMember');
    let jsonValue = await AsyncStorage.getItem('userinfo');
    setLoginMember(_loginMember);
    setType(content.type);
    if(_loginMember!='student'){
      fetch(
      `https://ipt-lms-1.herokuapp.com/api/teacher/Teacher/assignments/${content.id_Annoucement}`,
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
        setuserAssignment(json);
      });}
  };

  const downloadFile = async (link, fileid) => {
    let jsonValue = await AsyncStorage.getItem('userinfo');
    console.log(fileid);
    // fetch(`https://ipt-lms-1.herokuapp.com/api/user/Users/announcements/Files/${fileid}`, {
    //   method: 'GET',
    //   headers: {
    //     // 'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
        
    //   },
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //   });
  };
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <Header title={'Title: ' + content.title} />

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
          {content.obj.length == 0 ? (
            <Text style={{padding: 8, color: 'black'}}>
              <Entypo name="attachment" size={15} color="black" />
              {'  '}
              No Attachments
            </Text>
          ) : (
            content.obj.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index + 1}
                  onPress={() => {
                    downloadFile(item.filePath, item.id);
                  }}>
                  <Text style={{padding: 8, color: 'black'}}>
                    <Entypo name="attachment" size={15} color="black" />
                    {'  '}
                    {item.fileName}
                  </Text>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </View>
      {loginMember == 'student' && type == 'ASSIGNMENT' ? (
        isFileSubmitted ? (
          <Text
            style={{
              fontSize: 18,
              height: 55,
              paddingTop: 4,
              fontWeight: '700',
              color: 'white',
              textAlign: 'center',
              marginTop: 50,
              backgroundColor: '#0099cc',
              width: 200,
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            Assignment Already Submitted
          </Text>
        ) : (
          <>
            <TouchableOpacity
              onPress={docPicker}
              style={{
                width: 170,
                height: 50,
                justifyContent: 'center',
                backgroundColor: '#0099cc',
                alignSelf: 'center',
                marginTop: 30,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                Attach Files ({attachmentCount})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={loading}
              onPress={documentUpload}
              style={{
                width: 170,
                height: 50,
                justifyContent: 'center',
                backgroundColor: '#0050ee',
                alignSelf: 'center',
                marginTop: 30,
                borderRadius: 10,
              }}>
              {loading ? (
                <ActivityIndicator size={30} color="white" />
              ) : (
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    textAlign: 'center',
                    fontWeight: '700',
                  }}>
                  Submit Assignment
                </Text>
              )}
            </TouchableOpacity>
          </>
        )
      ) : null
      }
      {
        loginMember=='teacher' && type=='ASSIGNMENT'?(
        
          <View style={{width: '100%', height: '100%'}}>
            <Text
              style={{padding: 10, fontSize: 20, color: 'black', marginTop: 20}}>
              Assignments Submitted
            </Text>
  
            <ScrollView
              style={{width: '100%', backgroundColor: '#ffffff'}}
              showsVerticalScrollIndicator={false}>
              {userAssignment.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      marginTop: 2,
                      marginBottom: 2,
                      elevation: 1.5,
                      flexDirection: 'row',
                      padding: 10,
                      width: '95%',
                      alignSelf: 'center',
                    }}>
                    <View style={{width: '20%'}}>
                      <Text
                        key={index + 1}
                        style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
                        {item.studentId + ' |'}
                      </Text>
                    </View>
                    <View style={{width: '80%'}}>
                      <Text
                        key={index + 1}
                        style={{color: 'black', fontSize: 15}}>
                        {item.fileName}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        ):null
      }
    </View>
  );
};

export default AnnouncementView;
