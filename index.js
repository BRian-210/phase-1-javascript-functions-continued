// code your solution here
function saturdayFun(saturdayFun = "roller-skate") {
  return `This Saturday, I want to ${saturdayFun}!`;
}

function mondayWork(mondayWork = "go to the office") {
  return `This Monday, I will ${mondayWork}.`;
}

function wrapAdjective(wrapper = "*") {
  return function(adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}