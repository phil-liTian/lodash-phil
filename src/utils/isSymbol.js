/*
 * @Date: 2024-01-09 11:27:57
 * @LastEditors: phil_litian
 */
import getTag from './.internal/getTag'

const isSymbol = value => {
  const type = typeof value
  return type === 'symbol' || getTag(value) === '[object Symbol]'
}

export default isSymbol
