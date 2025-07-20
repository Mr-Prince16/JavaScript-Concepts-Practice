document.querySelector("#grandparent").
addEventListener('click',(e)=>{
    console.log("Grandparent Clicked")
}, true)
document.querySelector("#parent").
addEventListener('click', (e)=>{
    console.log("Parent clicked");
})
document.querySelector("#child").
addEventListener('click', (e)=>{
    console.log("Child clicked");
    e.stopPropagation();
})