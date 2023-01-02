function RestaurantCard({ name, image, type, rating, price_starts_from, number_of_votes }) {
  return (
    <div data-testid="restaurant-card" >
      <div key={name} style={{ border: "1px solid black", borderRadius: "30px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", margin: "25px", gap: "20px" }}>
        <div>
          <img style={{ width: "auto", borderRadius: "30px" }} src={image} alt={name} width="300px" height="300px" />
        </div>
        <div>
          <h6>Name:{name}</h6>
          <h6>Type:{type}</h6>
          <h6>Price:{price_starts_from}</h6>
          <h6>Rating:{rating}</h6>
          <h6>Votes:{number_of_votes}</h6>
        </div>



      </div>

    </div>
  );
}

export default RestaurantCard;
