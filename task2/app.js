/* Напишите функцию, которая принимает строку и возвращает количество гласных в этой
строке.
 */
const functionForVowels = (str) => {
    const vowels = ['a', 'e', 'u', 'o', 'y', 'i']
    const newStr = str.split('')
    const acc = newStr.filter((el) => vowels.includes(el))
    return acc.length
}

console.log(functionForVowels('hopheylalaley'))