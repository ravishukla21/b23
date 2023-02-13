import { useState, useEffect } from "react"

const getData = (url) => {
  return fetch(url).then((res) => res.json())
}
function SingleRestaurantPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [users, setUsers] = useState({})

  // const fetchAndUpdateData = () => {
  //   setLoading(true);
  //   getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=10").then((res) => { setUsers(res) }).catch((err) => { setError(true) }.finally(() => { setLoading(false) }))
  // }
  const fetchAndUpdateData=()=>{
    setLoading(true)
    getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=10")
    .then((res)=>{setUsers(res)})
    .catch((err)=>{setError(err)})
    .finally(()=>{setLoading(false)})
  }


  useEffect(() => {
    fetchAndUpdateData()
  }, [])
  return loading ? (<h1>Loading...</h1>) : error ? (<h1>Something wrong</h1>) : (<>

    {
      users.data.map((user) => {
        <div data-testid="restaurant-container">

          <div>
            <h3 data-testid="restaurant-name"></h3>
          </div>
          <div data-testid="restaurant-type">Type:{user.type}</div>
          <div data-testid="restaurant-rating">Rating:{user.rating}</div>
          <div data-testid="restaurant-votes">Votes:{user.number_of_votes}</div>
          <div data-testid="restaurant-price">Starting Price:{user.price_starts_from}</div>
          <div>
            <img data-testid="restaurant-image" width={"100px"} src={user.image} alt={user.image}/>
          </div>
        </div>

      })
    }
  </>

  );
}
export default SingleRestaurantPage;
