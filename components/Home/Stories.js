import React from 'react';
import {View,Text, ScrollView,Image} from 'react-native';
import {Users} from '../../data/Users';

export default Stories=()=>{
  return(
    <View style={{marginBottom:13}}>
       <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
       >
          {Users.map((story,index)=>(
              <View key={index} style={{alignItems:'center'}}>
                 <Image 
                    source={story.image} 
                    style={{
                        width:70,
                        height:70,
                        borderRadius:50,
                        marginLeft:5,
                        borderWidth:3,
                        borderColor:'#ff8501'
                    }}
                 />
                 <Text style={{color:'white',alignItems:'center',justifyContent:'center'}}>
                     {
                       story.user.length>11
                       ? story.user.slice(0,7).toLowerCase() +'...'
                       : story.user.toLowerCase()
                     }
                 </Text>
              </View>
          ))}
       </ScrollView>
    </View>
  )
}