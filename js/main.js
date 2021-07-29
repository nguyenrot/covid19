const covidAPI = 'https://api.ncovvn.xyz/wom/countries/Vi%E1%BB%87t%20Nam'

const todayCases = document.querySelector('.content__item--todayCases h3')
const deaths = document.querySelector('.content__item--deaths h3')
const recovered = document.querySelector('.content__item--recovered h3')
const active = document.querySelector('.content__item--active h3')
const cases = document.querySelector('.content__all h3')

fetch(covidAPI)
    .then((response)=>{
        return response.json();
    })
    .then((covid)=>{
        todayCases.textContent = covid.todayCases;
        deaths.textContent = covid.deaths;
        recovered.textContent = covid.recovered;
        active.textContent = covid.cases - (covid.recovered+covid.deaths);
        cases.textContent = covid.cases;
    })