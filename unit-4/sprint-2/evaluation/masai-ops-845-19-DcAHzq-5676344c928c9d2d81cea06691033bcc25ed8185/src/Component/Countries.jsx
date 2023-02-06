import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const getData = (url) => {
  return fetch(url).then((res) => res.json())
}

function Countries() {
  const [arr1, setArr1] = useState([])
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)
 
  const [totalpages, setTotalPages] = useState(0)


  let topages = 0
  const fetchData = async (pages) => {
    setLoading(true)
    try {
      let data = await getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${pages}&limit=10`)
      setArr1(data.data)
      console.log(data.data)

      setTotalPages(data.totalPages)
      setLoading(false)
    } catch (error) {
     
      
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(pages)
  }, [pages])
  if (loading) {
    return <LoadingIndicator />;
  } else {
    return (
      <div>
        <h1 data-testid="countries-header">Countries List</h1>
        <div data-testid="countries-container">
          {/* Countries Card */}
          {arr1.map((el)=>{
            return <CountriesCard key={el.id} country={el.country} population={el.population}/>
          })}
        </div>
        <div>
          {/* Pagination */}
          <Pagination current={pages} onChange={(val)=>setPages(val)} total={totalpages}/>
        </div>
      </div>
    );

  }




}

export default Countries;
