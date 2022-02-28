function countryFlags() {

    const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
    const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

    function countryEntered(country) {
        let countryList = country.charAt(0).toUpperCase() + country.slice(1)
        if (!countries.includes(countryList))
            countries.push(countryList)
       return countries;
    }

    function flagInserted(flag) {
        let flagList = flag
        if (!flags.includes(flagList)) {
            flags.push(flagList[i])
            }
        
        return flags
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