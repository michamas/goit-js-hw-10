import { createCountryLi } from '.';

export function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(r => r.json())
    .then(r => console.log(r))
    .then(r => {
      if (r.length >= 2 && r.length <= 10) {
        console.log(`we have ${r.length} results waiting for you`);
        createCountryLi(r.length, 'john');
      }
    })
    .catch(e => console.log(e));
}
