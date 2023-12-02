import getData from "./request.js";
import { updateUI } from "./updateUI.js";
const input = document.querySelector(".search-input")
const form = document.querySelector(".form")

// Getdata
const API = "https://countries-api-v7sn.onrender.com/countries?limit=250";

getData(API)
.then((data) => {
    updateUI(data.data);
  })
  .catch((error) => {
    console.log(error);
  });

form.addEventListener("submit" , (e)=>{
  e.preventDefault()
})

// Search by Name
input.addEventListener("input" , ()=>{
  const inputValue = input.value.toLowerCase()
  const countriesName = document.querySelectorAll(".country-item-title")
  countriesName.forEach(item => {
    if(item.textContent.toLowerCase().includes(inputValue)){
      item.parentElement.parentElement.classList.remove("hidden")
    }else{
      item.parentElement.parentElement.classList.add("hidden")
    }
  });
})



