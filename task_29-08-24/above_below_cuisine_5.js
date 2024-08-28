//>5 ingredients and <5 ingredients need to be in a separate array hint: using .length find how many are there and store them in respective arrays.
const fetch_recipe_API = async () => {
    try {
        let Apicall = await fetch('https://dummyjson.com/recipes')
        let recipesfetched = await Apicall.json()
       // console.log(recipesfetched.recipes[0].ingredients)
        let above10_ingredients = []
        let below10_ingredients = []
        let fun_above_below = recipesfetched.recipes.map(item => {
            if (item.ingredients.length > 10) {
                above10_ingredients.push(item.ingredients)
            }
            else {
                below10_ingredients.push(item.ingredients)
            }
        })
        console.log(above10_ingredients,"are the above 10 ingredients recipes");
        console.log(below10_ingredients,'"are the below 10 ingredients recipes"')    
    }
       
        
    catch {
        console.log("error occured...");

    }
}
fetch_recipe_API();