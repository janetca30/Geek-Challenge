import { connectionAPI } from "./connectionAPI.js";
import createCard from "./showProducts.js";

async function filterProducts(event) {
  event.preventDefault();

  const dataSearch = document.querySelector("[data-search]").value;
  const searchProduct = await connectionAPI.lookingForProducts(dataSearch);
  console.log(searchProduct);

  const list = document.querySelector("[data-list]");
      console.log(list);
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  searchProduct.forEach(product => list.appendChild(createCard(product.image, product.name, product.price, product.details)));

  if (searchProduct.length == 0) {
    list.innerHTML = `<h2 class="message-title">No elements were found for ${dataSearch}</h2>`
  }
  
}

const button = document.querySelector("[data-button-search]");

button.addEventListener("click", event => filterProducts(event))