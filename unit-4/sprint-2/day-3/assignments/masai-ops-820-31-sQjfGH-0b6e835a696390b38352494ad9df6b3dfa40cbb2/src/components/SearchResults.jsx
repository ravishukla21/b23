const SearchResults = (props) => {
  const {arr} =props
      return (
          <table >
            <thead>

              <tr>
                <th>departure</th>
                <th>duration</th>
                <th>arrival</th>
                <th>price</th>
              </tr>
            </thead>
            {/* add columnsheadings */}
            <tbody data-testid="flight-results">
              {arr.map((el)=>{
                return <tr>
                  <th>{el.departure}</th>
                  <th>{el.duration}</th>
                  <th>{el.arrival}</th>
                  <th>{el.price}</th>
                </tr>
              })}
            
            </tbody>
          </table>
      );
    
  };
  export default SearchResults;
  