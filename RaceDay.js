let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = true; 
let age = 17; 

if(isEarly && age > 18){
  raceNumber += 1000; 
}

if(isEarly && age > 18){
  console.log(`You will race at 9:30am. Your number is ${raceNumber}.`);
}

else if(!isEarly && age > 18){
  console.log(`You will race at 11:00am. Your number is ${raceNumber}.`);
}

else if(age < 18){
  console.log(`You will race at 12:30pm. Your number is ${raceNumber}.`);
}

else{
  console.log('See the registration desk!');
}
