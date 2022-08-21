import React,{useState} from 'react';
import { View,Text,TextInput,TouchableOpacity,Image,Alert} from 'react-native';

export default Login=({navigation})=>{
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')



  return(
    <View
      style={{flex:1,
      backgroundColor:'white',
      paddingTop:160,
      alignItems:'center',
      }}
    >
       <Image
         source={{uri:'https://i.ibb.co/jJwyMK8/Instagram-Logo.png'}}
         style={{
           height:100,
           width:100,
          }}
       />
       <TextInput style=
       {{
         marginTop:30,
         borderWidth:1,
         width:270,
         height:35,
         paddingHorizontal:10
        }}
       placeholder='Phone number, username or email'
        
        keyboardType='email-address'
        textContentType='emailAdress'
        autoFocus={false}
        onChangeText={(text) => setEmail(text)}
       />

      <TextInput style=
       {{
         marginTop:10,
         borderWidth:1,
         width:270,
         height:35,
         paddingHorizontal:10
        }}
       placeholder='password'
        keyboardType='password'
        textContentType='password'
        autoFocus={false}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
       />
       <TouchableOpacity
        
       >
        <Text
            style={{
              backgroundColor:'#81d4fa',
              width:270,
              height:35,
              marginTop:10,
              borderWidth:1,
              paddingHorizontal:110,
              paddingVertical:7,
              fontWeight:'bold'   
            }}
        >LOGIN
        </Text>
        

       </TouchableOpacity>
   
       <TouchableOpacity>   
          <Text
              style={{marginTop:10}}
          >
          Forgot password?
          </Text>
       </TouchableOpacity>

       <View style= {{flexDirection:'row',marginTop:10}}>
          <Text>
             Don't have an account?
          </Text>
          <TouchableOpacity onPress={()=>navigation.replace('SignUp')}>
              <Text
              style={{
                color:'#039be5',
                fontWeight:'bold',
              }}
                > SIGNUP
              </Text>
          </TouchableOpacity>

       </View>

    </View>
  )
}
