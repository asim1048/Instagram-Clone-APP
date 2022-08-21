import {Users} from './Users'
const UsmanPost=require('../assets/Post/UsmanPost.png')
const AsimPost=require('../assets/Post/AsimPost.png')
const AmirLiaqat=require('../assets/Post/AmirLiaqat.png')

export const Posts=[
  
  {
    image:AsimPost,
    user:Users[0].user,//username
    likes:3510,
    caption: 'When you have no plan ❤ Some days start better than others ️️️❤️',
    profile_Picture:Users[0].image,
    comments:[
      {
        user:'ahmad_k',
        comment:'Wow! This build looks fire. God bless you'
      },
      {
        user:'malik_Riaz',
        comment:'Wow! This build looks fire. Khush rho paiyan ❤️❤️❤️ '
      },
    ]
    
  },
  {
    image:AmirLiaqat,
    user:Users[0].user,//username
    likes:1035910,
    caption: 'May Allah rest his soul in eternal peace and grant him the highest place in Jannah.',
    profile_Picture:Users[0].image,
    comments:[
      {
        user:'ahmad_k',
        comment:'إنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ ‏'
      },
      {
        user:'malik_Riaz',
        comment:'Ameen!'
      },
    ]
    
  },
  {
    image:UsmanPost,
    user:Users[4].user,//username
    likes:105510,
    caption: 'Life is like a box of chocolates; sometimes you just dig out the good center parts and leave all the undesirable rest to waste.',
    profile_Picture:Users[4].image,
    comments:[
      {
        user:'fatima302',
        comment:'Iyi Mashallah️️...!',
      },
      {
        user:'khadija_01',
        comment:' Guzel!!!❤️❤️❤️ '
      },
    ]
  }
]
