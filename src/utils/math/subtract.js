/*
 * @Date: 2024-01-09 13:52:54
 * @LastEditors: phil_litian
 */
import createMathOperation from "./.internal/createMathOperation"

const subtract = createMathOperation((minuend, subtrahend) => minuend - subtrahend, 0)

export default subtract
