import { useState } from "react";

function Pagination() {
  const[page,setPage]=useState(1);
  return (
  <div data-testid = "page-container">

   <button disabled={page==1} onClick={()=>setPage(page-1)}>Previous</button>
   <button >{page}</button>
   <button disabled={page==0} onClick={()=>setPage(page+1)}>Next</button>
  
  </div>
 
  );
}

export default Pagination;
