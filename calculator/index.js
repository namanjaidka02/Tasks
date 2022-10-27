// getting all the buttons in one variable
let buttons = document.querySelectorAll("button");

// getting input in variable named solution
let solution = document.getElementById("solution");

let result = "";

// adding forach method to buttons and passing button in it to get every single button
buttons.forEach((button) => {
  // addding addEventListener to button, so when it is clicked it invokes a function with a eveent parameter
  button.addEventListener("click", (e) => {
    // using conditional statements
    // e is used to target or get the innerHTML of the buttons

    if (e.target.innerHTML === "=") {
      //result was declared with a empty string as a value

      result = eval(result);
      // so now 2 numbers is add/subtracted/multiplied/divided using eval(function)
      // for eg eval(1+1) returns 2
      solution.value = result;

      // to clear the input box
    } else if (e.target.innerHTML === "C") {
      result = "";
      solution.value = result;
    } else {
      result = result + e.target.innerHTML;
      solution.value = result;
    }
  });
});
