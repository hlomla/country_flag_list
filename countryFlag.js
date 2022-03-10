const countryFlagListElem = document.querySelector('.text-input')
const addCountryElem = document.querySelector(".flag_entered");
const addFlagElem = document.querySelector(".flag-input");
const displayCountry = document.querySelector(".Show");
const countryOutput = document.querySelector(".list_output")

// const countryFlagArr;

// if (localStorage['theCountriesFlags']) {
//     countryFlagArr = JSON.parse(localStorage.getItem('theCountriesFlags'))

// }
const countryInstance = countryFlags();

addCountryElem.addEventListener('click', function () {

    console.log(addFlagElem.value);
    console.log(countryFlagListElem.value);
    const addedCoutries = countryInstance.add(countryFlagListElem.value, addFlagElem.value)
    console.log(addedCoutries);

})

displayCountry.addEventListener('click', function () {
    const theList = countryInstance.getList()
    console.log(theList);
    countryOutput.innerHTML = ''
    for (let i = 0; i < theList.length; i++) {
        var list = document.createElement('ul')
        console.log(list);
        list.classList.add('content')
        list.innerHTML = theList[i].country + " " + theList[i].flag;
        countryOutput.appendChild(list)
    }

})
 