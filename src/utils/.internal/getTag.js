/*
 * @Date: 2024-01-09 11:27:44
 * @LastEditors: phil_litian
 */

const toString = Object.prototype.toString

/**
 * 返回类型
 * {} => [object Object]
 * null => [object Null]
 * NaN => [object Number]
 * undefined => [object Undefined]
 * '' => [object String]
 * [] => [object Array]
 * Symbol => [object Symbol]
 * new Map() => [object Map]
 * new Set() => [object Set]
 * function () {} => [object Function]
 * @param {*} value 
 * @returns 
 */

const getTag = (value) => {
  return toString.call(value)
}

export default getTag