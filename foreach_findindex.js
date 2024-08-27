const Apicall = async () => {
    try {
        let fetchapi = await fetch('https://dummyjson.com/products')
        let products_fetched = await fetchapi.json()
        // console.log(products_fetched)
        let storing_data = []
        let datacollected = products_fetched.products.forEach((categories) => {
            storing_data.push(categories.category)
        })
        // console.log(storing_data, 'stored data')
        let rem_dup = storing_data.filter( (categ, index) => {
            let check_dup =  storing_data.findIndex(item => item === categ)
        // here findindex takes fucntion as arugument 
            
            return check_dup === index
        })
        
        console.log(rem_dup, 'removed duplicates')

        // let datacollected = products_fetched.products.map((categories) => {
        //     storing_data.push(categories.category)
        // })
        // console.log(storing_data, 'stored data')

        
        // let rem_duplicates = datacollected.filter((categories, index) => {
        //     return datacollected.findIndex(categories) === index;

        // })
        // console.log(rem_duplicates)

    }
    catch (error) {
        console.log("error happened...")
    }

}
Apicall();