// const Apicall = async () => {
//     try {
//         let fetchapi = await fetch('https://dummyjson.com/products')
//         let products_fetched = await fetchapi.json()
//         // console.log(products_fetched)
//         let storing_data = []
        
//         let datacollected =await products_fetched.products.map((categories) => {
//             storing_data.push(categories.category)
//         })
//         console.log(storing_data, 'stored data')

//          let dupdata_rem =[]
//         let rem_duplicates = await storing_data.filter((categories) => {
           
//              if(!dupdata_rem.includes(categories)){
//                 dupdata_rem.push(categories)
               
//              }
             
//         })
//         console.log(dupdata_rem,'dup rem')

//     }
//     catch (error) {
//         console.log("error happened...")
//     }

// }
// Apicall();




const Apicall1 = async () => {
    try {
        let fetchapi = await fetch('https://dummyjson.com/products')
        let products_fetched = await fetchapi.json()
       
        // let storing_data = []
        let dupdata_rem=[]
        let datacollected =await products_fetched.products.map( (cat) => {
           let notincludes_dup =  dupdata_rem.includes(cat.category)
           console.log(notincludes_dup);
           
             if(notincludes_dup ==false){
                dupdata_rem.push(cat.category)  
             }
            })
        console.log(dupdata_rem,'dup rem')

    }
    catch (error) {
        console.log("error happened...")
    }

}
Apicall1();