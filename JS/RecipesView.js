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
                            <input type="text" placeholder="Search Recipes..." value="" id="browse-search-bar">
                            <i class="bi bi-search" id="browse-search-bar-ico"></i>
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
        else if(document.URL.includes("index.html")){
            this.root.innerHTML = `
                <div class="home-sec-background-wave">
                    <img src="../IMAGES/Vector.svg" alt="">
                </div>
                <div class="home-sec-background-chef">
                    <img src="../IMAGES/chef-illustration.png" alt="">
                </div>
                <div class="home-sec-wrapper">
                    <div class="home-sec-head-text">
                        <svg width="77" height="67" viewBox="0 0 77 67" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.5824 49.3508C47.4852 46.7358 43.0217 45.7891 38.519 44.9179C36.9283 44.6101 34.8749 44.9616 34.0449 42.1469C39.9313 42.207 45.1762 44.0815 50.5385 45.1121C51.2079 39.7085 49.196 37.5678 43.7055 36.6997C38.1249 35.8174 32.9573 36.7517 27.9021 39.0966C23.5694 41.1063 19.3621 40.6098 15.7775 37.4914C12.2031 34.382 11.3108 30.1932 12.243 25.631C12.9639 22.1033 15.5068 20.4341 18.743 19.5418C22.1577 18.6003 25.8215 18.601 29.0103 16.7969C29.2209 16.6778 29.5933 16.5422 29.7292 16.6403C32.1754 18.4067 33.4685 16.1512 34.8659 14.994C43.0951 8.17888 53.2558 13.4276 53.8973 22.3682C53.9136 22.5945 54.1266 22.8066 54.3138 23.1442C56.6053 22.9434 58.8343 21.9029 61.2543 22.4981C63.1342 22.9604 64.5738 23.8859 65.329 25.6313C66.7269 28.8621 67.5066 32.2514 65.305 35.3816C62.9537 38.7243 59.7587 40.7562 55.4732 39.659C53.1249 39.0578 52.9359 40.0027 53.0714 41.98C53.2566 44.6839 53.1176 47.4102 53.1176 50.1662C52.4096 50.5198 52.1664 49.7672 51.5824 49.3508ZM52.454 31.2428C54.3957 30.2074 53.7413 31.9757 53.864 32.6683C53.9839 33.3451 53.3152 34.0343 54.101 34.7677C56.107 36.64 59.6432 36.1357 62.2967 33.4999C64.5307 31.2807 64.8027 28.4327 62.8155 26.4597C60.9887 24.6459 58.7405 24.7519 56.3962 25.2921C54.9959 25.6147 53.966 26.8343 52.4332 26.893C52.3314 26.5701 52.1492 26.3087 52.2001 26.1068C53.1717 22.2507 50.8491 19.8585 48.1934 18.0001C45.4175 16.0575 42.2337 15.6239 39.1135 17.6041C37.8249 18.4219 36.5308 19.2322 35.2207 20.0144C31.8568 22.0231 28.3407 23.564 24.246 23.642C24.0508 22.8103 23.8852 22.1048 23.7213 21.4065C16.5984 22.9042 14.3997 24.9887 14.9038 29.5725C15.3336 33.4797 19.3683 36.2147 23.098 35.461C22.4494 33.4351 20.4255 31.7824 21.086 29.3215C21.9748 29.46 22.2731 30.0136 22.6496 30.4538C25.001 33.2031 27.6327 34.7386 31.3086 32.8661C32.2574 32.3828 33.4301 32.2571 34.5174 32.1543C36.7122 31.9468 38.6915 31.5382 39.2457 28.5543C39.6939 30.9583 40.8336 32.5138 43.1359 32.2212C46.6384 31.776 45.1525 28.0113 46.8017 26.2498C47.9151 27.2218 47.4721 28.6328 47.8177 29.8143C48.1284 30.8767 47.5657 32.3972 49.1194 32.8577C50.4614 33.2554 51.3317 32.3075 52.454 31.2428Z"/>
                            <path d="M23.9466 49.7293C23.9905 47.7699 23.5922 45.9773 24.3582 44.3555C25.5068 44.3844 25.2195 45.5181 26.0277 45.7897C26.1364 45.7811 26.4037 45.8197 26.6225 45.7336C30.2827 44.293 33.714 44.4366 37.4119 46.1476C41.3755 47.9815 45.4946 49.7602 50.0336 49.7958C51.3558 49.8061 51.8595 50.4602 51.6236 51.7949C50.5955 52.4574 49.4191 52.5361 48.2477 52.6759C47.6752 52.7442 46.7558 52.7931 46.6124 53.1231C45.2576 56.2391 42.2556 55.7618 39.8597 56.0801C35.8125 56.6179 31.7428 56.0981 27.7533 55.1143C25.0342 54.4437 24.3216 52.3482 23.9466 49.7293ZM35.6967 53.3315C37.9561 53.3177 40.2697 53.8029 43.0434 52.6246C39.3501 51.5985 36.3444 50.4889 33.3481 49.3332C30.5377 48.2492 28.627 48.9765 27.5232 51.1496C29.9185 52.5244 32.5715 52.9342 35.6967 53.3315Z"/>
                        </svg>                        
                        <div class="home-sec-head-text-wrapper">
                            <h1>CookYourself</h1>
                            <p>Find the recipes you need in order to fulfill your belly!</p>
                        </div>
                    </div>
                    <div class="home-sec-search-bar" id="app">
                        <input type="text" placeholder="Search Recipes..." value="" id="index-search-bar">
                        <i class="bi bi-search" id="index-search-bar-ico"></i>
                    </div>
                </div>
            `;
        }

        try{
            const inptTitle = this.root.querySelector('#textarea-heading');
            const inptBody = this.root.querySelector('#editableContent');

            [inptTitle, inptBody].forEach(inputField => {
                inputField.addEventListener("input", () => {
                    const updatedTitle = inptTitle.value;
                    const updatedBody = inptBody.value;
    
                    this.onRecipeEdit(updatedTitle, updatedBody);
                });
            });
        }
        catch(e){
            console.log(e);
        }

        try{
            const btnAddRecipe = this.root.querySelector('#first-sec-options-bar-addbtn')
    
            btnAddRecipe.addEventListener("click", () => {
                this.onRecipeAdd();
            });
        }
        catch(e){
            console.log(e);
        }

        try{
            const searchBar = this.root.querySelector('#first-sec-search-bar');

            searchBar.addEventListener("input", () => {
                this.onRecipeSearch(searchBar);
            });
        }
        catch(e){
            console.log(e);
        }

        try{
            const browseSearchBar = this.root.querySelector("#browse-search-bar");
            const browseSearchBarIco = this.root.querySelector('#browse-search-bar-ico');

            let isNeedCall = localStorage.getItem('isNeedCall');
            let indexSearchBar = localStorage.getItem('indexSearchBarValue');
            
            if(isNeedCall == 'yes'){
                localStorage.setItem('isNeedCall', 'no');
                browseSearchBar.value = indexSearchBar;
                this.onRecipeSearch(browseSearchBar);
            }

            browseSearchBarIco.addEventListener("click", () => {
                this.onRecipeSearch(browseSearchBar);
            });
        }
        catch(e){
            console.log(e);
        }

        try{
            const indexSearchBar = this.root.querySelector('#index-search-bar');
            const indexSearchBarIco = this.root.querySelector('#index-search-bar-ico');

            indexSearchBarIco.addEventListener('click', () => {
                if(indexSearchBar.value == ''){
                    return 0;
                }
                localStorage.setItem('isNeedCall', 'yes');
                localStorage.setItem('indexSearchBarValue', indexSearchBar.value);
                window.location.href = '../HTML/browsePG.html';
            });
        }
        catch(e){console.log(e)}

        try{
            this.updateRecipeBodyVisibility(false);
        }
        catch(e){
            console.log(e);
        }
    }

    _createListItemHTML(id, title, body, updated){
        const MAX_BODY_LENGTH = 60;

        try{
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
        catch(e){
            console.log(e);
        }
    }

    searchList(recipes){

    }

    updateRecipeList(recipes){
        try{
            const recipesListContainer = this.root.querySelector('#recipes-bar');
    
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
        catch(e){
            console.log(e);
        }
    }

    updateActiveRecipe(recipe) {
        try{
            this.root.querySelector('#textarea-heading').value = recipe.title;
            this.root.querySelector('#editableContent').value = recipe.body;
        }
        catch(e){console.log(e);}

        try{
            this.root.querySelectorAll('.first-sec-recipes-sec').forEach(recipeList => {
                recipeList.style.backgroundColor = "#F6F7FB";
            });
        }
        catch(e){console.log(e);}

        try{
            this.root.querySelector(`.first-sec-recipes-sec[data-note-id="${recipe.id}"]`).style.backgroundColor = "#efefef";
        }
        catch(e){console.log(e);}
    }

    updateRecipeBodyVisibility(visible) {
        try{
            this.root.querySelector('.second-sec').style.visibility = visible ? "visible" : "hidden";
        }
        catch(e){
            console.log(e);
        }
    }

    updateRecipeCount(count){
        try{
            this.root.querySelector('.first-sec-options-bar-op-filter-p').innerHTML = `${count} Recipes`;
        }
        catch(e){
            console.log(e);
        }
    }
}
