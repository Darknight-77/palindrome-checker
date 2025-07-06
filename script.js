//Fetching HTML element with id
const resultText = document.getElementById('result');
const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');

//function to clean the input string, removing unwanted symbols
const clearInputString = (str) => {
  const regex = /[_.,:;(/)\-\s]/g;
  return str.replace(regex, '');
}

//Function to to check if word is a palindrome
function checkPalindrome(e) {
    //prevents page form loading when the submit button is pressed
    e.preventDefault();

    //checks if the input field is empty
    if (textInput.value === ""){
        return alert("Please input a value");
    }

    //converts inputs to lowercaase
  const cleanedValue = clearInputString(textInput.value).toLowerCase();

  for (let i = 0; i < Math.floor(cleanedValue.length / 2); i++) {
    if (cleanedValue[i] !== cleanedValue[cleanedValue.length - 1 - i]) {
      return result.innerText = `${textInput.value} is not a palindrome`
    }

  }

  result.innerText = `${textInput.value} is a palindrome`;
  
}

checkButton.addEventListener("click", checkPalindrome );