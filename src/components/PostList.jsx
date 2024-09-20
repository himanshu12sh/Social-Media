import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMsg"
import Loader from "./Loader";

 export const PostList=()=>{
    const{postList,addInitialPost}=useContext(PostListData);

    const[loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)   
 fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then((data)=>{
    addInitialPost(data.posts)});
  setLoading(false)   
  },[])
        
    return(  
       <>
     {loading&&<Loader/>}
       {!loading&&postList.length===0 && <WelcomeMessage/>}
        {!loading&&postList.map((post)=>(
            <Post key={post.id} post={post}/>
        ))}

</>
    )
}

export default PostList