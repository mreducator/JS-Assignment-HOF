let input = 'Hello,world';
console.log(input)
let convertToArray = input.split(",");
input = convertToArray.reverse().toString();
function delayOfTwoSeconds(){
   console.log(`Reverse string is: ${input}`)
}
setTimeout(delayOfTwoSeconds,2000)
