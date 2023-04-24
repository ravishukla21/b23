import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searchparams, setsearchparams] = useSearchParams()
  const initialcategory = searchparams.getAll("batch");
  const [batch, setbatch] = useState(initialcategory || [])
  const handleChange = (e) => {
    let newCategory = [...batch];
    // console.log(e.taget.checked);
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value)
    } else {
      newCategory.push(value);
    }
    setbatch(newCategory);
    console.log(batch, "category");

  }
  useEffect(() => {
    let params = {
      batch
    }
    setsearchparams(params)
  }, [batch])
  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input data-testid="batch-web101" type="checkbox" onChange={handleChange} value={"WEB101"} checked={batch.includes("WEB101")} />
        <label>WEB-101</label>
        <br />
        <br />
        <input data-testid="batch-js201" type="checkbox" onChange={handleChange} value={"JS201"} checked={batch.includes("JS201")} />
        <label>JS-201</label>
        <br />
        <br />
        <input data-testid="batch-rct101" type="checkbox" onChange={handleChange} value={"RCT101"} checked={batch.includes("RCT101")} />
        <label>RCT101</label>
        <br />
        <br />
        <input data-testid="batch-rct211" type="checkbox" onChange={handleChange} value={"RCT211"} checked={batch.includes("RCT211")} />
        <label>RCT211</label>
        <br />
        <br />
        <input data-testid="batch-nxm101" type="checkbox" onChange={handleChange} value={"NXM101"} checked={batch.includes("NXM101")} />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev">Previous</button>
        <button data-testid="page-next">Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
