const textbox = document.getElementById("textbox");
const toRoman = document.getElementById("toRoman");
const toNumber = document.getElementById("toNumber");
const result = document.getElementById("result");
const pindutan = document.getElementById("pindutan");

pindutan.onclick = function (){Convert(textbox);}; 

function Convert(textbox){
    textbox = textbox.value;
    if(toRoman.checked){
        CToRoman(textbox);
    }else if(toNumber.checked){
        CToNumber(textbox);
    }else{
        result.textContent = "pls select"
    }
}

function CToRoman(textbox){
    result.textContent = `${textbox} to roman`;
}
function CToNumber(textbox){
    result.textContent = `${textbox} to number`;
}