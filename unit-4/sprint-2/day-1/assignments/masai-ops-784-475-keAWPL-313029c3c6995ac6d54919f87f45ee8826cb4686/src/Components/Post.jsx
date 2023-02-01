import React from "react";
const Post = (props) => {
  const {title,body,id}=props
  // let hello=post.map((el)=>el.title)
  // let hello1=post.map((el)=>el.body)
  return (
    <div className="post" style={{border:"2px solid black", margin:"20px"}} >
      <h1 key={id} >
        {title}
      {/* {post.map((el)=>{return {el.title}})} */}
        {/* Here show the title of the post  */}
        {/* {post.map((el)=>el.title)} */}
        {/* {hello} */}
      </h1>
      <h3 key={id+Math.random()}>
        {body}
      {/* {post.map((el)=>{return <li key={el.id}>{el.post}</li>})} */}
        {/* Here show the body of the post  */}
        {/* {post.map((el)=>el.body)} */}
        {/* {hello1} */}
      </h3>
    </div>
  );
};

export default Post;
