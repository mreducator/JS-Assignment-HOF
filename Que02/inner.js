let seconds = document.getElementById('seconds');
let minute = document.getElementById('minutes');




function displayTime(){
   const second = new Date().getSeconds();
     if(second < 10){
      seconds.innerText = '0'+second;
       document.getElementById('showMsg').innerText = `Time remaining to generate randomNumber : ${second}`;
   

   }else{
      seconds.innerText = second;
      document.getElementById('showMsg').innerText = `Time remaining to generate randomNumber : ${second}`
   }
   afterThreeSecondsDisplayRandomNumber(second)
  
  
}
function afterThreeSecondsDisplayRandomNumber(seconds){
  
  let generateRandomNumber = Math.floor(Math.random()*1000)+1;
  if(seconds % 3 === 0){
   document.getElementById('showMsg').innerText = ` generated randomNumber after each 3 seconds is :${generateRandomNumber}`;
}
}


 
 
 
 
 
 
 



   
 



setInterval(displayTime,1000)
setTimeout(afterThreeSecondsDisplayRandomNumber,3000)

