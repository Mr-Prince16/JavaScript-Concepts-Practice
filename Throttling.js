

const handleResize = () => {
  console.log('Window resized:', window.innerWidth, window.innerHeight);
};

function throttle(fn){
let flag = true;
return function(...args){
    let context = this;

    if(flag){
        fn.apply(context, args);
        flag = false;
    
    setTimeout(()=>{
        flag=true;
    },3000)
}
}
}

const throttleResize = throttle(handleResize);
window.addEventListener('resize',throttleResize);