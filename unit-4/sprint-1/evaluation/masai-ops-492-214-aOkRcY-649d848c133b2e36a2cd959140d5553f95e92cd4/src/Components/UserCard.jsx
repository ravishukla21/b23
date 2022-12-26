// Your code goes here
// do a default export

// name
// avatar
// posts
// followers
// address
{/* <Name text="Chrisse" />
            <avatar1 text="avatar"/>
            <posts1 text="1841"/>
            <followers text="66868"/>
            <address text="4018 Sachs Trail"/>  */}

//<h2 data-testid="user_name">{name}</h2>
// const Name = (props) = {
//     const { text } = props;
//     return (<h2 data- testid="user_name" > { text } </h2 >)
// }
// function Button(props){
//     const {text,handle}=props;
//     return <button onClick={handle}>{text}</button>
// }
// function hello(){
//     but.innerHTML="NEWONE"
// }


function UserCard() {

    return (
        <div className="user">
            <h2 data- testid="user_name" >  {"Chrisse" } </h2 >
            <img src={"avatar"} alt={"name"}  borderRadius={"50%"}/>
            <p data- testid="user_address" >  {"4018 Sachs Trail" } </p >
            <p data- testid="user_post" >  {"1841" } </p >
            <p data- testid="user_followers" >  {"66868" } </p >
            <h3  >  {"Posts" } </h3 >
            <h3  >  {"Followers" } </h3 >
            <button >{"Follow"}</button>
            {/* <Button text="Follow" handle={handle} /> */}



            


        </div>


    );
}

export default UserCard;