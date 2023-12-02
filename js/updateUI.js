const countriesList = document.querySelector(".countries-list");
const aboutWrapper = document.querySelector(".about-wrapper");
const selectList = document.querySelector(".select-list");
const selects = document.querySelectorAll(".select-item");

// Update User Interface

function updateUI() {
  const countriesInfo = Array.from(arguments).flat();
  const template = document.createDocumentFragment();
  countriesList.innerHTML = "";
  countriesInfo.forEach((country) => {
    const li = createElement("li", "country-item");
    const a = createElement("a", "country-item-link");
    a.setAttribute("href", `./about.html?country-name=${country.name.common}`);
    const img = createElement("img", "country-item-img");
    const h3 = createElement("h3", "country-item-title");
    const population = createElement("p", "country-item-population");
    const region = createElement("p", "country-item-region");
    const capital = createElement("p", "country-item-capital");
    img.src = `${country.flags.png}`;
    img.setAttribute("height", "160");
    h3.innerHTML = `${country.name.common}`;
    population.innerHTML = `Population: <span>${country.population}</span>`;
    region.innerHTML = `Region: <span>${country.region}</span>`;
    capital.innerHTML = `Capital: <span>${country.capital}</span>`;

    a.append(img, h3, population, region, capital);
    template.appendChild(a);
    li.appendChild(template);
    countriesList.appendChild(li);
  });
}

// Update About User Interface

function updateAboutUI(data) {
  console.log(data);
  aboutWrapper.innerHTML = `
  <img class="about-main-img" src="${data.flags.png}" alt="">
  <div class="about-content">
      <div class="about-content-top">
          <div class="about-content-top-left">
              <h2 class="about-title">${data.name.common}</h2>
              <div class="left-wrapper">
                  <p class="left-wrapper-native-name">Native Name: <span>${data.name.nativeName}</span></p>
                  <p class="left-wrapper-population">Population: <span>${data.population}</span></p>
                  <p class="left-wrapper-region">Region: <span>${data.region}</span></p>
                  <p class="left-wrapper-sub-region">Sub Region: <span>${data.subregion}</span></p>
                  <p class="left-wrapper-capital">Capital : <span>${data.capital}</span></p>
              </div>
              
          </div>
          <div class="about-content-top-right">
              <div class="right-wrapper">
                  <p>Top Level Domain: <span>${data.cioc}</span></p>
                  <p>Currencies: <span>${data.currencies}</span></p>
                  <p>Languages: <span>${data.languages}</span></p>
              </div>
          </div>  
      </div>
      <div class="about-content-bottom">
        <h4 class="border-countries-title">Border Countries:</h4>
      </div>
  </div>`;
  const borders = data.borders;
  const borderWrapper = document.querySelector('.about-content-bottom')
  for (let i in borders) {
    const chegara = createElement('a' , 'border-link')
    chegara.textContent = `${borders[i].common}`
    chegara.setAttribute('href' , `./about.html?country-name=${borders[i].slug.toLowerCase()}`)
    borderWrapper.appendChild(chegara)
  }
}

// Filter Countries

function filterUI(data) {
  selects.forEach((item) => {
    item.addEventListener("click", () => {
      selectList.style.display = "none";
      setTimeout(() => {
        selectList.style.display = "block";
      }, 500);
      const itemValue = item.innerHTML;
      const filteredCountries = data.filter((country) => {
        return country.region == itemValue;
      });
      const template = document.createDocumentFragment();
      countriesList.innerHTML = "";
      filteredCountries.forEach((country) => {
        const li = createElement("li", "country-item");
        const a = createElement("a", "country-item-link");
        a.setAttribute(
          "href",
          `./about.html?country-name=${country.name.common}`
        );
        const img = createElement("img", "country-item-img");
        const h3 = createElement("h3", "country-item-title");
        const population = createElement("p", "country-item-population");
        const region = createElement("p", "country-item-region");
        const capital = createElement("p", "country-item-capital");
        img.src = `${country.flags.png}`;
        img.setAttribute("height", "160");
        h3.innerHTML = `${country.name.common}`;
        population.innerHTML = `Population: <span>${country.population}</span>`;
        region.innerHTML = `Region: <span>${country.region}</span>`;
        capital.innerHTML = `Capital: <span>${country.capital}</span>`;

        a.append(img, h3, population, region, capital);
        template.appendChild(a);
        li.appendChild(template);
        countriesList.appendChild(li);
      });
    });
  });
}

// Create Element function

function createElement(elementName, className) {
  const element = document.createElement(elementName);
  className && element.classList.add(className);
  return element;
}

export { updateUI, updateAboutUI, filterUI };
