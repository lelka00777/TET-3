// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 'a':
    console.log(answer = 'apple');
    break;
  case 'b':
    console.log(answer = 'bird');
    break;
  case 'c':
    console.log(answer = 'cat');
    break;
 
 default:
    console.log(answer = 'stuff');
    break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);