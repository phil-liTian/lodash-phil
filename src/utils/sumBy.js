

import baseSum from "./.internal/baseSum";

const sumBy = (array, iteratee) => {
  return array != null && array.length ? baseSum(array, iteratee) : 0
}

export default sumBy