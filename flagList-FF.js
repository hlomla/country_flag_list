function countryFlags() {

    const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
    const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

    function countryEntered(country) {
        var countryList = country
        if (!countries.includes(countryList))
            countries.push(countryList)
        return countryList
    }

    // function enterCountry(flag) {
    //     for (var i = 0; i < countries.length; i++) {
    //         if (!countries[i].startsWith(flag)) {
    //             flags.push(countryList[i])
    //         }
    //     }
    //     return flags
    // }

    function getList() {
        return countryList
    }
    return {
        countryEntered,
        // enterCountry,
        getList
    }
}