document.body.innerHTML=`<div id="container"><h1>Calculator</h1>
<p id="num">0</p>
<br>
<button id="num1">1</button>
<button id="num2">2</button>
<button id="num3">3</button>
<button id="add">+</button>
<button id="sub">-</button>
<br>
<button id="num4">4</button>
<button id="num5">5</button>
<button id="num6">6</button>
<button id="mult">x</button>
<button id="div">/</button>
<br>
<button id="num7">7</button>
<button id="num8">8</button>
<button id="num9">9</button>
<button id="equal">=</button>
<button id="num0">0</button>
<br>
<button id="del">Clear All</button>
</div>`

const num0 = document.getElementById("num0")
const num = document.getElementById("num")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8")
const num9 = document.getElementById("num9")
const add = document.getElementById("add")
const sub = document.getElementById("sub")
const mult = document.getElementById("mult")
const div = document.getElementById("div")
const equal = document.getElementById("equal")
const del = document.getElementById("del")
function addNumber(number) {
    if (num.textContent === "0") {
        num.textContent = number;
    } else {
        num.textContent += number;
    }
}
num0.addEventListener(`click`,function(){
    addNumber("0")  
})
num1.addEventListener(`click`,function(){
   addNumber("1")  
})
num2.addEventListener(`click`,function(){
    addNumber("2")
})
num3.addEventListener(`click`,function(){
    addNumber("3") 
})
num4.addEventListener(`click`,function(){
    addNumber("4" )
})
num5.addEventListener(`click`,function(){
    addNumber("5" )
})
num6.addEventListener(`click`,function(){
    addNumber("6") 
})
num7.addEventListener(`click`,function (){
    addNumber("7" )
})
num8.addEventListener(`click`,function (){
    addNumber("8" )
})
num9.addEventListener(`click`,function (){
    addNumber("9" )
})
let firstnumber
let operator
let secondnumber
add.addEventListener(`click`,function add(){
    firstnumber=Number(num.textContent)
    operator = "+"
    num.textContent = "0"
})
sub.addEventListener(`click`,function sub(){
    firstnumber=Number(num.textContent)
    operator = "-"
    num.textContent = "0"
})
mult.addEventListener(`click`,function mult(){
    firstnumber=Number(num.textContent)
    operator = "*"
    num.textContent = "0"
})
div.addEventListener(`click`,function div(){
    firstnumber=Number(num.textContent)
    operator = "/"
    num.textContent = "0"
})
equal.addEventListener(`click`, function equal(){
    secondnumber=Number(num.textContent)
    if(operator==="+"){
        num.textContent=firstnumber + secondnumber
    }
    else if(operator==="-"){
        num.textContent=firstnumber - secondnumber
    }
    else if(operator==="*"){
        num.textContent=firstnumber * secondnumber
    }
    else if(operator==="/"){
        num.textContent=firstnumber / secondnumber
    }

})
del.addEventListener(`click`, function del(){
    num.textContent="0"
    firstnumber=undefined
    secondnumber=undefined
    operator=undefined
})
