const countryFlagListElem = document.querySelector('.text-input')
const addCountryElem = document.querySelector(".flag_entered");
const addFlagElem = document.querySelector(".Add");
const displayCountry = document.querySelector(".Show");
const countryOutput = document.querySelector(".list_output")

const countryInstance = countryFlags();

addCountryElem.addEventListener('click', function () {
    
    console.log(countryFlagListElem.value);
    const theCountries = countryInstance.countryEntered(countryFlagListElem.value);
    console.log(theCountries)
    const theList = countryInstance.getList()
    console.log(theList);
    for(let i = 0;i < theList.length; i++){
        var list = document.createElement('li')
        console.log(list);
        list.classList.add('content')
        list.innerHTML = theList[i];
        countryOutput.appendChild(list)
    }
})

