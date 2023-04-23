import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const initialcategory = searchparams.getAll("category")

  const [category, setcategory] = useState(initialcategory || []);
  //order
  const initialorder=searchparams.get("order")
  const [order,setorder]=useState(initialorder||"")
  const handlesort=(e)=>{
    setorder(e.target.value);
    console.log(e.target.value)
  }

  //category1
  const initialcategory1 = searchparams.getAll("category1")
  const [category1, setcategory1] = useState(initialcategory1 || [])
  const handleCategory1 = (e) => {
    const { value } = e.target;

    ///
    let newcategory1 = [...category1];
    console.log(e.target.checked);
    // const value = e.target.value;
    if (newcategory1.includes(value)) {
      newcategory1 = newcategory1.filter((el) => el !== value);

    } else {
      newcategory1.push(value);
    }
    setcategory1(newcategory1)
    console.log(category1, "category");
    // console.log(searchparams, "searchparams")

  }
  useEffect(() => {
    let params = {
      category, category1,order
    }
    setsearchparams(params)

  }, [category, category1,order])
  const handleChange = (e) => {
    let newcategory = [...category];
    console.log(e.target.checked);
    const value = e.target.value;
    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el !== value);

    } else {
      newcategory.push(value);
    }
    setcategory(newcategory)
    console.log(category, "category");
    console.log(searchparams, "searchparams")


  }

  return (
    <div>
      <p>select  by gender</p>

      <div>
        <input type="checkbox" onChange={handleChange} value={"mens"} checked={category.includes("mens")} />
        <label>mens</label>
      </div>

      <div>
        <input type="checkbox" onChange={handleChange} value={"womens"} checked={category.includes("womens")} />
        <label>womens</label>

      </div>

      <div>

        <input type="checkbox" onChange={handleChange} value={"kids"} checked={category.includes("kids")} />
        <label>kids</label>

      </div>
      <p>select by category</p>
      <div>
        <input type="checkbox" value={"topwear"} onChange={handleCategory1} checked={category1.includes("topwear")} />
        <label>topwear</label>
      </div>
      <div>
        <input type="checkbox" value={"bottomwear"} onChange={handleCategory1} checked={category1.includes("bottomwear")} />
        <label>bottomwear</label>
      </div>
      <div>
        <input type="checkbox" value={"jewelery"} onChange={handleCategory1} checked={category1.includes("jewelery")} />
        <label>jewelery</label>
      </div>
      <div>
        <input type="checkbox" value={"electronics"} onChange={handleCategory1} checked={category1.includes("electronics")} />
        <label>electronics</label>
      </div>

      <p>sort by--price</p>
      <div onChange={handlesort}>
        <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"} />
        <label>asc</label>
     
        <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"}/>
        <label>desc</label>
        <input type="radio" name="order" value={"reset"} defaultChecked={order==="reset"}/>
        <label>reset</label>
      </div>


    </div>
  )
}

export default Sidebar  