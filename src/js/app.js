import {cofemat} from "./lib.js";

const drinkNumbEl = document.getElementById('drink-number');
const moneyEl = document.getElementById('money');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick() {
    const drinkNumb = drinkNumbEl.value;
    const money = moneyEl.value;
    resultEl.textContent = cofemat(drinkNumb, money);
}

calculateEl.addEventListener('click',reactToClick);