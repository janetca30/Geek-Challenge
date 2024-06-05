import { connectionAPI } from "./connectionAPI.js";

const form = document.querySelector("[data-form]");

async function createProduct(event){

  event.preventDefault();

  const image = document.querySelector("[data-image]").value;
  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const details = document.querySelector("[data-details]").value;
  
  try {
    await connectionAPI.sendProduct(image, name, parseFloat(price), details);
    
    alert("Product successfully added");

  }catch (e) {
    alert(e)
  }
}

form.addEventListener("submit", event =>createProduct(event));