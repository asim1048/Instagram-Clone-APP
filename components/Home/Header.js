import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default Header = () => {
  return (
    <View
      style={{
        marginTop: 23,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        flexDirection: 'row',
      }}>
      {/* Insta title */}
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/Instagram.png')}
          style={{
            width: 130,
            height: 50,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>

      <View style={{ flexDirection: 'row' }}>
        {/*
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/PostCreation.png')} 
            style={{
              width: 35,
              height: 38,
              marginLeft: 10,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/Like.png')} 
            style={{
              width: 35,
              height: 38,
              marginLeft: 10,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        */}
        <TouchableOpacity>
          {/* Unread Badge */}
          <View
              style={{
                backgroundColor:'#FF3250',
                position:'absolute', 
                left:30,
                bottom:20,
                width:25,
                height:17,
                borderRadius:25,
                alignItems:'center',
                justifyContent:'center',
                zIndex:100
              }}
          > 
              <Text
                  style={{
                      color:'white',
                  }} 
              >11
              </Text>
          </View>
          <Image
            source={{uri:'https://i.ibb.co/K7xd2LV/Inactive-like.png'}} 
            style={{
              width: 35,
              height: 40,
              marginLeft: 10,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
