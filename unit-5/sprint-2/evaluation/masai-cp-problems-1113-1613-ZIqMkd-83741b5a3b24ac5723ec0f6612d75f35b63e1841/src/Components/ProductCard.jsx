export const ProductCard = ({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) => {
  console.log(id,title,images,"id")
  // {
  //   "id": 1,
  //   "title": "iPhone 9",
  //   "description": "An apple mobile which is nothing like apple",
  //   "price": 549,
  //   "discountPercentage": 12.96,
  //   "rating": 4.69,
  //   "stock": 94,
  //   "brand": "Apple",
  //   "category": "smartphones",
  //   "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //   "images": [
  //     "https://i.dummyjson.com/data/products/1/1.jpg",
  //     "https://i.dummyjson.com/data/products/1/2.jpg",
  //     "https://i.dummyjson.com/data/products/1/3.jpg",
  //     "https://i.dummyjson.com/data/products/1/4.jpg",
  //     "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  //   ]
  // }

  return (
    <div className="product-card" key={id}>

      <img  className="product-image" src={images[0]}/>
      <h1 className="product-title">{title}</h1>
      <p className="product-brand">{brand}</p>
      <p className="product-price">{price}</p>
      <p className="product-discount">{discountPercentage} </p>
      <button className="add-to-cart">Add To Cart</button>

      {/* - Every product card will have a `add to cart` button with class `add-to-cart`
       - Show image in image tag with class `product-image` 
       - Show title with class `product-title` 
       - Show brand in p tag with class `product-brand` 
       - Show price in p tag with class `product-price` 
       - Show discount in p tag with class `product-discount` 
       * Do not add any extra text, only response values should be present * 
       * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}
    </div>
  );
};
