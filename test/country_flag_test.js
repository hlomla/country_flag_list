describe('Country Flag List Factory Function', function () {

    describe('Return country value when user enters a country', function () {
        it('should be able to return country and its flag', function () {
            let country = countryFlags();

            country.countryEntered('country');
            country.flagInserted('flag')

            country.getList(['Argentina','🇦🇷'])

            assert.deepEqual(['Argentina','🇦🇷'], country.getList(['Argentina','🇦🇷']))

        });
    });
})

