import getRandomInt from './getRandomInt';

/**
 * Returns a random value form the array
 * @constructor
 * @param {array} array.
 */
export default function getRandomArrayValue(array) {
  return array[getRandomInt(0, array.length)];
}
