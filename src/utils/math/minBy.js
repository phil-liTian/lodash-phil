/*
 * @Date: 2024-01-11 10:12:59
 * @LastEditors: phil_litian
 */

import isSymbol from "../isSymbol";

// 计算最小值
const minBy = (array, iteratee) => {
  // result为计算结果 computed为用于比较的值
  let result, computed = 0
  if ( array === null ) {
    return result
  }

  for (const value of array) {
    const current = iteratee(value)
    // 满足(current有值 且current比computed小)
    // 则将current赋值到computed身上, 用于computed与下一个current比较
    if( current != null && !isSymbol(current) && current <= computed ) {
      computed = current
      result = value
    }
  }


  return result
}


export default minBy