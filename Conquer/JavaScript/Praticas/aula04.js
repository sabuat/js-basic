// Imprimir os valores de um Array
const names = ['Albert', 'Robert', 'Charles', 'Richard', 'Henry', 'Bernard']

for (const i in names){
    console.log(names[i])
}

// Sumar os valores de um Array
const numbers = [19, 25, 85, 69, 78, 16, 41, 23, 58]
let suma = 0

for (let i = 0; i < numbers.length; i++) {
  suma += Number(numbers[i])
}

console.log(suma)

// Imprimir a media de um Array e ordenando este
const numberstwo = [19, 25, 85, 69, 78, 16, 41, 23, 58]
const suma2 = 0;
for (let i = 0; i < numberstwo.length; i++){
    suma2 = suma2 + Number(numberstwo[i])
};

let media = (suma2 /Number(numberstwo.length))

numberstwo.sort();

console.log(numberstwo);
console.log(media);

// Inserção de novos elementos em um Array

const dias = ['lunes', 'martes', 'miercoles']

dias.unshift('domingo')
dias.push('jueves')

console.log(dias)

dias.shift()
console.log(dias)

dias.pop()
console.log(dias)

// Trabalhando com While

const dias2 = ['lunes', 'martes', 'miercoles', 'jueves']

dias.unshift('domingo')
dias.push('viernes')

console.log(dias2)

let time = 3
for (i in dias){
    while (time > 0){
        console.log(dias[i])
        time = time - 1
        i++
    }
}


