import { transactionData } from "./transactiondata.js";


const Btn = document.querySelector(".btn");
const transactionTable = document.querySelector(".transaction_table");
const searchInput = document.querySelector(".search_input");


Btn.addEventListener("click" , showTableFunction);
searchInput.addEventListener( "click" , getInputFunction);


function showTableFunction(){

    Btn.style.display = "none" ;
    transactionTable.classList.remove("hidden");
};
