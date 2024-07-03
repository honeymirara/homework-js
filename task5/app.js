/* Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
строки отсортированы по длине. */

const sorting = (array) => {
    array.sort((a, b) => a.length - b.length)
    return array
}

console.log(sorting(['this', 'is', 'array']))