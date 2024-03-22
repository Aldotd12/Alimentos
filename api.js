const URL_API='https://alimentosdb.onrender.com'
export const getProducts=async()=>{
    const products=await fetch(URL_API);
    return await products.json();
}
export const deleteProduct=async(barcode)=>{
    const res=await fetch(URL_API+barcode,{
        method:"DELETE",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
        }
    })
    return await res.json();
}
export const insertProduct=async(product)=>{
    const res=await fetch(URL_API,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
           
        },
        body:JSON.stringify(product)
    });
    return await res.json();
}

export const updateProduct = async (product) => {
    const res = await fetch(`${URL_API}${product.barcode}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return await res.json();
  };