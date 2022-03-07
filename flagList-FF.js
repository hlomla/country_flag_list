function countryFlags() {

    const countries = [
        {country:"Argentina",
        flag:"🇦🇷"}, 
        {country:"Brazil",
        flag:"🇧🇷"}, 
        {country:"Chile", 
        flag:"🇨🇱"},
        {country:"Zambia",
        flag:"🇿🇲"}, 
        {country:"Uganda", 
        flag:"🇺🇬"},
        {country:"Malawi", 
        flag:"🇲🇼"},
        {country:"Rwanda",
        flag:"🇷🇼"}, 
        {country:"Ireland", 
        flag:"🇮🇪"},
        {country:"Switzerland", 
        flag:"🇨🇭"},]

    function countryEntered(country) {
        let countryList = country.charAt(0).toUpperCase() + country.slice(1)
        if (!countries.includes(countryList))
            countries.push(countryList);
    }

    function flagInserted(flag) {
        let flagList = flag
        if (!countries.includes(flagList)) {
            countries.push(flagList[i])
            }
    }

    function getList() {
        return countries
    }
    return {
        countryEntered,
        flagInserted,
        getList
    }
}