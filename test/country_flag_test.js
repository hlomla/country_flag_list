describe('Country Flag List Factory Function', function () {

    describe('Return country value when user enters a country', function () {
        it('should be able to return country and its flag', function () {
            const country = countryFlags();

            country.add(['China', '🇨🇳']);

            let countryList = country.getList([{ country: 'China', flag: '🇨🇳' }]);

            assert.equal(countryList, country.getList([{ country: 'China', flag: '🇨🇳' }])
            );
        });
        it('should be able to return country and its flag when two countries have been entered', function () {
            const country = countryFlags();

            country.add(['China', '🇨🇳', 'Paraguay', '🇵🇾']);

            let countryList = country.getList([{ country: 'China', flag: '🇨🇳', country: 'Paraguay', flag: '🇵🇾' }]);

            assert.equal(countryList, country.getList([{ country: 'China', flag: '🇨🇳' }, { country: 'Paraguay', flag: '🇵🇾' }])

            );
        });
    });
    describe('Return countries in the list alphabetically', function () {
        it('should be able to return new list when a new country is added to the existing list', function () {
            const country = countryFlags();

            let countryList = country.getList();

            country.add('China', '🇨🇳');
            
            assert.equal(countryList.length, 10);
        });
        it('should be able to return new list when two new country is added to the existing list', function () {
            
            const country = countryFlags();

            let countryList = country.getList();

            country.add('England', '🏴󠁧󠁢󠁥󠁮󠁧󠁿');
            
            assert.equal(countryList.length, 10);
            country.add('Paraguay', '🇵🇾');
            assert.equal(countryList.length, 11);
        });
        it('should not be add a country to the existing list if already added', function () {
            
            const country = countryFlags();

            let countryList = country.getList();

            country.add('England', '🏴󠁧󠁢󠁥󠁮󠁧󠁿');
            
            assert.equal(countryList.length, 10);
            country.add('England', '🏴󠁧󠁢󠁥󠁮󠁧󠁿');
            assert.equal(countryList.length, 10);
        });
    });
});
