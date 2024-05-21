const input = document.getElementById("input")
const button = document.getElementById("button")
function reverseString(str){
    return str.split("").reverse().join("");
}

function check(){
    const value = input.value;
    const reverse = reverseString(value);
    
    if (value === reverse){
        alert("This is a palindrome");
    }
    else{
        alert("Not a palindrome");
    }
    
}

input.addEventListener('input', () => {
  if (input.value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
})
