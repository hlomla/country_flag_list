describe('Country Flag List Factory Function', function () {

    describe('Return country value when user enters a country', function () {
        it('should be able to return country and its flag', function () {
            let countries = countryFlags();

            countries.countryEntered('country');
            countries.flagInserted('flag')

            let list = countries.getList(['Argentina','🇦🇷']);

            assert.deepEqual(list,  {
                country: 'Argentina',
                flag: '🇦🇷'
            })

        });
        // it('should be able to return country and its flag when two countries have been entered', function () {
        //     let country = countryFlags();

        //     country.countryEntered('country');
        //     country.flagInserted('flag')

        //     country.getList(['Argentina','🇦🇷'])

        //     assert.deepEqual(['Argentina','🇦🇷'], country.getList(['Argentina','🇦🇷']))

        // });
    });
})

