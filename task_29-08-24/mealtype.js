const fetch_recipe_API =async ()=>{
    try
    {
    let Apicall = await fetch('https://dummyjson.com/recipes')
    let recipesfetched = await Apicall.json();
    console.log(recipesfetched);
    let mealtype_filter_lunch=[]
    let mealtype_filter_dinner=[]
    let mealtype_filter_breakfast=[]
     let mealtype_filter_dessert=[]
    let mealtype_filter_snack=[]
    let mealtype_filter_beverage=[]
    let mealtype_filter_sidedish=[]
   let mealtype_filter= recipesfetched.recipes.forEach((mealitem) => {
        if (mealitem.mealType.includes('Breakfast')) {
          mealtype_filter_breakfast.push(mealitem);
        }
        else if(mealitem.mealType.includes('Lunch')){
            mealtype_filter_lunch.push(mealitem)
        }
        else if (mealitem.mealType.includes('Dinner')){
            mealtype_filter_dinner.push(mealitem)
        }
        else if(mealitem.mealType.includes('Dessert')){
            mealtype_filter_dessert.push(mealitem)
        }
        else if(mealitem.mealType.includes('Snack')){
            mealtype_filter_snack.push(mealitem)
        }
        else if(mealitem.mealType.includes('Side Dish')){
            mealtype_filter_sidedish.push(mealitem)
        }
        else if(mealitem.mealType.includes('Beverage')){
            mealtype_filter_beverage.push(mealitem)
        }
      });
     console.log(mealtype_filter_breakfast, 'breakfast filtered');
     console.log(mealtype_filter_lunch,'lunch filtered')
     console.log(mealtype_filter_beverage,'beverage filtered');
     console.log(mealtype_filter_dessert,'dessert filtered');
     console.log(mealtype_filter_sidedish,'side dish filtered');
     console.log(mealtype_filter_snack,'snack filtered');
     
    }
     catch(error){
        console.log('error occured');
        
     }
}
fetch_recipe_API()
