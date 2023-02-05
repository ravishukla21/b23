import React from "react";
// import { useEffect } from "react";
import { useState,useEffect } from "react";
import SearchResults from "./SearchResults";



export const fetchData = async () => {


  let res = await fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`)
  let out = await res.json()
  console.log(out)
  return out
}




function FlightSearch() {
  // on page load fetch the data (useEffect)
  const [flights, setflights] = useState([])
  //let source = "seattle"
  // let destination = "florida"
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)
  const [destination, setdestination] = useState([])
  const [text1, settext1] = useState("")
  const [text2, settext2] = useState("")



  const fetchdd = async () => {
    try {
      const data = await fetchData()
      setflights(data)
    } catch (err) { console.log(err) }
  }
  useEffect(() => {
    fetchdd()
  }, [])
  const handlechange1 = (e) => {
    settext1(e.target.value)
  }
  const handlechange2 = (e) => {
    settext2(e.target.value)
  }




  const handleSearch = (text1, text2) => {
    let a = flights.filter((el) => {
      return el.source === text1 && el.destination === text2
    })
    console.log(a)

    setflights(a)
    { a.length == [] ? setloading(false) : setloading(true) }
    { loading ? console.log("aaaa") : console.log("ggg") }
  };



  return (
    <div>
      <div>

      </div>
      <div>

        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source"
            onChange={handlechange1} value={text1} />
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" value={text2} onChange={handlechange2} />
          <br /> <br />
          <button onClick={() => handleSearch(text1, text2)} data-testid="search-button">Search</button>
          {/* onClick={fetchData} */}
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      <div data-testid="no-flights" className="">
        {loading ? <SearchResults arr={flights} /> : "No Flights Found"}




      </div>
    </div>
  );
}


export default FlightSearch;
