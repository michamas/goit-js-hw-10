import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { _ } from 'lodash';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
console.log('homework 10');

const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export function easyFunction() {
  console.log('trial');
}
export function createCountryLi(name, flag) {
  const countryLi = document.createElement('li');
  countryLi.textContent = name;
  countryList.append(countryLi);
  // console.log(flag);
  // countryLi.insertAdjacentElement('afterbegin', `<img src='${flag}'/>`);
}

export function foundCountry(name, capital, pop, lang) {
  countryList.innerHTML = '';
  const countryLi = document.createElement('li');
  countryLi.textContent = name;
  countryList.append(countryLi);

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

// event listening input changes
input.addEventListener(
  'input',
  _.debounce(() => {
    countryList.innerHTML = '';

    if (input.value.trim() != '') {
      fetchCountries(input.value.trim());
    }
  }, DEBOUNCE_DELAY)
);

//test
// fetchCountries('Peru');
