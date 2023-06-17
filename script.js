let y = 0;
let count = 0;
  const Random = ()=>{
  var x = Math.random()*10;
   y = parseInt(x);
   console.log(y);
  document.getElementById('information').innerText = "number generated"
  count = 0;

}
const Check = () =>{
const guess = document.getElementById('input').value;
console.log(guess);
if(count < 3){
if(guess == y){
document.getElementById('result').innerText = "Congratulation correct awnser";


}
else{
document.getElementById('result').innerText = "Incorrect guess again";
if(y > guess){
document.getElementById('hint').innerText = "high";
}
else if(y <guess){
document.getElementById('hint').innerText = "low"; 
}
count++;
document.getElementById('chances').innerText = 3-count;

}}
else{
document.getElementById('result').innerText= "Sorry try again later Chances over";

}



}
