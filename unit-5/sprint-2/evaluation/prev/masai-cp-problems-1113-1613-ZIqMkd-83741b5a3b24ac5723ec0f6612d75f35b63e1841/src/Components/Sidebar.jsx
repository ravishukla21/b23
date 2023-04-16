import styled from "styled-components";
import { getProducts } from "../Redux/ProductReducer/action";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [sort, setsort] = useState("")
  return (
    <DIV>
      <h3>Sort By Discount</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} onClick={(e) => {
          console.log(e.target.value, "radiobutton")

          dispatch(getProducts(e.target.value))

        }} />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onClick={(e) => {
            console.log(e.target.value, "radiobutton")

            dispatch(getProducts(e.target.value))

          }}
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
