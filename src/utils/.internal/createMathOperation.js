/*
 * @Date: 2024-01-09 10:45:31
 * @LastEditors: phil_litian
 */
import baseToString from './baseToString'
import baseToNumber from './baseToNumber'

// 用于数学公式的 加、减、乘、除
const createMathOperation = (operator, defaultValue) => {
  return (value, other) => {
    if ( value === undefined && other === undefined ) {
      return defaultValue
    }

    if ( value !== undefined && other === undefined ) {
      return value
    }

    if ( value === undefined && other !== undefined ) {
      return other
    }

    if ( typeof value === 'string' || typeof other === 'string' ) {
      // 有一个是string类型 两个都转化成string类型
      value = baseToString(value)
      other = baseToString(other)
    } else {
      value = baseToNumber(value)
      other = baseToNumber(other)
    }
    
    return operator(value, other)
  }
}

export default createMathOperation