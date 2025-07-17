//  Call Code. In Call code, we simply pass the arguments as comma sperated. Also we are borrowing the print details function. 
// This is also known as function borrowing.

let a = {
  name: "Srinjoy",
  profession: "SoftwareEngineer"
}

function printDetails(state, city) {
  console.log(this.name + " " + this.profession + " from " + state + ", " + city)
}
printDetails.call(a, "West Bengal", "Kolkata");

// In apply code we are still doing function borrowing, but we are passing arguments in array.

let b = {
  name: "Sagar",
  profession: "Kuch Nahi"
}
printDetails.apply(b, ['Maharashtra', 'Pune'])

// In Bind, we are just storing the borrowed function in a variable for later use.
let c = {
  name: "Sachin",
  profession: "Event Manager"
}
let storedFunction = printDetails.bind(c);

console.log(storedFunction);
storedFunction("Maharashtra", "Latur");