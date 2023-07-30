export default class RecipesAPI{
    static getAllRecipes(){
        const recipes = JSON.parse(localStorage.getItem("recipesapp-recipes") || "[]");

        return recipes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveRecipe(recipeToSave){
        const recipes = RecipesAPI.getAllRecipes();
        const existing = recipes.find(recipe => recipe.id == recipeToSave.id);

        if(existing){
            existing.title = recipeToSave.title;
            existing.body = recipeToSave.body;
            existing.updated = new Date().toISOString();
        } else{
            recipeToSave.id = Math.floor(Math.random() * 1000000);
            recipeToSave.updated = new Date().toISOString();
            recipes.push(recipeToSave);
        }


        localStorage.setItem("recipesapp-recipes", JSON.stringify(recipes));
    }

    static deleteRecipe(id){
        const recipes = RecipesAPI.getAllRecipes();
        const newRecipes = recipes.filter(recipe => recipe.id != id);

        localStorage.setItem("recipesapp-recipes", JSON.stringify(newRecipes));
    }
}