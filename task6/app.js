/* Напишите функцию, которая принимает массив чисел и возвращает среднее значение всех
элементов. */
const averageNum = (array) => {
    let num = array.reduce((el, acc) => el + acc, 0)
    return num / array.length
}

console.log(averageNum([2, 3, 6, 3, 9, 5]))