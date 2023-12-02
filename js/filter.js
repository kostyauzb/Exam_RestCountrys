import getData from "./request.js";
import { filterUI } from "./updateUI.js";


const API = "https://countries-api-v7sn.onrender.com/countries?limit=250";

getData(API)
  .then((data) => {
    filterUI(data.data);
  })
  .catch((error) => {
    console.log(error);
  });
