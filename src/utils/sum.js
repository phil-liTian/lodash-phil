/*
 * @Date: 2024-01-10 09:50:53
 * @LastEditors: phil_litian
 */

import baseSum from './.internal/baseSum'

const sum = (array) => {
  // 确保array不是null或者undefined
  return array != null && array.length ? baseSum(array, value => value) : 0
}

export default sum