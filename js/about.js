import getData from "./request.js";
import { updateAboutUI } from "./updateUI.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const CountryName = urlParams.get("country-name").toLowerCase();


const API = `https://countries-api-v7sn.onrender.com/countries/slug/${CountryName}`;

getData(API)
  .then((data) => {updateAboutUI(data);})
  .catch((error) => {console.log(error);});
