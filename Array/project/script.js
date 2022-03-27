'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements) {
  //* empty the entire container and only then we start adding new elements
  containerMovements.innerHTML = '';
  //* .textContent = 0

  movements.forEach((mov, i) => {

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>    
    `;

    //? containerMovements.insertAdjacentHTML(position, htmlElemToInsert)
    // containerMovements.insertAdjacentHTML('beforeend', html);
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

displayMovements(account1.movements)

const user = 'Steven Thomas Williams'; // stw
// 1
// const username = user.toLowerCase().split(' ');
// 2
// const username = user
//         .toLowerCase()
//         .split(' ')
//         .map((name) => { //? VI: callback function in map always need to return the new value in a new array
//           return name[0]  //* returns 1st letter of each word from array
//         })
//         .join('');    //* 3

// console.log(username);
// 1
// (3) ['steven', 'thomas', 'williams']

//2
// (3) ['s', 't', 'w']

// 3
// stw

// create function to get username

const createUserNames = (user) => {
  const username = user
      .toLowerCase()
      .split(' ')
      .map((name) => { 
        return name[0]  
      })
      .join('');
      
  return username;
};

console.log(createUserNames('Steven Thomas Williams'));

// side effect - use forEach with map

// we have array accounts
// const accounts = [account1, account2, account3, account4];
// account1-2-3-4 are objects
// we will create new element "username: 'stw'" inside the objects  

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// 2:
// interestRate: 0.7
// movements: (8) [200, -200, 340, -300, -20, 50, 400, -460]
// owner: "Steven Thomas Williams"
// pin: 3333
// username: "stw"  //* added

// we loop over the accounts array
// in each iteration we manipulated the current account object
// add acc.username to it 
// based on acc.owner plus all of these transformations

const createUserNames2 = (accs) => {  //* accounts
  accs.forEach((acc) => {
    acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('')
  });
};

createUserNames2(accounts);
// console.log(accounts);
// console.log(accounts[2]);

//todo reduce
const calcDisplayBalance = (movements) => {
  // const balance = movements.reduce((acc, curMov) => acc + curMov, 0);
  const balance = movements.reduce((acc, curMov) => {
   return acc + curMov
  }, 0);


  labelBalance.textContent = `${balance} EUR`;
}

calcDisplayBalance(account1.movements);

const calcDisplaySummary = (movements) => {
  const incomes = movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0)

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0)

  // labelSumOut.textContent = `${outcomes}€`;  
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;  //* without -

  const interest = movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * 1.2) / 100)  //* new arr
        .filter((int, ind, arr) => {
          // console.log(arr);
          return int >= 1;      //5) [2.4, 5.4, 36, (- 0.84), 15.6]
        })
        .reduce((acc, int) => acc + int, 0)
  
  labelSumInterest.textContent = `${interest}€`;
}

calcDisplaySummary(account1.movements);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e']

//todo slice
// we can extract part of any array WITHOUT changing the original array
arr.slice(2) //* start from 'c' and all the way to the end
// and doesn't mutate original arr. Returns new arr, copy of arr BUT only with the extracted parts
// console.log(arr.slice(2));  //* (3) ['c', 'd', 'e']

// console.log(arr.slice(2, 4));  //* (2) ['c', 'd']
// end parameter is not included in the output
// (2, 4) means 2 and 3 without 4

// console.log(arr.slice(-2));  
// starts from the end, and takes last 2 elements of arr
//*  (2) ['d', 'e']

// console.log(arr.slice(-1));  
// last element of any ARRAY

// console.log(arr.slice(1, -2)); //* (2) ['b', 'c']


//! SHALLOW copy of arr
// console.log(arr.slice()); //* (5) ['a', 'b', 'c', 'd', 'e']
// same as:  
//todo using spread operator
// console.log([...arr]); //* (5) ['a', 'b', 'c', 'd', 'e']


//todo splice
// same as slice, but it does change the original array
// splice() mutates that array

// console.log(arr.splice(2)); //! (3) ['c', 'd', 'e']
// console.log(arr); //! (2) ['a', 'b']
// splice delete selected elements from arr

// arr.splice(-1); // remove last element 
// console.log(arr); //* ['a', 'b', 'c', 'd']
// arr.splice(1, 2); //*  2 here number of element to delete
// console.log(arr); //* (2) ['a', 'd']   removed 1t and 2d elements


//todo reverse
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //* 5) ['f', 'g', 'h', 'i', 'j']
// reverse() mutates that array
// console.log(arr2); //* 5) ['f', 'g', 'h', 'i', 'j']

//todo concat

// const letters = arr.concat(arr2);
// console.log(letters);
//* (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// console.log([...arr, ...arr2]);
//* (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


//todo join
// console.log(letters.join(' - '));
//* a - b - c - d - e - f - g - h - i - j


//todo forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     // console.log(`You withdrew ${movement}`);  //*  -
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// };

// console.log('----- FOREACH -----');
// movements.forEach((movement) => {
// movements.forEach(function(movement) {    //* callback function
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     // console.log(`You withdrew ${movement}`);  //*  -
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// })

//* You deposited 200   //* function(200)
// You deposited 450    //* function(450)
// You withdrew 400     //* function(-400) ...
// You deposited 3000
// You withdrew 650
// You withdrew 130
// You deposited 70
// You deposited 1300
// ----- FOREACH -----
// You deposited 200
// You deposited 450
// You withdrew 400
// You deposited 3000
// You withdrew 650
// You withdrew 130
// You deposited 70
// You deposited 1300


//! for of with forEach
// * ORDER: [ 1-currIndex, 2-currElement ]
// for (const [i,movement] of movements.entries()) { 
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     // console.log(`You withdrew ${movement}`);  //*  -
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// };

// console.log('----- FOREACH -----');
// //! order parameter list always need to be like:
// // movements.forEach((currElement, currIndex, entireArr) => { 
// movements.forEach((mov, i, arr) => { 
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     // console.log(`You withdrew ${movement}`);  //*  -
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
//   })

// Movement 1: You deposited 200
// Movement 2: You deposited 450
// Movement 3: You withdrew 400 ...

// when should we use forEach and "for of" ?
// one fundamental difference between the two of them
// we cannot break out forEach loop,
// forEach will always loop over the entire array and there is nothing we can do about it
// if we need to break out of a loop, then we have to keep using "for of" loop 

// don't become frustrated with this
// it will all become obvious with practice
// just keep using this and you will be fine

// once you do understand exactly how this works,
// specially this fundamental mechanism of the callback and passing arguments into callback here  
//!.forEach((currElement, currIndex, entireArr)
// then working with all other array methods will become really easy
// because most of them follow the exact same principle

//не расстраивайтесь есди это непонятно еще
// все станет ясно с практикой
// просто продолжайте использовать это, и все будет хорошо

// как только вы поймете, как именно это работает,
// особенно этот фундаментальный механизм обратного вызова и передачи аргументов в обратный вызов здесь
//!.forEach((currElement, currIndex, entireArr)
// тогда работа со всеми другими методами массива станет очень простой
// потому что большинство из них следуют одному и тому же принципу

//todo forEach with map and set
// map
const currencies = new Map([
  ['USD', 'United States dollar'], //* [key, value]
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach((currValueElement, currKeyIndex, currMapArray) => {
//   console.log(`${currKeyIndex}: ${currValueElement}`);  //* [key, value]
// })


// set
// const currenciesUnique = new Set(['Usd', 'Gbp', 'Eur', 'Eur', 'Usd', 'Gbp']);
// console.log(currenciesUnique);
//* Set(3) {'Usd', 'Gbp', 'Eur'}

// currenciesUnique.forEach((value, key, map) => {
//   console.log(`${key} ${value}`);
// })

//* Usd Usd
//* Gbp Gbp
//* Eur Eur
// this means that key is same as value: why is that?
// Set doesn't have keys and indexes
// there is no value for key
// (value, KEY, map) KEY here makes no sense at all
// it wouldn't even have to be there
// for Set second argument was omitted


//! currenciesUnique.forEach((value, _ , map) => {  
//* ' _ ' variable which is unnecessary - throwaway variable


//! MAP
// is similar to the forEach but with the difference that MAP creates a brand new ARRAY based an original array

//! FILTER 
// USED TO FILTER FOR ELEMENTS in the original array which satisfy a certain condition. for example we looking for element greater than 2
//* 3, 1, 4, 3, 2   filter current > 2
//* 3, 4, 3   //* new filtered array
// elements, for which the condition is true will be included in a new array that the filter method returns

//! REDUCE 
// use to boil down all the elements of the original array into one single value
// accumulator + current
// like a snowball as it rolls down a hill : snowball effect
// no new array, but only the reduced value


//! MAP - creates a new array

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements2.map((mov) => {
  return mov * eurToUsd;  
  // return 25;  //* 2
})
//! or
const movementsUSD2 = movements2.map(mov => mov * eurToUsd)

// console.log(movements2);
// console.log(movementsUSD);
// (8) [200, 450, -400, 3000, -650, -130, 70, 1300]

// (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//* 2
// (8) [25, 25, 25, 25, 25, 25, 25, 25]

//todo for of
// completely different philosophy
const movementsUSDfor = [];
for (const mov of movements2) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);
//* same
// (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//? in map we use (arrow) function to solve a problem of creating a new array
//? in "for of" we simply loop one array and manually create a new array.
//* different philosophy or paradigms

//? in map more with FUNCTIONAL PROGRAMMING AND THIS IS A WAY TO GO
// new and modern

//! using current elements
const movementsDescriptions = movements2.map((mov, index, arr) => 
  // {
  `Movement ${index + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  //* same
  // if (mov > 0) {
  //       return `Movement ${index + 1}: You deposited ${mov}`;
  //     } else {
  //         return `Movement ${index + 1}: You withdrew ${Math.abs(mov)}`;
  //     }
// }
)

// we use return, because with map we will place elements to a new array
//* and it is possible use (return) in both same time inside of (if)
// console.log(movementsDescriptions);

// (8) ['Movement 1: You deposited 200', 'Movement 2: You deposited 450', 'Movement 3: You withdrew 400', 'Movement 4: You deposited 3000', 'Movement 5: You withdrew 650', 'Movement 6: You withdrew 130', 'Movement 7: You deposited 70', 'Movement 8: You deposited 1300']
// 0: "Movement 1: You deposited 200"
// 1: "Movement 2: You deposited 450"
// 2: "Movement 3: You withdrew 400"
// 3: "Movement 4: You deposited 3000"
// 4: "Movement 5: You withdrew 650"
// 5: "Movement 6: You withdrew 130"
// 6: "Movement 7: You deposited 70"
// 7: "Movement 8: You deposited 1300"
// length: 8
// [[Prototype]]: Array(0)

//! here is a BIG difference between forEach and map
// before printed each line individually to the console, as we were looping over the array. In each of iterations we performed some action that was visible in console - this can be called a "SIDE EFFECT"

// "forEach" method creates "side effects"

// map returns each of the strings from the callback and got added into a new array, we console logged that entire array to the console and NOT the elements ONE BY ONE, we don't create side effect in each iteration
// in map we build a new array


//! FILTER
// movements: [200, 450, -400, 3000, -650, -130, 70, 1300],

// create a new array of deposits (mov > 0)
const deposits = movements.filter((mov, index, arr) => {
  return mov > 0;
})

// console.log(movements);
// console.log(deposits);
// (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// (5) [200, 450, 3000, 70, 1300]

// see difference:
let depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}

// console.log(depositsFor);
// (5) [200, 450, 3000, 70, 1300]

// const withdrawals = movements.filter(mov => mov < 0);  //! RETURN IS HIDDEN HERE
// console.log(withdrawals);
// (3) [-400, -650, -130]



//! REDUCE
// movements: [200, 450, -400, 3000, -650, -130, 70, 1300],

//* accumulator is like snowball - and accumulator will return
// const balance = movements.reduce((accumulator, current, index, arr) => {
//   console.log(`Iteration ${index}: ${accumulator} (${current > 0 ? 'deposit' : 'withdrawal'}: ${current})`);  
//   return accumulator + current 
// }, 0)  //* second (initial) parameter of the accumulator 
// the INITIAL value of accumulator in the FIRST loop iteration
// here we want to start counting at ZERO

// const balance2 = movements.reduce((accumulator, current) => accumulator + current, 0)
// console.log('balance2: ', balance2);  //* 3840


// console.log('balance: ', balance);
// Iteration 0: 0 (deposit: 200)
// Iteration 1: 200 (deposit: 450)
// Iteration 2: 650 (withdrawal: -400)
// Iteration 3: 250 (deposit: 3000)
// Iteration 4: 3250 (withdrawal: -650)
// Iteration 5: 2600 (withdrawal: -130)
// Iteration 6: 2470 (deposit: 70)
// Iteration 7: 2540 (deposit: 1300)
// balance:  3840

//? same with "for of"
let balanceFor = 0  //* we always need external variable whenever we want to use a for loop
// for (const mov of movements) balanceFor += mov;
// console.log('balanceFor: ', balanceFor);


//todo get Max value of array

const maxValArr = movements.reduce((acc, curMov) => {
  if (acc > curMov)
    return acc;
  else 
    return curMov;

}, movements[0]);  //* first element of array 

// console.log('max value of array is: ', maxValArr);


// chaining methods
const eurToUsd2 = 1.1
// console.log(movements);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)         //* returns new array
  .map(mov => mov * eurToUsd2)    //* returns new array    
  .reduce((acc, mov) => acc + mov, 0) //* return a value

//
// const totalDepositsUSD2 = movements
//   .filter(mov => mov < 0)        //! < 
//   .map((mov, index, arr) =>  {
//     console.log(arr);   //* this arr is result of previous operation(filter)
//     return mov * eurToUsd2    
//   })  
//   .reduce((acc, mov) => acc + mov, 0) //* return a value

// console.log(totalDepositsUSD);    //*  5522.001
// console.log(totalDepositsUSD2);    //* -1298.002

//* original array
// (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
//* after filter
// (3) [-400, -650, -130]

// const totalDepositsUSD3 = movements
//   .filter(mov => mov > 0)      //! >   
//   .map((mov, index, arr) =>  {
//     console.log(arr);   //* this arr is result of previous operation(filter)
//     return mov * eurToUsd2    
//   })  
//   .reduce((acc, mov) => acc + mov, 0) //* return a value

// console.log(totalDepositsUSD);    //*  5522.001

// (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// (5) [200, 450, 3000, 70, 1300]


// todo FIND
// use to retrieve an element of array
// like a FILTER, the FIND also needs a callback function
// that returns a Boolean
movements.find(mov => mov < 0)