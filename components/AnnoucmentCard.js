import React from 'react';
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
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
const AnnouncementCard = (props) => {
  const navigation = useNavigation();
  const month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('ANNOUNCEMENTVIEW',{obj:props,type:props.announcementType,date:(moment(props.date).date()+' '+month[moment(props.date).month()]+' '+moment(props.date).year())})}}>

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
            borderColor:'lightgrey',
            borderBottomWidth:0,
          }}>
          <View style={{flexDirection:'row'}}>
            <View style={{marginRight:10}}>
              <Image
                source={require('../media/FAST.png')}
                style={{width: 45, height: 45, borderRadius: 55}}
              />
            </View>
            <View>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>{props.teacher}</Text>
                <View style={{flexDirection:'row'}}>
                  <View>
                <Text style={{fontSize: 10, fontWeight: '700', color: 'grey'}}>{moment(props.date).date()+' '+month[moment(props.date).month()]+' '+moment(props.date).year()}</Text>
                  </View>
                  {props.type=='ASSIGNMENT'?<View style={{backgroundColor:'#EFEFEF',marginLeft:5}}>
                <Text style={{fontSize: 10, fontWeight: '700', color: 'black'}}>{props.type}</Text>
                  </View>:null}
                </View>
            </View>
          </View>
         <View>
          <Text style={{fontSize:15,marginTop:10,color:'black',textAlign:'justify',fontWeight:'400'}}>
            {props.description}
          </Text>
         </View>
        </View>
 
        <View style={{width:'95%',marginBottom:10,height:42,borderWidth:0.80,alignSelf:'center',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderColor:'lightgrey',justifyContent:'center'}}>
            <Text style={{padding:8,color:'black'}}><Entypo name='attachment' size={15} color='black'/>{' '}Attachments ({props.len})</Text>
        </View>
    </TouchableOpacity>
  );
};

export default AnnouncementCard;
