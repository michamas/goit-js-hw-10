import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { _ } from 'lodash';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
console.log('homework 10');

export function createCountryLi(times, name) {
  for (let i = 1; i <= times; i++) {
    let countryEl = document.createElement('li');
    countryEl.textContent = name;
    countryList.append(countryEl);
  }
  console.log('createCountryLi was executed');
}

const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

// event listening input changes
input.addEventListener(
  'input',
  _.debounce(() => {
    if (input.value.trim() != '') {
      fetchCountries(input.value.trim());
    }
  }, DEBOUNCE_DELAY)
);

// fetchCountries('Peru');
