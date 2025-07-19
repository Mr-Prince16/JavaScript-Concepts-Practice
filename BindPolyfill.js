// Bind Method Function borrowing concept
let name = {
    firstName: "Srinjoy",
    lastName: "Bhattacharya"
}
let printName = function (hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state + " " + country)
}

let printMyName = printName.bind(name, 'Kolkata', 'WestBengal');
printMyName('India')
//myBind Polyfill
Function.prototype.myBind = function (...args) {
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}
let printMyName2 = printName.myBind(name, 'Kolkata', 'WestBengal')
printMyName2('India')