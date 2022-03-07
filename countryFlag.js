const countryFlagListElem = document.querySelector('.text-input')
const addCountryElem = document.querySelector(".flag_entered");
const addFlagElem = document.querySelector(".flag_entered");
const displayCountry = document.querySelector(".Show");
const countryOutput = document.querySelector(".list_output")

// const countryFlagArr;

// if (localStorage['theCountriesFlags']) {
//     countryFlagArr = JSON.parse(localStorage.getItem('theCountriesFlags'))
    
// }
const countryInstance = countryFlags();

addCountryElem.addEventListener('click', function () {

    console.log(countryFlagListElem.value);
    const theCountries = countryInstance.countryEntered(countryFlagListElem.value);
    console.log(theCountries)
   
    
})

addFlagElem.addEventListener('click', function(){
    
    console.log(countryFlagListElem.value);
    const theFlags = countryInstance.flagInserted(countryFlagListElem.value)
    console.log(theFlags);
    
})

displayCountry.addEventListener('click', function(){

    const theList = countryInstance.getList()
            console.log(theList);
            for(let i = 0;i < theList.length; i++){
                var list = document.createElement('li')
                console.log(list);
                list.classList.add('content')
                list.innerHTML = theList[i].country + " " + theList[i].flag;
                countryOutput.appendChild(list)                                                                                                                            
            }
        
})