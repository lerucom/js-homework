import {cofemat} from "./lib.js";

const drinkNumbEl = document.getElementById('drinkNumb');
const moneyEl = document.getElementById('money');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick() {
    const drinkNumb = parseInt(drinkNumbEl.value);
    const money = moneyEl.value;
    resultEl.textContent = cofemat(drinkNumb, money);
}

calculateEl.addEventListener('click',reactToClick);