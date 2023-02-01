import "./App.css";
import {useState} from "react";
import Post from "./Components/Post";

const getdata=(url)=>{
  return fetch(url).then((res)=>res.json())
}

function App() {
 const [post,setpost]=useState([]);
const updatedarray=async()=>{
  try {
    const data=await getdata("https://jsonplaceholder.typicode.com/posts");
    console.log(data)
    setpost(data)

  } catch (error) {
    
  }
}

// post.map((el)=>{ {el.title}{el.body}})

  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={updatedarray}
      >
        GET POSTS
      </button>
      <div id="post-container">

        {/* <Post post={post} /> */}
        {post.map((el)=><Post title={el.title} body={el.body} id={el.id} />)}



        {/*  map through the posts data and pass props to the Posts component */}
      </div>
    </div>
  );
}

export default App;
