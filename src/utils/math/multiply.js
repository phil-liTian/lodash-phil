/*
 * @Date: 2024-01-09 13:50:02
 * @LastEditors: phil_litian
 */
import createMathOperation from "./.internal/createMathOperation";

const multiply = createMathOperation((augend, addend) => augend * addend, 1)

export default multiply
