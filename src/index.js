import ingredients from './salad/ingredients';
import bases from './salad/bases';
import dressings from './salad/dressings';

import getRandomInt from './libs/getRandomInt';
import getRandomArrayValue from './libs/getRandomArrayValue';

const appContainer = document.getElementById('app');

const title = document.createElement('h1');
title.innerText = 'Salad Market Generator';
appContainer.appendChild(title);

const basesSection = createSection(appContainer, 'Bases');
const ingredientsSection = createSection(appContainer, 'Ingredients');
const dressingSection = createSection(appContainer, 'Dressing');

const newSaladButton = document.createElement('button');
newSaladButton.addEventListener('click', createNewSalad);
newSaladButton.innerText = 'Generate New Salad';
appContainer.appendChild(newSaladButton);

function createSection(parent, titleText) {
  const container = document.createElement('div');
  parent.appendChild(container);

  const title = document.createElement('h2');
  title.innerText = titleText;
  container.appendChild(title);

  const content = document.createElement('p');
  container.appendChild(content);

  return {
    replaceContent(newContentText) {
      content.innerText = newContentText;
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
    |> #.join('\n')
    |> basesSection.replaceContent;
  dressings
    |> getRandomArrayItems(#, dressingsAmount)
    |> #.join('\n')
    |> dressingSection.replaceContent;
  ingredients
    |> getRandomArrayItems(#, ingredientsAmount)
    |> #.join('\n')
    |> ingredientsSection.replaceContent;
}



createNewSalad();
