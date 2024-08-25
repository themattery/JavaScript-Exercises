var output = [];

function fizzBuzz() {
    var num = output.length + 1

    if (num % 5 == 0 && num % 3 == 0) {
        output.push("FizzBuzz")
    } else if (num % 5 == 0) {
        output.push("Buzz")
    } else if (num % 3 == 0) {
        output.push("Fizz")
    } else {
        output.push(num);    
    }
    
    console.log(output)
}