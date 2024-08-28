// const Apicall = async () => {
//     try {
//         let fetchapi = await fetch('https://dummyjson.com/products')
//         let products_fetched = await fetchapi.json()
//         // console.log(products_fetched)
//         let storing_data = []
//         let datacollected = products_fetched.products.forEach((categories) => {
//             storing_data.push(categories.category)

//         })
//         // console.log(storing_data, 'stored data')
//         let rem_dup = storing_data.filter((categ, index) => {
//             let check_dup = storing_data.findIndex(item => item === categ)
//             // this checks the category in storing data and element  this checks the current postion  and the position of index already assigned to the value 
//             // here findindex takes fucntion as arugument 
//             console.log(check_dup)

//             return check_dup === index

//         })

//         console.log(rem_dup, 'removed duplicates')

//         // let datacollected = products_fetched.products.map((categories) => {
//         //     storing_data.push(categories.category)
//         // })
//         // console.log(storing_data, 'stored data')


//         // let rem_duplicates = datacollected.filter((categories, index) => {
//         //     return datacollected.indexOf(categories) === index;

//         // })
//         // console.log(rem_duplicates)

//     }
//     catch (error) {
//         console.log("error happened...")
//     }

// }
// Apicall();



const Apicall = async () => {
    try {
        let fetchapi = await fetch('https://dummyjson.com/products')
        let products_fetched = await fetchapi.json()
        let storing_data = []
        let datacollected = products_fetched.products.forEach(categories => {
        let findindex =storing_data.findIndex(e=>e==categories.category)
        // console.log(findindex);
        if (findindex===-1){
            storing_data.push(categories.category)
        }
        })
        console.log(storing_data)
    }
    catch (error) {
        console.log("error happened...")
    }
}
Apicall();