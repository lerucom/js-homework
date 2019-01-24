import {cofemat} from "./lib.js";

const selectEl = document.getElementById('select_drink-number');
const moneyEl = document.getElementById('money');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function getValue() {
    return selectEl.value;
}

function reactToClick() {
    const money = moneyEl.value;
    const drinkName = getValue();
    resultEl.textContent = cofemat(drinkName, money);
}

calculateEl.addEventListener('click',reactToClick);