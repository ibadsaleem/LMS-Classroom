import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
const AddClass = () => {
  return (
    <View style={{backgroundColor: '#ffffff', height: '100%', width: '100%'}}>
      <Header title='Add Class'/>
      <View style={{marginTop: 200, height: '60%'}}>
        <TextInput
          keyboardType="default"
          style={{
            elevation: 2,
            width: '80%',
            height: 50,
            alignSelf: 'center',
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#EFEFEF',
            borderRadius: 15,
          }}
          placeholder="Enter Class Code"></TextInput>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            borderRadius: 20,
            backgroundColor: '#0099cc',
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#ffffff', fontSize: 18, fontWeight: '500'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <BottomTab />
    </View>
  );
};

export default AddClass;
