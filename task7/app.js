/* Напишите функцию, которая принимает массив строк и возвращает массив только тех
строк, которые содержат больше пяти символов. */
const funcForFiveSymbols = (array) =>  array.filter((str) => (str.length >= 5))
    


console.log(funcForFiveSymbols(['this', 'is', 'a', 'happy', 'house']))   