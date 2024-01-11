/*
 * @Date: 2024-01-11 10:25:50
 * @LastEditors: phil_litian
 */

import baseMax from './maxBy'

const max = (array) => {
  return baseMax(array, value => value)
}

export default max