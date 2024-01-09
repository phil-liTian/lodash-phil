/*
 * @Date: 2024-01-09 11:27:03
 * @LastEditors: phil_litian
 */

import isSymbol from "../isSymbol";

const INFINITY = 1 / 0
const symbolToString = Symbol.prototype.toString

// 转换成字符串类型
const baseToString = value => {
  if ( typeof value === 'string' ) {
    return value
  }
  
  if ( Array.isArray(value) ) {
    return `${value.map(baseToString)}`
  }
  // Cannot convert a Symbol value to a string
  if ( isSymbol(value) ) {
    return symbolToString ? symbolToString.call(value) : ''
  }

  const result = `${value}`

  // 执行结果为负无穷时, 返回-0, 而不是-Infinity
  return (result === '0' && 1 / value === -INFINITY) ? '-0' : result
}

export default baseToString