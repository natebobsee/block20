const inputnumbers = [];
const oddnumbers = [];
const evennumbers = [];


const numberbank=document.getElementById('outputbank');
const oddsbank= document.getElementById('oddsbank');
const evensbank= document.getElementById('evensbank');


const form = document.querySelector('form');
form.addEventListener('submit',addnumber);
console.log(form)


function addnumber(event) {
  event.preventDefault();
  const input = document.querySelector('#number')
  const number= form.elements.number.value
  const numberbank=document.getElementById('outputbank');
  //numberbank.push(number);
  inputnumbers.push(number);
  console.log(number);
  numberbank.innerHTML = inputnumbers;
}


const sortallbutton=document.querySelector('#sortAll');
sortallbutton.addEventListener('click', sortall);

function sortall() {
  console.log("click")
  const oddsbank= document.getElementById('oddsbank');
  const evensbank= document.getElementById('evensbank');
  const numberbank=document.getElementById('outputbank');
  //oddsbank.innerHTML = inputnumbers;
  console.log('hello')
  //sort even and odd numbers
  for (let i =0 ; i<inputnumbers.length; i++){
    let result=inputnumbers[i]%2   
        if (result===0)
        evennumbers.push(inputnumbers[i])
        else
        oddnumbers.push(inputnumbers[i])
  }
  //reset registers woth moved numbers
  inputnumbers.splice(0,inputnumbers.length)
  oddsbank.innerHTML = oddnumbers;
  evensbank.innerHTML = evennumbers;
  numberbank.innerHTML = inputnumbers;
}
const sortonebutton=document.querySelector('#sortOne');
sortonebutton.addEventListener('click', sortone);
console.log(sortonebutton);

function sortone() {
const numberbank=document.getElementById('outputbank');
console.log("opo")
//only sort the first element
let result=inputnumbers[0]%2 
if (result===0)
   evennumbers.push(inputnumbers[0])
else
   oddnumbers.push(inputnumbers[0])
   //remove first element from bank and repost
   inputnumbers.splice(0,1)
   oddsbank.innerHTML = oddnumbers;
   evensbank.innerHTML = evennumbers;
   numberbank.innerHTML = inputnumbers;
  }
