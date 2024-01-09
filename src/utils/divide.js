/*
 * @Date: 2024-01-09 13:44:21
 * @LastEditors: phil_litian
 */

import createMathOperation from "./.internal/createMathOperation";

const divide = createMathOperation((dividend, divisor) => dividend / divisor, 1)

export default divide
