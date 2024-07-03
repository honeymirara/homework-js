/* Напишите функцию, которая принимает число и возвращает его факториал. */
const functorial = (number) => {
    let result = 1
    for (let i = 1; i <= number; i++) {
        result *= i
    }
    return result
}

console.log(functorial(3))