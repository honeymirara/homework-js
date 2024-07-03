/* Напишите функцию, которая принимает массив чисел и возвращает новый массив с
удвоенными значениями элементов исходного массива. */

const summaryFunc = (arr) => {
    let newArr = []
    arr.forEach(el => newArr.push(el * 2));
    return newArr
}

console.log(summaryFunc([1, 2, 3, 4, 5, 6]))