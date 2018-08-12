function howManyServings (params) {
  const {recipe, inventory} = params

  // If recipe or inventory is undefined, don't proceed further
  if(typeof recipe === 'undefined' || typeof inventory === 'undefined'){
    return 0;
  }

  let servings = Number.MAX_VALUE;

  for(let ingredient in recipe){

    let quantity = recipe[ingredient];

    // If quantity of ingredient required for recipe is zero, essentialy skip
    if(quantity === 0){
      continue;
    }

    // If recipe ingredient is not present in inventory, nothing can be served
    if(!(ingredient in inventory) || inventory[ingredient] === 0){
      return 0;
    }

    // Core logic to calculate servings size for each ingredient and
    // taking the minimum of all, with assumption that servings can't
    // be partial
    let ingredient_serving = Math.floor(inventory[ingredient]/quantity);
    servings = Math.min(servings, ingredient_serving);

  }

  return servings;
}

module.exports = {howManyServings}
