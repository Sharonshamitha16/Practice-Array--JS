const Async_array_function = async()=>{
    try{
    let  fetchapi = await fetch('https://dummyjson.com/products')
    let products_fetched = await fetchapi.json()
    //console.log(products_fetched.products);
    
    let discounted_array=[]
    let fun_discount =   products_fetched.products.map((discount_products)=>{
         discount_products.price=discount_products.price-2.00
         discounted_array.push(discount_products)
        })
    console.log(discounted_array);


    }
    catch(error){
        console.log("error happened....")
    }

 }
 Async_array_function();