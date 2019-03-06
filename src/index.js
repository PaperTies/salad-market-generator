import ingredients from './salad/ingredients';
import bases from './salad/bases';
import dressings from './salad/dressings';

import getRandomInt from './libs/getRandomInt';
import getRandomArrayValue from './libs/getRandomArrayValue';

import './styles.css';

const appContainer = document.getElementById('app');

const header = document.createElement('header');

const title = document.createElement('h1');
title.innerText = '🥗 Salad Market Generator';

const generatorWrapper = document.createElement('div');
generatorWrapper.classList.add('generator-wrapper');

header.appendChild(title);
appContainer.appendChild(header);
appContainer.appendChild(generatorWrapper);

const basesSection = createSection(generatorWrapper, 'Bases');
const ingredientsSection = createSection(generatorWrapper, 'Ingredients');
const dressingSection = createSection(generatorWrapper, 'Dressing');

const newSaladButton = document.createElement('button');
newSaladButton.addEventListener('click', createNewSalad);
newSaladButton.innerText = 'Generate New Salad';
generatorWrapper.appendChild(newSaladButton);

function removeNodeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function createIngredientNodeList(newItemsArray) {
  return newItemsArray.map(item => {
    const ingredient = document.createElement('div');

    ingredient.innerText = item
    return ingredient;
  })
}

function createSection(parent, titleText) {
  const container = document.createElement('section');
  parent.appendChild(container);

  const title = document.createElement('h2');
  title.innerText = titleText;
  container.appendChild(title);

  const content = document.createElement('article');
  
  container.appendChild(content);

  return {
    replaceContent(nodeList) {
      removeNodeChildren(content);

      nodeList.forEach(node =>content.appendChild(node))
    },
  };
}

function getRandomArrayItems(arr, amount) {
  return Array.from({ length: amount }, () => getRandomArrayValue(arr));
}

function createNewSalad() {
  const maxComponents = 6;
  const basesAmount = getRandomInt(1, 3);
  const dressingsAmount = 1;
  const ingredientsAmount = maxComponents - basesAmount;

  bases
    |> getRandomArrayItems(#, basesAmount)
    |> createIngredientNodeList
    |> basesSection.replaceContent;
  dressings
    |> getRandomArrayItems(#, dressingsAmount)
    |> createIngredientNodeList
    |> dressingSection.replaceContent;
  ingredients
    |> getRandomArrayItems(#, ingredientsAmount)
    |> createIngredientNodeList
    |> ingredientsSection.replaceContent;
}



createNewSalad();
