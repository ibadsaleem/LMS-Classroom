import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  RefreshControl,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import AnnouncementCard from '../components/AnnoucmentCard';
import {useRoute} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FloatingAction} from 'react-native-floating-action';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DocumentPicker from 'react-native-document-picker';
import {titleCase} from 'title-case';
import moment from 'moment';
//Add AAAAAAAAA
// Add button for file upload and change the function as per count

const Announcements = props => {
  
  const route = useRoute();
  const name = route.params['name'];
  const teacherName = route.params['teacherName'];
  const courseCode = route.params['courseCode'];
  const navigation = useNavigation();
  const id = route.params['id'];
  const [annoucements, setannoucements] = useState([]);
  const [annoucementtext, setannoucementtext] = useState('');
  const [isTeacher, setIsTeacher] = useState(true);
  const [loading, setloading] = useState(true);
  const [loading1, setloading1] = useState(false);
  const [loginMember,setLoginMember]= useState('');
  const [refreshing,setRefreshing]=useState(false);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = () => {
    setRefreshing(true);
    getAllAnnouncements();
  }
  useEffect(() => {
    
      getAllAnnouncements();
    

    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {backHandler.remove();clearTimeout()};
  }, []);

  const getAllAnnouncements = async () => {
    setloading(true);
    let jsonValue = await AsyncStorage.getItem('userinfo');
    let loginMember = await AsyncStorage.getItem('loginMember');
    setLoginMember(loginMember);
    loginMember=='student'? fetch(
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
        if(json.message ==='Unauthroized'){
          alert('You are not authorized to view this page')
          AsyncStorage.setItem('loginStatus','false');
          setloading(false);
          navigation.navigate('TEACHERLOGIN');
        }else{
          setannoucements(json);
          setRefreshing(false)
          // console.log(json)
          // console.log(annoucements);
          setloading(false);
        }
      }):fetch(
        `https://ipt-lms-1.herokuapp.com/api/teacher/Teacher/annoucements/class/${id}`,
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
          if(json.message ==='Unauthroized'){
            alert('You are not authorized to view this page')
            setRefreshing(false);
            AsyncStorage.setItem('loginStatus','false');
            navigation.navigate('TEACHERLOGIN');
          }else{
            setannoucements(json);
            setRefreshing(false);
            // console.log(json)
            setloading(false);
          }
        });
  };

  const documentUpload = async () => {
    const doc = new FormData();
    const res = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.allFiles],

    });
    res.forEach(element => {
      doc.append('fileToUpload', element);
    });
    doc.append('title', 'Hello');
    doc.append('announcementType', 'ANNOUNCEMENT');
    doc.append('description', 'Hello This is assignment');
    doc.append('dueDate', '2022-05-10');
    fetch(
      `https://ipt-lms-1.herokuapp.com/api/teacher/Teacher/upload/class/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: doc,
      },
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data);
      })
      .catch ((err) =>{
        if (DocumentPicker.isCancel(err)) {
        } else {
          throw err;
        }
      });
  };
  const func_postannouncement = async a => {
    setloading1(true);
    let jsonValue = await AsyncStorage.getItem('userinfo');
    let loginMember = await AsyncStorage.getItem('loginMember');
    fetch(
      `https://ipt-lms-1.herokuapp.com/api/teacher/Teacher/announcement/add/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(jsonValue).token,
        },
        body: JSON.stringify({
          description: annoucementtext,
          title: a,
          announcementType: a,
          dueDate: '2022-10-28T11:41:52.451Z',
        }),
      },
    )
      .then(response => response.json())
      .then(json => {
        setannoucementtext('');
        setloading1(false);
        getAllAnnouncements();
      });
  };


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
     refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }
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
          {loginMember=='teacher'?<Text style={{color: '#000000', fontSize: 20,fontWeight:'600'}}>
            {'Class Code: '+courseCode}
          </Text>:null}
        </View>
        {loginMember === 'student' || loading? null : (
          <View
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
                onChangeText={text => setannoucementtext(text)}
                placeholder="Share with your class"
                multiline={true}
                value={annoucementtext}></TextInput>
            </View>
            <TouchableOpacity
              style={{justifyContent: 'center', alignContent: 'flex-end'}}>
              <TouchableOpacity
                onPress={
                  () => func_postannouncement('ANNOUNCEMENT')
                }>
                {loading1?<ActivityIndicator size={20} color='black'/>:<MaterialCommunityIcons
                  name="send-circle"
                  size={30}
                  color="blue"
                />}
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
        
        {loading ? (
          <View>
            <ActivityIndicator
              size="large"
              color="black"
              style={{marginTop: 200}}
            />
            <Text style={{textAlign: 'center', color: 'black'}}>
              Loading...
            </Text>
          </View>
        ) : (
          annoucements.length==0? <Text style={{textAlign:'center',fontSize:25,fontWeight:'600',color:'black',marginTop:100}}>No Announcements Found </Text>:annoucements.map((item, index) => {
            return (
              <AnnouncementCard
                key={index}
                teacher={titleCase(teacherName)}
                description={titleCase(item.description)}
                date={moment(item.createdAt).format('YYYY-MM-DD')}
                len={item.announcementFiles.length}
                obj={item.announcementFiles}
                title={titleCase(item.title)}
                type={item.announcementType}
                id_Annoucement={item.announcementId}
              />
            );
          })
        )
        
        }
      </ScrollView>
      {loginMember == 'student' ? (
        <BottomTab />
      ) : (
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            if (name == 'assignment') {
              navigation.navigate('ASSIGNMENT', {name: 'Add Assignment',id:id});
            } else if (name == 'material') {
              navigation.navigate('MATERIAL', {name: 'Add Material',id:id});
            }
          }}
        />
      )}
    </View>
  );
};

export default Announcements;
