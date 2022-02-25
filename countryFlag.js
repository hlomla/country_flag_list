var countryFlagListElem = document.querySelector('.text-input')
const addCountryElem = document.querySelector(".flag_entered");
const addFlagElem = document.querySelector(".add_btn");
const displayCountry = document.querySelector(".showList");

// const countriesArr;

const countryInstance = countryFlags();


addCountryElem.addEventListener('click', function(){
    const theCountries = countryInstance.countryEntered(countryFlagListElem.value);
    console.log(theCountries)
    for(let i = 0; theCountries.length; i++){
        var list = document.createElement('button')
        list.classList.add('')
        list.innerHTML = theCountries[i];
        displayCountry.appendChild(list)
    }
})