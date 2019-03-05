const arr = ['hi', 'hey', 'hmmmmmmm']

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// arr.forEach((element,i) => {
//     arr[i] = element + 'coooool';
// });

//const newArr = arr.map((ele, i) => ele +' '+ i);

const users = [
    {
        name: 'Anslote',
        age: 20
    },
    {
        name: 'Hannan',
        age: 30
    },
    {
        name: 'George',
        age: 60
    },
]

const filterUser = users.filter(user => {
    return user.name === 'George'
})

//console.log(filterUser)

let num = 0;

users.forEach(user =>{
    num += user.age;
})

const NUM = users.reduce((acc, cur) => acc + cur.age, 0);

// indexOf(): num

// includes(): boolean

// find()

// some()

console.log(num, NUM);