const Async_array_function = async()=>{
    try{
    let  fetchapi = await fetch('https://dummyjson.com/products')
    let products_fetched = await fetchapi.json()
    //console.log(products_fetched.products);
    
    let above$10_array=[]
    let below$10_array=[]
    let fun_above_below =   await products_fetched.products.filter((abovedollar)=>{
        if(abovedollar.price>10){
            above$10_array.push(abovedollar)
        }
        else{
              below$10_array.push(abovedollar)
        }
    })
    console.log(above$10_array,'above $10');
    console.log(below$10_array,'below $10');


    }
    catch(error){
        console.log("error happened....")
    }

 }
 Async_array_function();