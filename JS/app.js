import RecipesAPI from "./RecipesAPI.js";
import RecipesView from "./RecipesView.js";


export default class App{
    constructor(root){
        this.recipes = [];
        this.activeRecipe = null;
        this.view = new RecipesView(root, this._handlers());

        this._refreshRecipes();
    }

    _refreshRecipes(){
        const recipes = RecipesAPI.getAllRecipes();
        this._setRecipes(recipes);
        this._setActiveRecipe(recipes[0]);
    }

    _setRecipes(recipes){
        this.recipes = recipes;

        this.view.updateRecipeList(recipes);
        this.view.updateRecipeBodyVisibility(recipes.length > 0);
        this.view.updateRecipeCount(recipes.length);
    }

    _setActiveRecipe(recipe){
        try{
            this.activeRecipe = recipe;
            this.view.updateActiveRecipe(recipe);
        }
        catch(e){}
    }

    _handlers(){
        return {
            onRecipeSelect: recipeId => {
                const selectedRecipe = this.recipes.find(recipe => recipe.id == recipeId);
                this._setActiveRecipe(selectedRecipe);
            },
            onRecipeAdd: () => {
                const newRecipe = {
                    title: "New Recipe",
                    body: "New Recipe..."
                };

                RecipesAPI.saveRecipe(newRecipe);
                this._refreshRecipes();
            },
            onRecipeEdit: (title, body) =>{
                RecipesAPI.saveRecipe({
                    id: this.activeRecipe.id,
                    title,
                    body
                });
                this._refreshRecipes();
            },
            onRecipeDelete: recipeId => {
                RecipesAPI.deleteRecipe(recipeId);
                this._refreshRecipes();
            },
            onRecipeSearch: recipeTitle => {
                if(recipeTitle != ''){
                    this._refreshRecipes();
                    const searchedRecipe = this.recipes.filter(recipe => recipe.title.includes(recipeTitle));
                    return this._setRecipes(searchedRecipe);
                }
                this._refreshRecipes();
            }
        };
    }
}