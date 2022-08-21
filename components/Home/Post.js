import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';



export default Post=({post})=>{
  return(
    <View style={{marginBottom:30}}>
        <PostHeader post={post}/>
        <PostImage post={post}/>
        <View style={{marginHorizontal:15,marginTop:10}} 
        >
           <PostFooter post={post}/>
           {renderLikes(post.likes)}
           <Caption post={post}/> 
           <CommentSection post={post}/>
           <Comments post={post}/>
        </View>
    </View>
  )
}

const Comments=({post})=>(
  <>
     {post.comments.map((comment,index)=>(
       <View style={{flexDirection:'row',marginTop:3}}>
         <Text style={{color:'white'}}>
            <Text style={{fontWeight:'bold'}}>{comment.user}</Text>
             {' '+comment.comment}
         </Text>
     </View>
     ))
     }
  </>
)

const CommentSection=({post})=>(
  <View style={{marginTop:3}}>
    {post.comments.length &&(
       <Text style={{color:'gray'}}
         >View{post.comments.length>1? ' all':' '} {post.comments.length}
         {post.comments.length>1?' comments': ' comment'}  
       </Text>
    )}
  </View>
)

const Caption=({post})=>(
  <View style={{marginTop:3}}>
     <Text style={{color:'white',fontSize:15,}}>
       <Text style={{fontWeight:'bold'}}>{post.user}</Text>
       <Text> {post.caption.length<100? post.caption : post.caption.slice(0,100)+'... see more'}</Text>
     </Text>
  </View>
)

const PostFooter=({post})=>{
  return(
    <View>
        {renderIcon()}
    </View>
  )

}

function renderLikes(likes){
  return(
    <View>
        <Text style={{color:'white'}}>
        {likes>1 ? likes.toLocaleString() + ' likes' : '1 like'}
        </Text>
    </View>
  )
}
function renderIcon(){
  return(
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity> 
        <Image 
          source={{uri:'https://i.ibb.co/sP78WPx/Inactive-search.png'}}
          style={{width:33,height:33}}
        />
      </TouchableOpacity>
      <TouchableOpacity> 
        <Image 
          source={{uri:'https://i.ibb.co/sP78WPx/Inactive-search.png'}}
          style={{width:33,height:33,marginLeft:5,}}
        />
      </TouchableOpacity>
      <TouchableOpacity> 
        <Image 
          source={{uri:'https://i.ibb.co/sP78WPx/Inactive-search.png'}}
          style={{width:30,height:33,marginLeft:5,}}
        />
      </TouchableOpacity>
    </View>
          <TouchableOpacity> 
        <Image 
          source={{https:'//i.ibb.co/sP78WPx/Inactive-search.png'}}
          style={{width:30,height:33}}
        />
      </TouchableOpacity>
  </View>
  )
}


const PostImage=({post})=>(
  <Image
     source={post.image} //imageUrl
     style={{
       width:'100%',
       height:400,
       resizeMode:'cover',
     }}
  />
)

const PostHeader=({post})=>(
  <View
      style={{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        alignItems:'center',
      }}
  > 
      <View style={{flexDirection:'row'}}>
          <Image
             source={post.profile_Picture}
             style={{ 
                width:35,
                height:35,
                borderRadius:25,
                marginLeft:5,
                borderWidth:1.6,
                borderColor:'#ff8501'
             }}
          />
          <Text
              style={{
                color:'white',
                marginLeft:5,
                marginTop:5
              }}
          >{post.user}
          </Text>
      </View>
      <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>...</Text> 
  </View>
)