/*
 * @Date: 2024-01-11 10:00:49
 * @LastEditors: phil_litian
 */
import baseMean from './meanBy'

const mean = (array) => {
  return baseMean(array, value => value)
}

export default mean