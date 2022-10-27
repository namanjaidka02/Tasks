let buttons = document.querySelectorAll("button");
let solution = document.getElementById("solution");
// solution.value = 0;
let result = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      result = eval(result);
      solution.value = result;
    } else if (e.target.innerHTML === "C") {
      result = 0;
      solution.value = result;
    } else {
      result = result + e.target.innerHTML;
      solution.value = result;
    }
  });
});
