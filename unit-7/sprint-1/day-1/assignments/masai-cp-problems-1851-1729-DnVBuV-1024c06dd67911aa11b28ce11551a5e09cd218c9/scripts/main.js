// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const pitchURL = `${baseServerURL}/pitches`;
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//fetch
let pitchdata = [];
let carddiv = document.createElement("div");
carddiv.className = "card-list";
mainSection.append(carddiv);

async function getData() {
  let res = await fetch(pitchURL);
  let data = await res.json();

  displaydata(data);
}

getData();

function displaydata(data) {
  console.log(data);
  carddiv.innerHTML = data.forEach((el, index) => {
    console.log(el.id);
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-id", el.id);

    let imagediv = document.createElement("div");
    imagediv.className = "card-img";
    let image = document.createElement("img");
    image.src = el.image;
    imagediv.append(image);

    let inbody = document.createElement("div");
    dispatchEvent.className = "card-body";
    let title = document.createElement("h4");
    title.className = "card-title";
    title.innerText = el.title;

    let founder = document.createElement("p");
    founder.className = "card-founder";
    founder.innerText = el.founder;
    let category = document.createElement("p");
    category.className = "card-category";
    category.innerText = el.category;
    let price = document.createElement("p");
    price.className = "card-price";
    price.innerText = el.price;

    let eedit = document.createElement("a");
    eedit.href = "#";
    eedit.setAttribute("data-id", el.id);
    eedit.className = "card-link";
    eedit.innerText = "Edit";

    eedit.addEventListener("click", (e) => {
      e.preventDefault();
    });

    let deletebut = document.createElement("button");
    deletebut.setAttribute("data-id", el.id);
    deletebut.className = "card-button";
    deletebut.innerText = "Delete";

    deletebut.addEventListener("click", (e) => {
      e.preventDefault();
    });
    inbody.append(title, founder, category, price, eedit, deletebut);
    card.append(imagediv, inbody);
    carddiv.append(card);
  });
}
