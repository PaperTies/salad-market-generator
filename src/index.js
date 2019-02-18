import ingredients from './salad/ingredients';
import bases from './salad/bases';
import dressings from './salad/dressings';

import getRandomInt from './libs/getRandomInt';
import getRandomArrayValue from './libs/getRandomArrayValue';

const appContainer = document.getElementById('app');

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

const title = document.createElement('h1');
title.innerText = 'Salad Market Generator';
appContainer.appendChild(title);

const basesSection = createSection(appContainer, 'Bases');
const ingredientsSection = createSection(appContainer, 'Ingredients');
const dressingSection = createSection(appContainer, 'Dressing');

function getRandomArrayItems(arr, amount) {
  return Array.from({ length: amount }, () => getRandomArrayValue(arr));
}

function createNewSalad() {
  bases
    |> getRandomArrayItems(#, getRandomInt(1, 3))
    |> #.join('\n')
    |> basesSection.replaceContent;
  
  dressings
    |> getRandomArrayItems(#, 1)
    |> #.join('\n')
    |> dressingSection.replaceContent;

  ingredients
    |> getRandomArrayItems(#, getRandomInt(4, 7))
    |> #.join('\n')
    |> ingredientsSection.replaceContent;
}

createNewSalad();