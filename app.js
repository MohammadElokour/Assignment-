

window.addEventListener('scroll', function(e) {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    document.getElementsByClassName('scroll-btn')[0].style = 'opacity:1;'
  } else {
    document.getElementsByClassName('scroll-btn')[0].style = 'opacity:0;'
  }
});

function scrollUp() {
  window.scrollTo(0,0);

}


/*1. Write a function called all which accepts an array and a callback and returns true if 
every value in the array returns true when passed as a parameter to the callback function.
*/

function all(array, callback) {
  let flag = true;
  array.forEach(element => {
    flag = callback(element);
    if(!flag){
      flag = false;
      return;
    }
  });
  return flag;
}

var allAreLessThanSeven = all([1,2,9], function(num){
  return num < 7;
});

console.log(allAreLessThanSeven); 







/*

2. Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

*/

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  } 
}

function contains(obj, value) {
  //debugger
  for (const prop in obj) {
    if (typeof(obj[prop]) == "object") {
      if(contains(obj[prop], value)) {
        return true
      } 
    } else if (obj[prop] == value) {   
      return true;
    }
  }
  return false
}

console.log(contains(nestedObject, 'foo2'));

