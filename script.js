const gomb = document.getElementById('Kattints');


gomb.addEventListener("click", Kattints);

function Kattints() {
  let szám = Math.floorMath.random() * 
  let sz = 1;
  let tipp = prompt("Adj meg egy számot: ");

  let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');


let temp = number;
while (temp > 0) {
    
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
 
  

 
  tipp = prompt("Adj meg egy számot: ");
} 

  let eredmeny = document.getElementById('eredmeny');
