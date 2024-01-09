/*
 * @Date: 2024-01-09 11:27:09
 * @LastEditors: phil_litian
 */
import isSymbol from "../isSymbol"
const NAN = 0 / 0

// 转换成数字类型
const baseToNumber = value => {
  if ( typeof value === 'number' ) {
    return value
  }
  
  if ( isSymbol(value) ) {
    return NaN
  }
  
  return +value
}

export default baseToNumber