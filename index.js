const generate = document.getElementById('generate');
const reset = document.getElementById('reset');
const min = 1;
const max = 100;

generate.onclick = function(){
    let randomNum =Math.floor(Math.random() * (max-min))+min;
    document.getElementById('label').textContent = `${randomNum}`
};
reset.onclick = function(){
    document.getElementById('label').textContent = `?`
};