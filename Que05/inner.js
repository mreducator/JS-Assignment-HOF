let validateUrl = 'https://pwskills.com';

function toValidateUrl(url){
 let urlValidatorRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
 const result = urlValidatorRegex.test(url);
 if(result === true){
   console.log('url matches the regex')
 }else{
    console.log('url not matches the regex')
 }
}
toValidateUrl(validateUrl)