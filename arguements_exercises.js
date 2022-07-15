/*
    Write a sum function that takes any number of arguments:

        sum(1, 2, 3, 4) === 10;
        sum(1, 2, 3, 4, 5) === 15;

    Solve it first using the arguments keyword, then rewrite your solution to use the ... rest operator.
*/
function sum(...things){
    //return arguments.length;
    let total = 0;
    for(let i=0; i<things.length; i++){
        total += things[i];
    }

    
    return total;
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2, 3, 4, 5)); // 15

//--------------------------------------------------------

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

Function.prototype.myBind = function(obj, ...things){
    console.log(arguments)
    console.log(`things: ${things}`);
    return (...args) =>{
        console.log(`args: ${args}`);
        this.apply(obj, things.concat(args));
    }; // apple(context, [arg1, arg2])
}

Function.prototype.myBind = function(obj, ...things){
    let that = this;
    
    console.log(`arguments: ${Array.from(arguments)}`);
    return function() {
        console.log(`arguments: ${Array.from(arguments)}`);
        //arguments.forEach(arg => things.push(arg));
        for(let i = 0; i<arguments.length; i++){
            things.push(arguments[i])
        }
        return that.apply(obj, things);
    };
}

Function.prototype.myBind2 = () => {
    console.log(arguments);
}




console.log("1")
// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
markov.says.myBind2();
// Pavlov says meow to Kush!
// true

console.log("2")
// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

console.log("3")
// bind time arg is "meow", call time arg is "Markov"
const boundSays = markov.says.myBind(pavlov, "meow")  // bind arg
boundSays("Markov");  // call time arg
// Pavlov says meow to Markov!
// true

console.log("4")
// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

//---------------------------------------------------------

function curriedSum(num) {

    let numArgs = num;
    let numbers = [];

    return function _curriedSum(n){
        numbers.push(n)
        if (numbers.length === numArgs) {
            return numbers.reduce((acc,el) => acc + el);
        } else {
            return _curriedSum;
        }
    }
}
let tum = curriedSum(4);
tum = tum(5);
tum = tum(30);
tum = tum(20);
console.log(tum(1));

// console.log(tum(5)(30)(20)(1));
// Function.prototype.curry(numArgs)