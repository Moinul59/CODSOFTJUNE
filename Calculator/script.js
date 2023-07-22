let string = "";
let input = document.querySelector('input')
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      input.value = string;
    }
    else if (e.target.classList.contains('bi-backspace')) {
      string = string.slice(0, -1);
      input.value = string
    }
    else if (e.target.innerHTML == 'AC') {
      string = ""
      input.value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      input.value = string;
    }
  })
})