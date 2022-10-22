import React, {useEffect} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import BottomTab from '../components/BottomTab';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';

const UploadAssignment = props => {
  const navigation = useNavigation();
  return (
<View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
      <Header title="Upload Assignment"/>
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
        <View style={{width: '10%', marginRight: 20}}>
          <Image
            source={require('../media/FAST.png')}
            style={{width: 45, height: 45, borderRadius: 55}}
          />
        </View>
        <View style={{width: '75%'}}>
          <TextInput
            placeholder="Upload Details"
            multiline={true}>
                
            </TextInput>
        </View>
        
      </View>
      <TouchableOpacity
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
          <Entypo name="attachment" size={13} color="black" /> Attachments (2)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:200,height:50,justifyContent:'center',backgroundColor:'#0099cc',alignSelf:'center',marginTop:20}}>
            <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:'700'}}>Upload Files</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadAssignment;
