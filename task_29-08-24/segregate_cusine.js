//using recipes API...need to find how many cuisines there are in that API, which should be stored in a new array without replications.

const fetch_recipe_API = async () => {
    try {
        let Apicall = await fetch('https://dummyjson.com/recipes')
        let recipesfetched = await Apicall.json()
        //console.log(recipesfetched.recipes[0].cuisine)

        let allcuisines = []

        let cuisinetaken = recipesfetched.recipes.forEach(item => {

            let rem_dup = allcuisines.findIndex(e => e == item.cuisine)

            if (rem_dup === -1) {
                allcuisines.push(item.cuisine)
            }
        })

        // let cuisinetaken = allcuisines.map((item, index)=>{
        //     let rem_dup = allcuisines.indexOf(item.cuisine) ===index;
            
            
        // })
        // console.log(rem_dup);
        
        console.log(allcuisines);

    }
    catch (error) {
        console.log('error occured...!!')
    }


}

fetch_recipe_API();