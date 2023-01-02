// your code goes here
// do a default export

export default  function UserCard (props) {
    // const { name,address ,posts,followers,avatar} = props;
  
    return (
      <div>
        <img style={{borderRadius:"50%"}} src={props.avatar}  alt={props.name}/>
        <h2 data-testid="user_name">{props.name}</h2>
        <p data-testid="user_address">{props.address}</p>


        <h3>Posts</h3>
        <p data-testid= "user_posts">{props.posts}</p>


        <h3>Followers</h3>
        <p data-testid= "user_followers" >{props.followers}</p>
        
        
        <button>{"Follow"}</button>
      </div>
    );
  };
  
  
  