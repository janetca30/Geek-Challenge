import { connectionAPI } from "./connectionAPI.js";

const listElectro = document.querySelector("[data-list-electro]");

export default function createCard(image, name, price, details) {
  const product = document.createElement("li");
  product.className = "product-item";
  product.innerHTML = `
  <div class="card-product">
    <img src="${image}" alt="${name}">
    <div class="detail-product">
      <h3>${name}</h3>
      <h5>${details}</h5>
      <span>Price: $ ${price.toFixed(2)}</span>
    </div>
  </div>`;

  return product;
}

async function listProducts() {
  try {
    const listAPI = await connectionAPI.listProducts();

    if (!listAPI || !Array.isArray(listAPI) || listAPI.length === 0) {
      throw new Error("No products found");
    }

    // Iterate over the products in the "electro" category
    const electroCategory = listAPI.find(category => category.category === "electro");

    if (!electroCategory || !electroCategory.items || electroCategory.items.length === 0) {
      throw new Error("No products found in the 'electro' category");
    }

    electroCategory.items.forEach(product => 
      listElectro.appendChild(
        createCard(product.image, product.name, product.price, product.details)
      )
    );

  } catch (error) {
    console.error(error);
    listElectro.innerHTML = `<h2 class="message-error">Error: problem with connection :(</h2>`;
  }
}

listProducts();
