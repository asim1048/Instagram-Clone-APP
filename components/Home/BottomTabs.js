import React,{useState} from 'react';
import { View, Text,TouchableOpacity,Image,Alert} from 'react-native';


export const BottomTabIcons=[
  {
    name:Home
  },
  {
    name:Search
  },
  {
    name:PostCreation,
    
  },
  {
    name:Profile,
  },

]

export default BottomTabs=({icons,navigation})=>{
  const [activeTab,setActiveTab]=useState('Home')
  const [logout,setLogout]=useState('')
  const Icon=({icon,navigation})=>{
    return(
    <View>
    <TouchableOpacity 
      onPress={()=>setActiveTab(icon.name),
      icon.name==='PostCreation'? navigation.push('NewPost'): console.log                        ('Nothing')
    }>
      
    </TouchableOpacity>
    </View>
    )
  }

  

  
  return(
    <View 
       style={{flexDirection:'row',justifyContent:'space-around',marginBottom:5,height:40}}
    >
    <TouchableOpacity
      onPress={()=>navigation.push('Home') }
    >
      <Image 
         source={{uri:'https://i.ibb.co/Ns8RR8Y/active-home.png'}}
         style={{
           width:35,
           height:35,
         }}
          
      />
    </TouchableOpacity>
    <TouchableOpacity
       onPress={console.log('')}
    >
      <Image 
         source={{uri:'https://i.ibb.co/sP78WPx/Inactive-search.png'}}
         style={{
           width:35,
           height:35,
         }}
          
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=>navigation.push('NewPost') }
    >
      <Image 
         source={{uri:'https://i.ibb.co/rxyqjjv/active-create.png'}}
         style={{
           width:35,
           height:35,
         }}
          
      />
      </TouchableOpacity>
      <TouchableOpacity
      >
      
       <Image 
         source={{uri:'https://i.ibb.co/Smbs9v4/Asim-png.jpg'}}
         style={{
           width:35,
           height:35,
           borderRadius:17,
         }}
          
        />
      </TouchableOpacity>
      
    </View>
  )
}