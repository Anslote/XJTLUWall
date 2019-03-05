const {addOne, subOne} = require('./lib');

// console.log(addOne(3));
// console.log(subOne(3));

// const arr = [1, 3, 5]

//arr.push(6);
//arr.unshift(0);

//const newArr = arr.concat(6)

// const newArr = [0, ...arr, 6]

// console.log(arr, newArr);

const user = {
    name: 'Anslote',
    tel:'8888',
}

const oldUser = Object.assign({}, user, {address:'XJTLU'})

const newUser={
    address:'xxroad',
    ...user,
}
//console.log(user, newUser, oldUser);

const url = 'https://xx.com' +user.name+ '?name=xx' + '&email=xx'
const newUrl = `https://xx.com ${newUser.name} ? ${newUser.address}`
console.log(newUrl)