// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import { Stack, Center, Button, FormControl, Input, Box, Img, SimpleGrid, Text, VStack, Select, Spinner } from '@chakra-ui/react'
import React, { useEffect, useReducer } from "react";
import axios from "axios"
// let Box = () => <div />;
// let Button = () => <div />;
// let Center = () => <div />;
// let Img = () => <div />;
// let SimpleGrid = () => <div />;
// let Text = () => <div />;
// let VStack = () => <div />;
// let Select = () => <div />;
// let Spinner = () => <div />;

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,

      };
    case "SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,

      }
    case "FAILURE":
      return {
        ...state,
        data: [],
        isLoading: false,
        error: action.payload,

      }
    default: {
      return state
    }
  }

};
//Handle all the three status Request,Successand Failure of the API calls through reducer.

export default function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data,
    isLoading,
    error } = state
  const getData = () => {
    dispatch({ type: "REQUEST" });


    axios.get("http://localhost:8080/cats").then((res) => {
      console.log(res.data, "data")
      dispatch({ type: "SUCCESS", payload: res.data })
    }).catch((err) => {
      dispatch({ type: "FAILURE", payload: err.message })
    })

  }

  useEffect(() => {
    getData()

  }, [])
  // const[value,dispatch]=useReducer(reducer,initialState);
  console.log(data)
  return (
    <div>
      <div className="sortingButtons">
        <Button colorScheme={"green"} className="sortByCostAsc" >
          Sort by Asc
        </Button>
        <Button colorScheme={"red"} className="sortByCostDesc" m={2} >
          Sort by Desc
        </Button>
      </div>
      <Center>
        <Select placeholder="select option">
          <option value="Peterbald">Peterbald</option>
          <option value="Nebelung">Nebelung</option>
          <option value="Persian">Persian</option>
          <option value="Birman">Birman</option>
          <option value="Himalayan">Himalayan</option>
        </Select>
      </Center>

      {/* Map the below container against your data */}
     
      {data.map((el) => {
        return <SimpleGrid className="main_container">
          <Box className="catsDetails" key={el.id}>
            {/* key={el.id} */}
            <Center>
              <Img src={el.image} />
            </Center>
           

            <VStack spacing={2} p={2}>
              <Text className="name" fontSize={"20px"} fontWeight="bold">{el.name}</Text>
              <Text className="cost">{el.cost}</Text>
              <Text className="likes">{el.likes}</Text>
              <Text className="breed">{el.breed}</Text>
              <Text className="description">{el.description}</Text>
              <Button className="delete">Delete</Button>
            </VStack>
          </Box>
        </SimpleGrid>



      })}
       <Spinner />
     
      {/* <SimpleGrid className="main_container">
        <Box className="catsDetails">
          {/* key={el.id} */}
      {/* <Center>
        <Img />
      </Center> */}

      {/* <VStack spacing={2} p={2}>
        <Text className="name" fontSize={"20px"} fontWeight="bold"></Text>
        <Text className="cost"></Text>
        <Text className="likes"></Text>
        <Text className="breed"></Text>
        <Text className="description"></Text>
        <Button className="delete">Delete</Button> */}
      {/* </VStack>
        </Box>
      </SimpleGrid >  */}
    </div >
  );
}
