import axios from "axios";

import { GET_MATCH_REQUEST, GET_MATCH_SUCCESS, GET_MATCH_FAILURE } from "./actionTypes";

// http://localhost:8080/matches
export const getMatches = (value123="",pageno=1) => (dispatch) => {
  // Complete the logic
  // http://localhost:8080/matches?_sort=year&_order=desc
  // http://localhost:8080/matches?_sort=year&_order=asc&_limit=10&_page=1
  console.log(typeof pageno,"pageno")
 
  let year="";
  if(value123){
    year="year"

  }else{
    year=""
  }
  dispatch(getmatchrequestaction())
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches?_sort=${year}&_order=${value123}&_limit=10&_page=${pageno}`).then((res) => {
    dispatch(getmatchsuccessaction(res.data))
  })
    .catch((err) => {
      console.log(err, "errorinmatchesaction")
      dispatch(getmatchfailureaction())
    })
};



export const getmatchrequestaction = () => {
  return { type: GET_MATCH_REQUEST }
}
export const getmatchsuccessaction = (value) => {
  return { type: GET_MATCH_SUCCESS, payload: value }
}
export const getmatchfailureaction = () => {
  return { type: GET_MATCH_FAILURE }
}