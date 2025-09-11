let number = 0;
document.getElementById("mySubmit").onclick = function(){
    number=document.getElementById("myText").value;
    number = Number(number);
    number+=5;
    document.getElementById("myH2").textContent = `${number}`;
}