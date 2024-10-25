const getSleepHours = (day) => {
  switch(day){
    case 'monday': 
      return 8; 
      break; 
    case 'tuesday': 
      return 7; 
      break; 
    case 'wednesday': 
      return 8; 
      break; 
    case 'thursday': 
      return 6; 
      break; 
    case 'friday': 
      return 9; 
      break; 
    case 'saturday': 
      return 10; 
      break;
    case 'sunday': 
      return 7; 
      break; 
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 

const getIdealSleepHours = () => {
  const idealSleepHours = 9; 
  return idealSleepHours * 7; 
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours(); 
  let idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log('You get the perfect amount of sleep.');
  }
  else if(actualSleepHours > idealSleepHours){
    console.log(`You get ${actualSleepHours - idealSleepHours} more hours of sleep than needed.`); 
  }
  else{
    console.log(`You get ${idealSleepHours - actualSleepHours} less hours of sleep than you need.`); 
  }
}

calculateSleepDebt(); 


