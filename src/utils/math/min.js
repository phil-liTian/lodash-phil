/*
 * @Date: 2024-01-11 10:25:45
 * @LastEditors: phil_litian
 */
import baseMin from './minBy'

const min = (array) => {
  return baseMin(array, value => value)
}

export default min