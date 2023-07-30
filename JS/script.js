import App from './app.js';
import EmailView from './EmailView.js';
window.onload=()=>{
    if(document.URL.includes("recipesPG.html") || document.URL.includes("browsePG.html") || document.URL.includes("index.html")){
        try{
            const root = document.getElementById("app");
            const app = new App(root);
        }
        catch(e){
            console.log(e);
        }
    }

    if(document.URL.includes("contactsPG.html")){
        try{
            const root = document.getElementById("form");
            const emailview = new EmailView(root);
        }
        catch(e){
            console.log(e);
        }
    }

    
    //#region Hamburguer Button
    const hambBTN = document.querySelector('#hamb-btn');
    const wrapperSec = document.querySelector('.wrapper-pages-sec');
    
    let aux = false;
    
    hambBTN.addEventListener("click", () => {
        if(aux === false){
            updateMenuVisible('closed');
            aux = true;
        }
        else if(aux === true){
            updateMenuVisible('open');
            aux = false;
        }
    });
    
    function updateMenuVisible(menuEvent){
        if(menuEvent === 'closed'){
            wrapperSec.style.transform = `translateX(300px)`;
            hambBTN.style.transform = `translateX(300px)`;
        }
        else if(menuEvent === 'open'){
            wrapperSec.style.transform = `translateX(0px)`;
            hambBTN.style.transform = `translateX(0px)`;
        }
    }
}


/*let editableContent = document.getElementById('editableContent');
let optionsButtons = document.querySelectorAll('.option-button');
let advancedOptionButtons = document.querySelectorAll('.adv-option-button');
var fontName = document.getElementById('fontName');
let fontSizeRef = document.getElementById('fontSize');
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll('.align');
let formatButtons = document.querySelectorAll(".format");

let fontList = ["Arial", "Verdana", "Times New Roman"];


//#region Text Editor

const debouncedHandler = _.debounce(() => {
}, 300);
editableContent.addEventListener('input', debouncedHandler);

const initializer = () => {
    highlighter(alignButtons, true);
    highlighter(formatButtons, false);

    fontList.map(value => {
        let option = document.createElement("option") ;
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    for (let i = 1; i <= 30; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 16;
};

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener('click', () => {
            if(needsRemoval){
                let alreadyActive = false;

                if (button.classList.contains("active")){
                    alreadyActive = true;
                }

                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add("active");
                }
            }
            else{
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

const modifyText = (command, defaultUI, value) => {
    document.execCommand(command, defaultUI, value);
};

optionsButtons.forEach(button => {
    button.addEventListener('click', () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButtons.forEach((button) => {
    button.addEventListener('change', () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a Url:");

    if(/http/i.test(userLink)){
        modifyText(linkButton.id, false, userLink);
    }
    else{
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

window.onload = initializer();*/

//#endregion

