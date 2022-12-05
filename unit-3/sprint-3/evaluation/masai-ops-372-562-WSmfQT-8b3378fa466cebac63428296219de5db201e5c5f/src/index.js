import fetch from "isomorphic-fetch";

// 1.
// the following function getProducts() should return a promise that
// resolves to product items
// request url: https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products
// hint1: whatever you return from an async function is a promise that resolves to the value that you return
// hint2: the actual array that we need may be nested within response json. for example {data: [...]}
let newsorted
async function getProducts() {
  // 1. your code here.
  let users = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //console.log(data.data);
      newsorted = data.data
      return (data.data);

    })
  return users;

}

//getProducts().then((data) => console.log(JSON.stringify(data, null, 2)));

// 2.
// the function getProductsSortedByPrice should return a promise that
// resolves to all products sorted by price in ascending order (low to high)
// use the getProducts() function here to fetch all products

async function getProductsSortedByPrice() {
  // 2. your code here.
  // getProducts().then((data) =>{
  // data.sort((a,b)=>{
  //   return a.price-b.price;
  // })
  // console.log("jig",data)

  // });
  // let sorted = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
  // .then((res) => {
  //   return res.json();
  // })
  let sorted = getProducts()
    .then((data) => {
     
      data.sort((a, b) => {
        return a.price - b.price;
      })
      //console.log("jig",data)
      return (data);

    })
  return sorted;



}

// getProductsSortedByPrice().then((data) =>
//   console.log(JSON.stringify(data, null, 2))
// );

// 3.
// the getWellFormattedData() should return a promise that
// resolves to an object with `brand` as keys and an `array of product ids` as value.
// for example, if product 6,7,8,9 & 10 band is Apple, the property Apple would look like
// Apple: [6,7,8,9,10],
// Example result:
/*
  {
    Zebronics: [1,2,3,4,5],
    Apple: [6,7,8,9,10],
    HP: [11,12,13,14,15],
    Dell: [16]
  }
*/
// use the getProducts() function here to fetch all products
// hint: we are changing the shape/structure of the original array
// hint: we are reducing an array down to an object.

async function getWellFormattedData() {
  // 3. your code here.
  let change123 = getProducts()
    .then((data) => {

      
      let obj = {};
      data.forEach(elem => {
        console.log("jugjug",elem)
       
        if (obj[elem.brand] == undefined) {
          obj[elem.brand] = []
        }
        if(obj[elem.brand]!=undefined){
          obj[elem.brand].push(elem.id)
        }
       

      });
      console.log("fgrgdgx",obj)

      return obj;





    })
  return change123;
}

// getWellFormattedData().then((data) => console.log(JSON.stringify(data)));

export { getProducts, getProductsSortedByPrice, getWellFormattedData };
