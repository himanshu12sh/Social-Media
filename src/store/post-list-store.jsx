import { createContext, useReducer } from "react";

export const PostList=createContext({
  PostList:[],
    addPost:()=>{},
    addInitialPost:()=>{},
    deltePost:()=>{}
});

const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;
  if(action.type==='ADD_POST'){
    newPostList=[action.payload,...currPostList];
  }
  else if(action.type==="ADD_INITIAL_POST"){
    newPostList=action.payload.posts
  }
  return newPostList;
};


const PostListProvider=({children})=>{
  const[postList,dispatchpostList]=useReducer(postListReducer,
  []);

const addPost=(user,postTitle,PostContent,reactions,tags)=>{
  dispatchpostList({
    type:"ADD_POST",
    payload:{
      id:Date.now(),
  title:postTitle,
  body:PostContent,
  reaction:reactions,
  userId:user,
  tags:tags,
    }
  })
};


const addInitialPost=(posts)=>{
  dispatchpostList({
    type:"ADD_INITIAL_POST",
    payload:{
      posts
          }
  })
};


const deletePost=(postId)=>{
  console.log(`Delete Post Called for ${postId}`)
}


   return (
    <PostList.Provider 
    value={{postList,addPost,addInitialPost,deletePost}}>{children}</PostList.Provider>
   )
};


export default PostListProvider