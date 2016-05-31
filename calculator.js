//global variables to use inside the functions.
var result = "";

//variables to select the buttons
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract"); 
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");

//variable for result div. 
var printer = document.getElementById("result");

//printer to get the output to the dom
var print = function(result) {
  printer.innerHTML = result;
}

/* function that multiplies two numbers
  passed in as arguments. Return the product. */
var multiply = function(num1, num2) {
  result = num1 * num2;
  return result;
};

/* function that adds two numbers
  passed in as arguments. Return the sum. */
function add(num1, num2) {
  result = num1 + num2;
  return result;
};

/* function that subtracts two numbers
  passed in as arguments. Return the difference. */
var subtract = function(num1, num2) {
  result = num1 - num2;
  return result;
};

/* function that divides two numbers
  passed in as arguments. Return the quotient. */
var divide = function(num1, num2) {
  result = num1 / num2;
  return result;
};

/*function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
    Return the value of the operation. */

var calculator = function(num1, num2, operation) {
  result = operation(num1, num2);
  console.log("ran", result);
  return result;
};

var whatWasClicked = function() {
  
  //grabs the two user-input numbers.
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operation = "";
  console.log("numbers",num1, num2, typeof num1, typeof num2 );

  //if statement to assign the correct math to variable operation. 
  if (event.target === addButton) {
    console.log("adding");
    operation = add;
  } else if (event.target ===subtractButton) {
    operation = subtract;
  } else if (event.target ===multiplyButton) {
    operation = multiply;
  } else {
    operation = divide;
  };

  //now run the calculator function, sending the three values I just made.
  calculator(num1, num2, operation);
  //now print the result to the dom. 
  print(result);
};


//four event listeners for buttons that will run calculate function. 
addButton.addEventListener("click", whatWasClicked);
subtractButton.addEventListener("click", whatWasClicked);
multiplyButton.addEventListener("click", whatWasClicked);
divideButton.addEventListener("click", whatWasClicked);


