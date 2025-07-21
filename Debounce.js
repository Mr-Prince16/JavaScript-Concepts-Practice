let counter = 0;
const getData = () => {
    console.log("Api Called ...", counter++);
}


let doSomeMagic = function (fn, delay) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

const betterFunction = doSomeMagic(getData, 1000);

// betterFunction();



