function getShippingCost(country) {
    const countryOne = 'China';
    const countryTwo = 'Chile';
    const countryThree = 'Australia';
    const countryFour = 'Jamaica';
    const priceOne = 100;
    const priceTwo = 250;
    const priceThree = 170;
    const priceFour = 120;
    switch (country) {
        case 'China':
            return `Shipping to ${countryOne} will cost ${priceOne} credits`;
            break;
        case 'Chile':
            return `Shipping to ${countryTwo} will cost ${priceTwo} credits`;
            break;
        case 'Australia':
            return `Shipping to ${countryThree} will cost ${priceThree} credits`;
            break;
        case 'Jamaica':
            return `Shipping to ${countryFour} will cost ${priceFour} credits`;
            break;
        default:
            return `Sorry, there is no delivery to your country`
    }
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));