import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { _ } from 'lodash';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
console.log('homework 10');

const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export function createCountryLi(name, flagSrc) {
  const countryEl = document.createElement('li');
  const flag = document.createElement('img');
  flag.src = flagSrc;
  flag.width = 30;
  countryEl.textContent = name;
  countryList.append(countryEl);
  countryEl.append(flag);
}

export function foundCountry(name, flagSrc, capital, pop, lang) {
  const countryEl = document.createElement('li');
  const flag = document.createElement('img');

  clearCountry();
  countryEl.textContent = name;
  flag.src = flagSrc;
  flag.width = 60;

  countryList.append(countryEl);
  countryEl.append(flag);

  const infoUl = document.createElement('ul');
  const capitalLi = document.createElement('li');
  const popLi = document.createElement('li');
  const langLi = document.createElement('li');

  capitalLi.textContent = `Capital: ${capital}`;
  popLi.textContent = `Population: ${pop}`;
  langLi.textContent = `Languages: ${lang}`;

  countryInfo.append(capitalLi);
  countryInfo.append(popLi);
  countryInfo.append(langLi);
}

export function clearCountry() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

// event listening input changes
input.addEventListener(
  'input',
  _.debounce(() => {
    clearCountry();
    if (input.value.trim() != '') {
      fetchCountries(input.value.trim());
    }
  }, DEBOUNCE_DELAY)
);

//test
// fetchCountries('Peru');
