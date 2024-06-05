import { connectionAPI } from "./connectionAPI.js";

const list = document.querySelector("[data-list]");

export default function createCard(image, name, price, details) {
  const product = document.createElement("li");
  product.className = "product-item";
  product.innerHTML = `
  <div class="card-product">
    <img src="${image}" alt="${name}">
    <div class="detail-product">
      <h3>${name}</h3>
      <h5>${details}</h5>
      <span>Price: $ ${Number(price).toFixed(2)}</span>
      <button class="delete-button">
        <img src="../images/garbage.png" alt="delete-button">
      </button>
    </div>
  </div>`;

  const deleteButton = product.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    product.remove();
  });

  return product;
}

async function listProducts() {
  try {
    const listAPI = await connectionAPI.listProducts();

    listAPI.forEach(product =>list.appendChild(
        createCard(product.image, product.name, product.price, product.details)));

  } catch {
    list.innerHTML = `<h2 class="message-error">Error: problem with connection :(</h2>`;
  }
}

listProducts();
