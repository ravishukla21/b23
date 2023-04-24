import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

export const Sidebar = () => {

  const [searchparams,setsearchparams]=useSearchParams();
  const initialcategory=searchparams.getAll("category")
  const [category,setcategory]=useState(initialcategory||[]);
  //sort 
  const initialorder=searchparams.get("sort")
  const [sort,setsort]=useState(initialorder||"");
  const handleSort=(e)=>{
    setsort(e.target.value);
  }

  const handleChange=(e)=>{
    let newCategory=[...category];
    const value=e.target.value;
    if(newCategory.includes(value)){
      newCategory=newCategory.filter((el)=>el!==value);
    }else{
      newCategory.push(value);
    }
    setcategory(newCategory);
  }
  useEffect(()=>{
    let params={
      category
    }
    sort && (params.sort=sort)
    setsearchparams(params)
   
  },[category,sort])

  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input data-testid="novel-filter" type="checkbox" value={"Novel"}  onChange={handleChange} checked={category.includes("Novel")}/>
        <label>Novel</label>
        <br />
        <input
          data-testid="science-fiction-filter"
          type="checkbox"
          value={"Science_Fiction"} onChange={handleChange}
          checked={category.includes("Science_Fiction")}
        />
        <label>Science Fiction</label>
        <br />
        <input
          data-testid="thriller-filter"
          type="checkbox"
          value={"Thriller"} onChange={handleChange}
          checked={category.includes("Thriller")}
        />
        <label>Thriller</label>
        <br />
        <input
          data-testid="motivational-filter"
          type="checkbox"
          value={"Motivational"} onChange={handleChange}
          checked={category.includes("Motivational")}
        />
        <label>Motivational</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Release Year</h3>
      <div onChange={handleSort}>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} 
        defaultChecked={sort==="asc"}  />
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"} 
          defaultChecked={sort==="desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
