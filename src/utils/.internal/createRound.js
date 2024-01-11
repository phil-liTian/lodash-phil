/*
 * @Date: 2024-01-10 10:23:30
 * @LastEditors: phil_litian
 */


const createRound = (methodName) => {
  // ceil、floor、round
  const func = Math[methodName]

  return (number, precision) => {
    // 确保数据在-292到+292之间
    precision = precision == null ? 0 : precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292)

    if( precision ) {
      let pair = `${number}e`.split('e')
      // 先通过科学记数法将小数点向右移动precision位
      const value = func(`${pair[0]}e${+pair[1] + precision}`)

      pair = `${value}e`.split('e')
      // 结束后再将小数点向左移动precision位, 从而达到保留指定小数位的目的
      return +`${pair[0]}e${+pair[1] - precision}`
    }
    
    return func(number)
  }
}


export default createRound