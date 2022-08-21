import React from 'react';
import {View,Text,SafeAreaView, StyleSheet,StatusBar,ScrollView} from 'react-native';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories'
import Post from '../components/Home/Post'
import {Posts} from '../data/Posts'
import {BottomTabIcons} from '../components/Home/BottomTabs'
import BottomTab from '../components/Home/BottomTabs'


export default Home=({navigation})=>{
    return(
 
      <SafeAreaView  style={styles.container}>

        <Header/>
        <Stories/>
        {/* Post */}
        <ScrollView>
          { Posts.map((post,index)=>(
              <Post post={post} key={index}/>     
          ))}
        </ScrollView>
       <BottomTab icons={BottomTabIcons} navigation={navigation}/>
      
      </SafeAreaView>
    )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  }
})