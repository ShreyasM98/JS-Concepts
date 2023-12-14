function sum(param1, param2){
    let result = param1 + param2
    return result
}

var answer = sum(10,20)
console.log(answer)

var arrowFunction = (num1, num2) => {
    var sum = num1 + num2 ;
    document.write(sum +'<br>')
}

arrowFunction(2,4);
arrowFunction(5,6);
arrowFunction(10,6);

const greet = (name) =>{return  'Hello ' + name + '!'};

document.write(greet('Shreyas'));

let numbers = [2,4,6,8,10]
//Old Ways
function multiplyByTwo(numbers){
    return numbers * 2;
}

//using Arrow Functions
let multiplyByThree = (numbers) => numbers * 3
const divideByTwo = number => number /2
let  result = numbers.map(multiplyByThree);
document.write('<br>' + result)
document.write('<br>' + divideByTwo(16))