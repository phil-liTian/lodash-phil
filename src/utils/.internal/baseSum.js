/*
 * @Date: 2024-01-10 09:51:15
 * @LastEditors: phil_litian
 */

// 数组元素求和 兼容处理元素和简单数据类型和对象的情况
function baseSum(array, iteratee) {
  let result

  for (const value of array) {
    // 可迭代函数 数组元素是简单数据类型时就透传一下, 是对象时可传入迭代函数
    const current = iteratee(value)
    if ( current !== undefined ) {
      result = result === undefined ? current : current + result
    }
  }

  return result
}

export default baseSum