// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import Title from "./Components/Title"
import UserCard from "./Components/UserCard"
import Courses from "./Components/Courses"



export default function App() {
  return (<>

    <div>
      <div>
        <Title />

      </div>
      <div>
        <UserCard  avatar={"http.hello.com"} name={"Chrisse"} address={"4018 Sachs Trail"} posts={1841} followers={66868}/>

      </div>
      <div>
        <Courses />

      </div>





    </div>


  </>);
}
