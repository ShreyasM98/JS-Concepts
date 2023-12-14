//while loop
// var num = +prompt('Enter a number');
// while(num != 0){
//     document.write('Entered number is ' +num + "<br>");
//     num = prompt('Enter a number');
// }

//do-while loop
// count = 5
// do
// {
//     num = prompt('Enter a number')
//     document.write(num + '<br>')
//     count = count - 1
// }
// while(count > 0);//Performs the do block until the condition fails

//Template Literals
// var x = 10;
// var y = 15;

// document.write(`Sum of ${x} and ${y} is ${x+y}`)
// console.log(`Sum of ${x} and ${y} is ${x+y}`)
// console.log(`Hello 'World' in "JavaScript"`)
// console.log("hello \"World\"")

//For-in For-of
// var fruits = ['mango','apple','orange','banana']
// //for-in loop is used for arrays,objects and strings to iterate
// for(x in fruits){
//     document.write(`value at ${x} is ${fruits[x]} <br>`)
// }//for-in tries to access the index of the value 

// var vegetables = ['carrot', 'cucumber', 'betroot', 'tomato']

// for(veggies of vegetables){
//   document.write(veggies +"<br>")
// }//for-of loop gives the value of tbe array

// var students = {'100':"Shreyas",'101':"Girish",'102':"Jaya"}

// for(key in students){
//     document.write(`${key}:${students[key]} <br>`)
// }

//Arrays

// var movies = ['KGF','RRR','Pathan'];
// movies.push('Maharshi')
// console.log(movies.pop())
// movies.unshift('Acharya')
// movies.shift();
// console.log(movies)
// console.log(movies.indexOf('Pathan'))
// console.log(movies.slice(1,2))
// document.write(movies + '<br>');
// var movies = new Array('KGF','RRR','StarLord');
// document.write(movies)

//Methods on arrays
// push()//to push the element to the last of an array
//pop()// to remove the last element from an array
// Unshift()//adds element to the first of the array 
// shift()//removes the first element of an array
// indexOf()//gives the index of the element in the array
// slice()
// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.