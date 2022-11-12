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

const AddAssignment = props => {
  const [Loading, setLoading] = useState(false);
  // const doc = new FormData();
  const route = useRoute();
  const [dueDate, setDueDate] = useState('');
  const name = route.params['name'];
  const id = route.params['id'];
  const [attachmentCount, setattachmentCount] = useState(0);
  const [details, setDetails] = useState('');
  const [title, setTitle] = useState('');
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });
  const [media, setMedia] = useState([]);
  const docPicker = async () => {
    setattachmentCount(0);
    const res = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.allFiles],
    });
    setMedia(res);
    setattachmentCount(res.length);
  };

  const documentUpload = async () => {
    if (details === '' || title === '') {
      alert('Kindly Provide Assignment Details');
    } else {
      setLoading(true);
      const doc = new FormData();
      media.forEach(element => {
        doc.append('fileToUpload', element);
      });
      doc.append('title', title);
      doc.append('announcementType', 'ASSIGNMENT');
      doc.append('description', details);
      doc.append('dueDate', dueDate);
      let jsonValue = await AsyncStorage.getItem('userinfo');
      fetch(
        `https://ipt-lms-1.herokuapp.com/api/teacher/Teacher/upload/class/${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            // Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
          },
          body: doc,
        },
      )
        .then(response => response.json())
        .then(data => {
          setMedia([]);
          setattachmentCount(0);
          setDetails('');
          setLoading(false);
          alert('Assignment Uploaded');
          console.log(data);
        })
        .catch(error => {
          console.log('======>');
          console.error(error);
        });
    }
  };
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <Header title={name} hidden={false} />
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          borderWidth: 0.8,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          padding: 10,
          marginTop: 10,
          borderColor: 'lightgrey',
          flexDirection: 'row',
        }}>
        <View style={{width: '10%', marginRight: 20,justifyContent:'center'}}>
          <Image
            source={require('../media/FAST.png')}
            style={{width: 50, height: 50, borderRadius: 55}}
          />
        </View>
        <View style={{width: '75%'}}>
          <TextInput
            onChangeText={text => {
              setTitle(text);
            }}
            placeholder="Add Assignment Title"
            multiline={false}
            value={details}></TextInput>
          <View style={{borderBottomWidth: 0.3,marginTop:1,width:'90%',marginLeft:4}}></View>
          <TextInput
            onChangeText={text => {
              setDetails(text);
            }}
            placeholder="Add Assignment Details"
            multiline={true}
            value={details}></TextInput>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => docPicker()}
        style={{
          justifyContent: 'center',
          width: '95%',
          height: 50,
          borderWidth: 0.8,
          borderTopWidth: 0,
          borderColor: 'lightgrey',
          alignSelf: 'center',
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Text style={{padding: 8, color: 'black', fontSize: 13}}>
          <Entypo name="attachment" size={13} color="black" /> Attachments (
          {attachmentCount})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{
          borderRadius: 10,
          width: 200,
          height: 50,
          justifyContent: 'center',
          backgroundColor: '#0099cc',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 15,
            fontWeight: '700',
          }}>
          Pick Due Date
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={documentUpload}
        style={{
          borderRadius: 10,
          width: 200,
          height: 50,
          justifyContent: 'center',
          backgroundColor: '#0099cc',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        {Loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 15,
              fontWeight: '700',
            }}>
            Upload Assignment
          </Text>
        )}
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setDueDate(moment(date).format('YYYY-MM-DD'));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default AddAssignment;
