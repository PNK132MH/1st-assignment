
document.body.innerHTML = `
<div id="container">
<h1 id="title">Expense Tracker</h1>


<div id="shower">
    <p id="param">Total Spent</p>
    <h1 id="money">$0.00</h1>
    </div>

    <input type="text" id="input" placeholder="Expense name (e.g. Lunch)">
    <br>

    <input type="number" id="input1" placeholder="Amount (e.g. 25)">
    <br>

    <button id="btn">Add Expense</button>

    <ul id="expenses"></ul>
</div>
`;

let title = document.getElementById("title");
title.style.color = "blue";
title.style.textAlign = "center";

let container = document.getElementById("container");
let param = document.getElementById("param");
let money = document.getElementById("money");

const input = document.getElementById("input");
const input1 = document.getElementById("input1");
const btn = document.getElementById("btn");
const expenses = document.getElementById("expenses");

let total = 0;

btn.addEventListener("click", function() {

    let expense1 = input.value.trim();
    let expense2 = input1.value.trim();

    if (expense1 && expense2) {

        let expenselist = document.createElement("li");

        let expensetext = document.createElement("p");
        expensetext.textContent = expense1 + " $" +expense2

        let deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";

        expenselist.append(expensetext);
        expenselist.append(deletebtn);

        expenses.append(expenselist);

        let amount = Number(input1.value);

        total = total + amount;
        money.textContent ="$" + total;
        input.value=""
        input1.value=""

        deletebtn.addEventListener("click", function() {

            total = total - amount;
            money.textContent = "$" + total;

            expenselist.remove();
        });
    }
});

