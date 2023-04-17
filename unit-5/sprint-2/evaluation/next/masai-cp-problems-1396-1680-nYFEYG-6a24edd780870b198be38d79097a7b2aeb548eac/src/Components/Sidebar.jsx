import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getMatches } from "../Redux/Matches/action";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [sort, setsort] = useState("")

  return (
    <DIV>
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} onClick={(e) => {
          console.log(e.target.value)
          dispatch(getMatches(e.target.value))

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
            console.log(e.target.value)
            dispatch(getMatches(e.target.value))

          }}

        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No. </h3>
      <button data-testid="previous-page">Previous</button>
      <br />
      <br />
      <button data-testid="next-page">Next</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;

  button {
    border: none;
    width: 100px;
    height: 40px;
    background-color: gray;
  }
`;
