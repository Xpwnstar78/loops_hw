let lunchArray = ['Burger', 'Salad', 'Lasagna', 'Sushi', 'Meatloaf'];

function findLongest(array) {
  let length = 0;
  let longest = "";
  for (let i = 0; i < array.length; i++) {

    if (array[i].length > length) {
      length = array[i].length;
      longest = array[i];
    }
  }
  return "String : " + longest + " Length : " + length;
}
console.log(findLongest(lunchArray));

let array = [1, 2, 3, 4, 5];
console.log(array.filter(function (el, ind) {
  return ind % 2 === 0;
}));

function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);