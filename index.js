function scuberGreetingForFeet(feetTraveled){
  if (feetTraveled <= 400) {
    return `This one is on me!`
  }
  else if (feetTraveled > 400 && feetTraveled < 2000) {
    return `That will be twenty bucks.`
  }
  else if (feetTraveled >= 2000 && feetTraveled < 2500) {
    return `I will gladly take your thirty bucks.`
  }
  else if (feetTraveled >= 2500) {
    return `No can do.`
  }
}

function ternaryCheckCity(destination){
  return destination === `NYC` ? `Ok, sounds good.` : `No go.`
}

function switchOnCharmFromTip(tipLevel){
  switch (tipLevel) {
    case `generous`:
      return `Thank you so much.`
      break;
    case `not as generous`:
      return `Thank you.`
      break;
    default:
      return `Bye.`
  }
}