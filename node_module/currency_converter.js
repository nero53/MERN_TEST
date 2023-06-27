
const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"USD", to:"NPR", amount:0.07, isDecimalComma:true})
currencyConverter.rates().then((response) => {
    console.log(response) //or do something else
})