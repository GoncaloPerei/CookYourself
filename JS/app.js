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
        try{
            const recipes = RecipesAPI.getAllRecipes();
            this._setRecipes(recipes);
        }
        catch(e){console.log(e);}

    }

    _setRecipes(recipes){
        try{
            this.recipes = recipes;
        }
        catch(e){console.log(e);}

        try{
            this.view.updateRecipeList(recipes);
        }
        catch(e){console.log(e);}

        try{
            this.view.updateRecipeBodyVisibility(recipes.length > 0);
        }
        catch(e){console.log(e);}

        try{
            this.view.updateRecipeCount(recipes.length);
        }
        catch(e){console.log(e);}

        try{
            this._setActiveRecipe(recipes.find(recipe => recipe.id = this.activeRecipe.id));
        }
        catch(e){console.log(e);}
    }

    _setActiveRecipe(recipe){
        try{
            this.activeRecipe = recipe;
        }
        catch(e){console.log(e);}

        try{
            this.view.updateActiveRecipe(recipe);
        }
        catch(e){console.log(e);}
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
                try{
                    RecipesAPI.saveRecipe({
                        id: this.activeRecipe.id,
                        title,
                        body
                    });
                    this._refreshRecipes();
                }
                catch(e){console.log(e);}
            },
            onRecipeDelete: recipeId => {
                RecipesAPI.deleteRecipe(recipeId);
                this._refreshRecipes();
            },
            onRecipeSearch: recipeTitle => {
                if(recipeTitle.value != ''){
                    this._refreshRecipes();
                    const searchedRecipe = this.recipes.filter(recipe => recipe.title.includes(recipeTitle.value));
                    return this._setRecipes(searchedRecipe);
                }
                
                this._refreshRecipes();
            }
        };
    }
}