import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function BottomTab() {
  const navigation = useNavigation();
 
  return (
    <View style={{backgroundColor:'#ffffff',width:'100%',height:60,flexDirection:'row',justifyContent:'space-evenly',padding:10,borderTopWidth:1,elevation:4,borderColor:'lightgrey'}}>
            <TouchableOpacity style={{marginRight:40,justifyContent:'center',width:40}} onPress={()=>{navigation.navigate('CLASS')}}>
                <Feather name="home" size={27} color="#000000" style={{alignSelf:'center'}} />
                <Text style={{color:'black',textAlign:'center',fontSize:10,fontWeight:'700'}}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{navigation.navigate("TEACHERADDCLASS")}} style={{marginRight:40,justifyContent:'center',width:40}}>
                <Feather name="plus" size={30} color="#000000" style={{alignSelf:'center'}}/>
                <Text style={{color:'black',textAlign:'center',fontSize:10,fontWeight:'700'}}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',width:40}}>
                <MaterialCommunityIcons name="account" size={30} color="#000000" style={{alignSelf:'center'}} onPress={()=>{navigation.navigate('PROFILE')}}/>
                <Text style={{color:'black',textAlign:'center',fontSize:10,fontWeight:'700'}}>User</Text>
            </TouchableOpacity>
               
    </View>
  );
}