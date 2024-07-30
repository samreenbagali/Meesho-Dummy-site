
import BagsFootwear from "./Data/BagsFootwear.js";
import BeautyHealth from "./Data/BeautyHealth.js";
import Electronics from "./Data/Electronics.js";
import HomeAndKitchen from "./Data/HomeAndKitchen.js";
import JewelleryAccessories from "./Data/JewelleryAccessories.js";
import Kids from "./Data/Kids.js";
import Men from "./Data/Men.js";
import WomenEthnic from "./Data/WomenEthnic.js";
import WomenWestern from "./Data/WomenWestern.js";

let inputsearchEl = document.querySelector(".InputSearch")
let recentInput=[]
let formInputEl=document.getElementById("inputform")
const listofRecentEl=document.querySelector(".listofRecent")


inputsearchEl.addEventListener("keydown",()=>{
    console.log(inputsearchEl)
    if(inputsearchEl.value){
        document.getElementById("CloseSearch").style.display="block"
    }
    else{
        document.getElementById("CloseSearch").style.display="none"

    }
})

formInputEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofRecentHTMLEl = ""

    recentInput.unshift(inputSearchEl.value)
    console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recentItem">
                <div class="recentIcon">
                     <img src="./img/recent.png"/>
                </div>
                <p>${recentInput[i]}</p>
            </div>
        `
        }

        listofRecentEl.innerHTML = listofRecentHTMLEl
    }
})



/*function reuble*****/


function renderSubMenu(id, data) {
    let temp = document.getElementById(id);
    let html = "";
    data.forEach(category => {
        html += `<div class="column">
                    <h4>${category.heading}</h4>
                    <div>${category.data.map(item => `<p>${item}</p>`).join("")}</div>
                 </div>`;
    });
    temp.innerHTML = html;
}


renderSubMenu("womenEthnic", WomenEthnic);
renderSubMenu("womenWestern", WomenWestern);
renderSubMenu("men", Men);
renderSubMenu("kids", Kids);
renderSubMenu("HomeAndKitchen", HomeAndKitchen);
renderSubMenu("beautyAndHealth", BeautyHealth);
renderSubMenu("JewelleryAndAccessories", JewelleryAccessories);
renderSubMenu("BagsFootwear", BagsFootwear);
renderSubMenu("Electronics", Electronics);

