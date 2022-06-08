const gomb = document.getElementById('kattints');


gomb.addEventListener("click", Kattints);

  let sum = 0;
const number = prompt('Adjon meg egy háromjegyű pozitív egész számot: ');


let temp = number;
while (temp > 0) {
    
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log(`${number} egy Armstrong-szám`);
}
else {
    console.log(`${number} nem Armstrong-szám.`);
}
 
let Armstrongszam = document.getElementById('Armstrongszam');
Armstrongszam.innerHTML = "szám " + sz;