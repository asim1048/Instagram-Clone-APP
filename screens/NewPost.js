import React,{useState}from 'react';
import {View,Text,Image,TouchableOpacity,SafeAreaView,StatusBar,TextInput} from 'react-native';

import FormikPostUploader from '../components/NewPost/FormikPostUploader'
  
export default NewPost=({navigation})=>{
  return(
    <SafeAreaView 
    style={{
        backgroundColor:'black',
        flex:1,
      }}>
        
        <FormikPostUploader navigation={navigation}/>
    </SafeAreaView>
  )
}






