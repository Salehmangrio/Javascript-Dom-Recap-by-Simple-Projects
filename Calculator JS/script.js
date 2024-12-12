const buttons = document.querySelectorAll(".btn");
var input = document.querySelector("#input");
const clearBtn= document.querySelector('#clearbtn');

var str="";

buttons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        if(e.target.textContent=='='){
            var result=eval(str);
            input.textContent=result;
            str="";
        }
        else{
            str+=e.target.innerText;
            input.textContent=str;
        }
    }
    );

})


clearBtn.addEventListener('click',()=>{
    input.textContent='';
    str='';
})