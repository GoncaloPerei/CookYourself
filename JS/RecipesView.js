export default class RecipesView {
    constructor(root, { onRecipeSelect, onRecipeAdd, onRecipeEdit, onRecipeDelete, onRecipeSearch } = {}) {
        this.root = root;
        this.onRecipeSelect = onRecipeSelect;
        this.onRecipeAdd = onRecipeAdd;
        this.onRecipeEdit = onRecipeEdit;
        this.onRecipeDelete = onRecipeDelete;
        this.onRecipeSearch = onRecipeSearch;
        if(document.URL.includes("recipesPG.html")){
            this.root.innerHTML = `
                    <div class="first-sec">
                        <div class="first-sec-options-bar">
                            <div class="first-sec-options-bar-type-re">
                                <h1>General</h1>
                            </div>
                            <div class="first-sec-options-bar-op">
                                <div class="first-sec-options-bar-op-filter">
                                    <p class="first-sec-options-bar-op-filter-p">1 Recipes</p>
                                </div>
                                <div class="first-sec-options-bar-search">
                                    <input type="text" placeholder="Search Recipes..." id="first-sec-search-bar">
                                </div>
                            </div>
                            <div class="first-sec-options-bar-addbtn-aux">
                                <div class="first-sec-options-bar-addbtn" id="first-sec-options-bar-addbtn">
                                    <i class="bi bi-plus"></i>
                                    <p>ADD RECIPE</p>
                                </div>
                            </div>
                        </div>
                        <div class="first-sec-recipes-bar" id="recipes-bar">
                        </div>
                    </div>
                    <div class="second-sec">
                        <div class="second-sec-textarea-sec">
                            <input type="text" placeholder="Insert Title..." id="textarea-heading">
                            <textarea class="second-sec-textarea" id="editableContent" placeholder="Insert Recipe..."></textarea>
                        </div>
                    </div>
            `;
        }
        else if(document.URL.includes("browsePG.html")){
            this.root.innerHTML = `
                    <div class="browse-sec-first-sec">
                        <div class="browse-sec-search-bar">
                            <input type="text" placeholder="Search Recipes..." value="">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                    <div class="browse-sec-second-sec">
                        <div class="first-sec">
                            <div class="first-sec-recipes-bar" id="recipes-bar">
                            </div>
                        </div>
                        <div class="second-sec">
                            <div class="second-sec-textarea-sec">
                                <input type="text" placeholder="Insert Title..." id="textarea-heading" readonly>
                                <textarea class="second-sec-textarea" id="editableContent" placeholder="Insert Recipe..." readonly></textarea>
                            </div>
                        </div>
                    </div>
            `;
        }

        const btnAddRecipe = this.root.querySelector('#first-sec-options-bar-addbtn');
        const inptTitle = this.root.querySelector('#textarea-heading');
        const inptBody = this.root.querySelector('#editableContent');

        btnAddRecipe.addEventListener("click", () => {
            this.onRecipeAdd();
        });

        const searchBar = this.root.querySelector('#first-sec-search-bar');

        searchBar.addEventListener("input", e => {
            this.onRecipeSearch(searchBar.value);
        });


        [inptTitle, inptBody].forEach(inputField => {
            inputField.addEventListener("input", () => {
                const updatedTitle = inptTitle.value;
                const updatedBody = inptBody.value;

                this.onRecipeEdit(updatedTitle, updatedBody);
            });
        });

        this.updateRecipeBodyVisibility(false);
    }

    _createListItemHTML(id, title, body, updated){
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="first-sec-recipes-sec" data-note-id="${id}">
                <div class="first-sec-recipes-typedate">
                    <div class="first-sec-recipes-type">
                        <i class="bi bi-circle-fill"></i>
                        <p>General</p>
                    </div>
                    <p>${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short"})}</p>
                </div>
                <div class="first-sec-recipes-desc">
                    <h1 class="first-sec-recipes-desc-heading">${title}</h1>
                    <p>
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                    </p>
                </div>
            </div>
        `;
    }

    updateRecipeList(recipes){
        const recipesListContainer = this.root.querySelector('.first-sec-recipes-bar');

        recipesListContainer.innerHTML = "";

        for(const recipe of recipes){
            const html = this._createListItemHTML(recipe.id, recipe.title, recipe.body, new Date(recipe.updated));

            recipesListContainer.insertAdjacentHTML("beforeend", html);
        }

        recipesListContainer.querySelectorAll('.first-sec-recipes-sec').forEach(recipesList => {
            recipesList.addEventListener('click', () => {
                this.onRecipeSelect(recipesList.dataset.noteId);
            });

            recipesList.addEventListener('dblclick', () => {
                const doDelete = confirm('Are you sure you want to delete this?');

                if(doDelete){
                    this.onRecipeDelete(recipesList.dataset.noteId);
                }
            });
        });

    }

    updateActiveRecipe(recipe) {
        this.root.querySelector('#textarea-heading').value = recipe.title;
        this.root.querySelector('#editableContent').value = recipe.body;

        this.root.querySelectorAll('.first-sec-recipes-sec').forEach(recipeList => {
            recipeList.style.backgroundColor = "#F6F7FB";
        });

        this.root.querySelector(`.first-sec-recipes-sec[data-note-id="${recipe.id}"]`).style.backgroundColor = "#efefef";
    }

    updateRecipeBodyVisibility(visible) {
        this.root.querySelector('.second-sec').style.visibility = visible ? "visible" : "hidden";
    }

    updateRecipeCount(count){
        this.root.querySelector('.first-sec-options-bar-op-filter-p').innerHTML = `${count} Recipes`;
    }
}
