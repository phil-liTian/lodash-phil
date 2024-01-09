/*
 * @Date: 2024-01-09 10:45:19
 * @LastEditors: phil_litian
 */
import createMathOperation from './.internal/createMathOperation'

const add = createMathOperation((augend, addend) => augend + addend, 0)

export default add