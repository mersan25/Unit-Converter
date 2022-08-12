let convertEl=document.getElementById("convert-el")
let lengthEl=document.getElementById("length-el")
let volumeEl=document.getElementById("volume-el")
let massEl=document.getElementById("mass-el")
let inputEl=document.getElementById("input-el")


//The functions below allow the button to work well when clicking i.e convert button
let inputNumber =inputEl.value

convertEl.addEventListener("click",function(){
  inputNumber = inputEl.value;
  convert()
});

//this allow us to setup the actual value and create a functions that will process the calculations
const oneMeter = 3.281;
const oneLiter = 0.264;
const oneKg = 2.204;

function calLength() {
 let sumMeter = inputNumber/oneMeter;
 sumMeter = parseFloat(sumMeter.toFixed(3));
 let sumFeet = inputNumber*oneMeter;
 sumFeet = parseFloat(sumFeet.toFixed(3));
lengthEl.innerHTML =`
<p>
${inputNumber} meters = ${sumFeet} feet 
              |
${inputNumber} feet = ${sumMeter} meters
</p>`;
}


function calVolume() {
 let sumLiter = inputNumber/oneLiter;
  sumLiter = parseFloat(sumLiter.toFixed(3));
 let sumGallons = inputNumber*oneLiter;
 sumGallons = parseFloat(sumGallons.toFixed(3));
volumeEl.innerHTML =`
<p>
${ inputNumber} Liter = ${sumGallons} Gallons 
                 | 
${ inputNumber} Gallons = ${sumLiter} Liter 
</p>`;
}


function calmass() {
 let sumKilos = inputNumber/oneKg;
 sumKilos = parseFloat(sumKilos.toFixed(3));
 let sumPounds = inputNumber*oneKg;
 sumPounds = parseFloat(sumPounds.toFixed(3));
massEl.innerHTML =`
<p>
${inputNumber} Kilo = ${sumPounds} Pounds
                |
${inputNumber} Pounds = ${sumKilos} Kilo
</p>`;
}

function convert(){
  calLength()
  calVolume()
  calmass()
}