import './styles.css';
import ItemGenerator from "./generator";
import {GeneratedItem} from "./types";
import {RarityWeight} from "./rarities";

const DEFAULT_GENERATED_ITEMS_AMOUNT = 20;

function createItemStatView(item: GeneratedItem) {
  const itemStat = document.createElement('p');

  itemStat.classList.add('loot-list-item-stat');
  itemStat.innerHTML = `
    <span>${item.primaryStat}</span>
    <span>${item.primaryStatValue.toString()}</span>
  `;

  return itemStat;
}

function createItemCostView(item: GeneratedItem) {
  const row = document.createElement('p');

  row.classList.add('loot-list-item-cost');
  row.innerHTML = `
    <span>${item.cost}</span>
    <img height="20" src="./coins.png" alt="" />
  `;

  return row;
}

function createItemPropertiesView(item: GeneratedItem) {
  if (!item.properties.length) {
    return null;
  }

  const row = document.createElement('ul');
  item.properties.forEach(({effect}) => {
    row.innerHTML += `<li>${effect}</li>`
  });

  return row;
}

function createItemView(item: GeneratedItem) {
  const box = document.createElement('div');
  box.classList.add('loot-list-item');

  const itemName = document.createElement('h4');
  itemName.innerHTML = `<span>${item.name}</span><span class="rarity-${RarityWeight[item.rarity]}">${item.rarity}</span>`;
  box.appendChild(itemName);

  box.appendChild(createItemStatView(item));
  box.appendChild(createItemPropertiesView(item));
  box.appendChild(createItemCostView(item));

  return box;
}

function generate(level: number) {
  const itemAmountInput = document.getElementById('item-amount') as HTMLInputElement;
  const amount = isNaN(Number(itemAmountInput.value)) ? DEFAULT_GENERATED_ITEMS_AMOUNT : Number(itemAmountInput.value);

  const lootListBox = document.getElementById('loot-list-box') as HTMLDivElement;
  lootListBox.innerHTML = '';

  const generator = new ItemGenerator();

  for (let i = 0; i < amount; i++) {
    const item = generator.generateRandomItem(level);
    lootListBox.appendChild(createItemView(item));
  }
}

function __main__() {
  const characterLevelInput = document.getElementById('character-level') as HTMLInputElement;
  characterLevelInput.oninput = () => {
    characterLevelInput.value = characterLevelInput.value.replace(/\D/g, '');
  };
  characterLevelInput.onblur = () => {
    if (!characterLevelInput.value) {
      characterLevelInput.value = '1';
    }
  };

  const itemAmountInput = document.getElementById('item-amount') as HTMLInputElement;
  itemAmountInput.oninput = () => {
    itemAmountInput.value = itemAmountInput.value.replace(/\D/g, '');
  };
  itemAmountInput.onblur = () => {
    if (!itemAmountInput.value) {
      itemAmountInput.value = DEFAULT_GENERATED_ITEMS_AMOUNT.toString();
    }
  };

  const generateButton = document.getElementById('generate-button') as HTMLButtonElement;
  generateButton.onclick = () => {
    const characterLevel = Number(characterLevelInput.value);
    if (isNaN(characterLevel)) return;

    generate(Math.trunc(characterLevel));
  }
}

window.onload = __main__;
