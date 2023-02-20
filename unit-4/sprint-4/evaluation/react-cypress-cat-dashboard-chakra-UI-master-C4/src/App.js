import "./App.css";
import { Stack,Center,Button } from '@chakra-ui/react';
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";





// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
// let Stack = () => <div />;
// let Center = () => <div />;
// let Button = () => <div />;
function App() {
  return (
    <Stack p={5} className="App">
      <Center>
        <Button width="150px" className="toggleForm" onClick={()=><Form/>}>Form</Button>
      </Center>
      {/* <Form/> */}
      <Dashboard/>

     

      {/* toggle between form and dashboard */}
    </Stack>
  );
}

export default App;
