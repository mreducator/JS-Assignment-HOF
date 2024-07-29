const storeOfBooks = [
{
    authorName:'Richardson',
    yearOfBookPublish: 2008,
    title:'Book1'
},
{
    authorName:'Jaksonson',
    yearOfBookPublish: 2006,
    title:'Book2'
},
{
    authorName:'Johnson',
    yearOfBookPublish: 2023,
    title:'Book3'
},
{
    authorName:'George .N',
    yearOfBookPublish: 2007,
    title:'Book4'
},
{
    authorName:'Rahul',
    yearOfBookPublish: 2018,
    title:'Book5'
},
{
    authorName:'Prof.Khurana',
    yearOfBookPublish: 2020,
    title:'Book6'
}
].filter((listOfBooks)=>{
    const {yearOfBookPublish} = listOfBooks;
    if(yearOfBookPublish > 2009){
        return listOfBooks.authorName.toUpperCase();
    }
}).map((bookWithAuthor)=>{
   // console.log(bookWithAuthor)
    const {authorName} = bookWithAuthor;
     let authorNameWithCaptailaize = authorName.toUpperCase();
    bookWithAuthor.authorName = authorNameWithCaptailaize;
    return bookWithAuthor;
    
    
})
console.log(storeOfBooks)

