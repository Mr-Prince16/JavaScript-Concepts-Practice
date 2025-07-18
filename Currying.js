
// Currying using bind method
function multiply(x, y) {
    console.log("Result of Currying by Bind Method is " + x * y)
}

let multiplyByTwo = multiply.bind(this, 2);

let multiplyByFive = multiply.bind(this, 5);

multiplyByTwo(3);
multiplyByFive(2);

// Currying using closures

let multiplybyClosures = function (x) {
    return function (y) {
        console.log("Result of Currying by Closures is " + x * y)
    }
}
let multiplyByThree = multiplybyClosures(3)

multiplyByThree(5);

// Real life scenario logging concept

function log(level) {
    return function (message) {
        console.log(`[${level}] ${message}`);
    }
}

const info = log("Info");
const error = log("Error");

info("User added successfully");
error("Validation error")
