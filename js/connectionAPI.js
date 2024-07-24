async function listProducts(){
  const connection = await fetch("https://my-json-server.typicode.com/janetca30/geek-api/products");
  
  const convertedConnection = await connection.json();
  
  return convertedConnection;
}

async function sendProduct(image, name, price, details ){
  const connection = await fetch("https://my-json-server.typicode.com/janetca30/geek-api/products", {
    method: "POST",
    headers: {"Content-type": "application/json"}, 
    body: JSON.stringify({
      image: image,
      name: name,
      price: parseFloat(price).toFixed(2),
      details: details,
    })
  });  

  if(!connection.ok){
    throw new Error("An error occurred while shipping the product");
  }
  const convertedConnection = await connection.json();
  return convertedConnection;
}

async function lookingForProducts(keyword){
  const connection = await fetch (`https://my-json-server.typicode.com/janetca30/geek-api/products?q=${keyword}`);
  const convertedConnection = connection.json();
  return convertedConnection
}

export const connectionAPI = {
  listProducts, sendProduct, lookingForProducts
};
