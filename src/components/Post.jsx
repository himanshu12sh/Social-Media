import { MdDelete } from "react-icons/md";

const Post=({post})=>{ 
    return(
        <div className="card post-card" style={{width: "30rem"}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
           >
          <MdDelete />
</span>
          <p className="card-text">{post.body}</p>
         
          <div className="alert alert-success alert" role="alert">
 This Post has been reacted by {post.reaction} people!
</div>
        </div>
      </div>
    )
};
export default Post;