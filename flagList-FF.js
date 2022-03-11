function countryFlags() {

    const countries = [
        {
            country: "Argentina",
            flag: "🇦🇷"
        },
        {
            country: "Brazil",
            flag: "🇧🇷"
        },
        {
            country: "Chile",
            flag: "🇨🇱"
        },
        {
            country: "Zambia",
            flag: "🇿🇲"
        },
        {
            country: "Uganda",
            flag: "🇺🇬"
        },
        {
            country: "Malawi",
            flag: "🇲🇼"
        },
        {
            country: "Rwanda",
            flag: "🇷🇼"
        },
        {
            country: "Ireland",
            flag: "🇮🇪"
        },
        {
            country: "Switzerland",
            flag: "🇨🇭"
        },]
        countries.sort(function (a, b) {
            if (a.country < b.country) return -1
            if (a.country > b.country) return 1
            if(a.flag < b.flag) return -1
            if (a.flag > b.flag) return 1
            return 0
        })

    /**
     * 
     * @param {string} country 
     * @param {string} flag 
     */
    const add = (country, flag) => {
        let flagList = countries.filter(country => {
            return country.flag == flag
        })
        console.log(flagList);
        if (flagList.length === 0) {
            countries.push({
                country, flag
            })
            countries.sort(function (a, b) {
                if (a.country < b.country) return -1
                if (a.country > b.country) return 1
                if(a.flag < b.flag) return -1
                if (a.flag > b.flag) return 1
                return 0
            })
            return true
        }

        return false
    }

    const getList = () => {

        return countries
    }
    // const filtered = (flagList) => {
    //     if(flagList.startsWith()) 
    //     return flagList.value
    // }

    return {
        // filtered,
        getList,
        add
    }
}