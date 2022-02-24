function addressMaker(city, state) {
    // const newAdress = {
    //     city: city,
    //     state: state
    // }

    const newAdress = {
        city,
        state
    }

    console.log(newAdress);
}

addressMaker("Austin", "Texas")

// challenge

function newAddressMaker(address) {

    // const newAddress = {
    //     city: address.city,
    //     state: address.state,
    //     country: 'United States'
    // }

    const { city, state } = address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    }

    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

newAddressMaker({ city: "Austin", state: "Texas" })