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
const AnnouncementCard = () => {
  return (
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
                <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>Dr Nadeem Kafi</Text>
                <Text style={{fontSize: 10, fontWeight: '700', color: 'grey'}}>Oct 6</Text>
            </View>
          </View>
         <View>
          <Text style={{fontSize:15,marginTop:10,color:'black',textAlign:'justify',fontWeight:'400'}}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
          </Text>
         </View>
        </View>
 
        <TouchableOpacity style={{width:'95%',marginBottom:20,height:42,borderWidth:0.80,alignSelf:'center',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderColor:'lightgrey',justifyContent:'center'}}>
            <Text style={{padding:8,color:'black'}}><Entypo name='attachment' size={15} color='black'/>{' '}Attachments (2)</Text>
        </TouchableOpacity>
    </View>
  );
};

export default AnnouncementCard;
