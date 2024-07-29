const storeOfBooks = [{
    book1:'Rich dad poor dad',
    priceInUSA$: `70`
},{
    book2:'One side of life',
    priceInUSA$: `700`, 
},{
    book3:'Genius Guy',
    priceInUSA$: `1000`
},{
    book4:'The Novel',
    priceInUSA$: `200`
}].map((listOfBookWithPrices)=>{
    const oneUSD = 84;
    let { priceInUSA$ } = listOfBookWithPrices;
    const amountInIndianCurrency = oneUSD * priceInUSA$;
    listOfBookWithPrices.priceInIndia = amountInIndianCurrency;
    return listOfBookWithPrices
   
})

console.log(storeOfBooks);





