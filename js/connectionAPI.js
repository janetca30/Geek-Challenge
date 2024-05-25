async function listProducts(){
  const connection = await fetch("http://localhost:3001/products");
  
  const convertedConnection = connection.json();
  
  return convertedConnection;
}

export const connectionAPI = {
  listProducts
};
