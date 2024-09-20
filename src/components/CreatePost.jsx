import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";  

const CreatePost=()=>{
 
  const userElement=useRef();
  const postTitleElement=useRef();
  const postContentElement=useRef();
  const reactionsElement=useRef();
  const tagElement=useRef();

 const{addPost}= useContext(PostList);

  const handleSubmit=(event)=>{
     event.preventDefault();

     const user=userElement.current.value;
     const postTitle=postTitleElement.current.value;
     const PostContent=postContentElement.current.value;
     const reactions=reactionsElement.current.value;
     const tags=tagElement.current.value;
     
     userElement.current.value="";
     postTitleElement.current.value="";
     postContentElement.current.value="";
     reactionsElement.current.value="";
     tagElement.current.value="";
     
    
     addPost(user,postTitle,PostContent,reactions,tags);
  }

    return(
<form className="createPost" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">Enter your User Id here</label>
    <input type="text" 
    ref={userElement}
    className="form-control" id="userId" 
    placeholder="Your User Id"
    />
  </div>

  <div className="mb-3">
    <label  className="form-label">Post Title</label>
    <input type="text"
     ref={postTitleElement}
     className="form-control"
     id="PostTitle" 
    placeholder="How was your day!"
    />
  </div>

  
  <div className="mb-3">
    <label  className="form-label">Post Content</label>
    <textarea rows="3"  
    type="text" 
    ref={postContentElement}
    className="form-control mb-3" 
    id="PostContent" 
    placeholder="Enter the post Content!"
    />
  </div>
  

   <div className="mb-3">
    <label  className="form-label">Post Reactions</label>
    <input type="number"
    ref={reactionsElement}
     className="form-control"
     id="PostReactions" 
    placeholder="No of people reacted to post"
    />
  </div>

   <div className="mb-3">
    <label className="form-label">Post HashTags</label>
    <input type="text"
     ref={tagElement}
     className="form-control" 
     id="PostTags" 
    placeholder="Enter hashtags using space.."
    />
  </div>


  <button type="submit" className="btn btn-primary">Post</button>
</form>
    )
};
export default CreatePost;