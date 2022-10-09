import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import RestaurantCard from '../components/RestaurantCard';
import CategoryCard from '../components/CategoryCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../Screens/LoginScreen';
import Profile from '../Screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';

export default function BottomTab() {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor:'#ffffff',width:'100%',height:60,flexDirection:'row',justifyContent:'space-evenly',padding:10,borderTopWidth:1,elevation:4,borderColor:'lightgrey'}}>
            <TouchableOpacity style={{marginRight:40,justifyContent:'center',width:40}} onPress={()=>navigation.navigate('RESTAURANT')}>
                <Feather name="home" size={27} color="#000000" style={{alignSelf:'center'}} />
                <Text style={{color:'black',textAlign:'center',fontSize:10,fontWeight:'700'}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:40,justifyContent:'center',width:40}} onPress={()=>navigation.navigate('CATEGORY')}>
                <MaterialCommunityIcons name="store-search-outline" size={30} color="#000000" style={{alignSelf:'center'}}/>
                <Text style={{color:'black',textAlign:'center',fontSize:10,fontWeight:'700'}}>Store</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:40,justifyContent:'center',width:40}}>
                <Feather name="shopping-cart" size={25} color="#000000" style={{alignSelf:'center'}}/>
                <Text style={{color:'black',textAlign:'center',fontSize:10,fontWeight:'700'}}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',width:40}}>
                <MaterialCommunityIcons name="account" size={30} color="#000000" style={{alignSelf:'center'}} onPress={()=>navigation.navigate('PROFILE')}/>
                <Text style={{color:'black',textAlign:'center',fontSize:10,fontWeight:'700'}}>User</Text>
            </TouchableOpacity>
               
    </View>
  );
}