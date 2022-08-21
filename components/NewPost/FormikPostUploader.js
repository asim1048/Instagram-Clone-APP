import React,{useState} from 'react';
import { View, Text, Image,TextInput,TouchableOpacity } from 'react-native'


export default FormikPostUploader=({navigation})=>{
  const [sharePossible,setSharePossible]=useState('white')
  const [caption,setCaption]=useState('Write an caption...')
  const[imageurl,setImageUrl]=useState('https://i.ibb.co/w6M0wrZ/Thumbnail.png')
  return(
    <View style={{marginLeft:10,marginTop:30} } >
       <View 
          style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:20
          }}
      >
      <TouchableOpacity
         onPress={()=>navigation.goBack() }
      >
       <Image
           source={{uri:'https://i.ibb.co/sP78WPx/Inactive-search.png'}}
          style={{
            height:30,
            width:30,
          }}
       />
      </TouchableOpacity>
      
      <Text
          style={{color:'white',
        fontSize:19,
        fontWeight:'bold',
        marginTop:5,
        marginRight:170,
          }}
      >NEW POST
      </Text>
   </View>
       <View
          style={{flexDirection:'row',marginTop:20}}
       >
       <Image
          source={{uri:'https://i.ibb.co/w6M0wrZ/Thumbnail.png'}}
          
          style={{
            height:170,
            width:170,
            borderRadius:10,
          }}
       />
       <TextInput 
           style={{
             marginLeft:2,
             color:'white',
             fontSize:15,
             width:170,
             padding:5,
             borderRadius:20,
           }}
           placeholder={caption}
           placeholderTextColor='white'
           onChangeText={(text) => setCaption(text)}
           multiline
       />
       
       </View>
       <TextInput
         style={{
           color:'white',
           marginTop:10,
           borderWidth:1,
           borderColor:'white',
           padding:5,
           borderRadius:15,
         }}
         placeholder='Place Image Url...'
         placeholderTextColor='white'
         onChangeText={(text) => {setImageUrl(text),setSharePossible('blue')} }
       />
       <TouchableOpacity>
          <Text
             style={{
               color:sharePossible,
               alignContent:'center',
               justifyContent:'center',
               marginTop:20,
               marginLeft:150,
               borderWidth:1,
               borderColor:'white',
               borderRadius:10,
               position:'absolute',
               paddingHorizontal:20,
               paddingVertical:5,
               zIndex:10,
               fontWeight:'bold',
             }}
          >Share
          </Text>
       </TouchableOpacity>
    </View>
  )
}