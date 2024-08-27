 const Apicall = async ()=>{
    try{let  fetchedapi = await fetch('https://dummyjson.com/products')
    let productsfetched = await fetchedapi.json();
    // console.log(productsfetched)
    let discount_items =[]
    let nondiscount_items =[]


    let everycheckdiscount = await productsfetched.products.every(discount_check => 
        {if(discount_check.discountPercentage){
            discount_items.push(discount_check)
            return true;
            //console.log('items which have discount')
        }else{
            nondiscount_items.push(discount_check)
            //console.log("items which  don't have discount")}
            return false;
        }
    })
    console.log(everycheckdiscount,'all items ')
    console.log(discount_items, 'discount items');
    console.log(nondiscount_items, 'non-discount items')
    
}
    catch(error){
      console.log('error happened....');
        
    }
 }
 Apicall();