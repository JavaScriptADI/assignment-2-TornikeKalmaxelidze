// Work in this directory: src
// task 1 
let string = `სტრიქონი`;
console.log(string);

// task 2 

// What is the difference between "5" and 5?

// If I remember correctly, ("5") it's a string and (5) it's regular number. 


// task 3
let number = 11 ;
console.log(number);

// task 4 
let raining = true ;
let endOfWeek = false ;
if (raining) {
    console.log(`ქოლგა წაიღე`)
}else {
    console.log(`ისამოვნე კარგი ამინდით`)
}
// task 5 

// What operators give us a boolean result? ( true and false );


// task 6 
let hello = `hello`.toUpperCase();
console.log(hello);


// task 7 
let World = `WORLD`.toLowerCase();
console.log(World);


// task 8

// for exemple 
// before looks like : zura     if we type .toUpperCase it's getting bigger : ZURA
// after looks like : ZURA      if we type .toLowerCase it's getting smaller : zura 


// task 9 
let text1 = `zura`;
console.log(text1);

// task 10 
let text = 'Hello'.toUpperCase();
console.log(text);

// task 11 
let age = prompt('How old are you?');
let nextAge = age ++;
console.log(`Next year you will be ${age}`);


// task 12 
let name = prompt('What is your name?');
let currentlyage = Number(prompt('How old are you?'));
let isInSixties = age >= 60 && age <= 69;
console.log(`${name} is in sixties: ${isInSixties}`);

// task 13 
let x = 5;
console.log(x++);
console.log(x);
// equals 6 

// task 14 
let y = 5;
console.log(++y);
console.log(y);
// equals 6 

// task 15 
// What is x++ and x--? 

// in my Option 
// we dont know what's (X) but if we type X++  will increase +1 any kind of case 
//  we dont know what's (X) but if we type X--  will increase -1 any kind of case 



// task 16 

// ++x = Pre-increment 
// x++ = post-increment 
// equals = same 

// task 17 
// If we try to declare variable without any value, what will be the value of the variable in the console?


// answer is
// undefined 



// task 18   Show the example of equality operator.

let a = 5;
let b = 5;
console.log(a === b); 
// true

// task 19 Show the example of not equal operator.

let c = '6' 
let d = 6
console.log(c != d)
// false


// task 20 What's going on when we try to add string and number?

let numb = 10
console.log('10' + 10)
//  i think he/she can't understand it as a number and adds writing ; results will be 1010