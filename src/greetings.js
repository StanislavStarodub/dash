const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greetings = document.querySelector('.js-greetings');
const USER_LS = 'currentUserName',
  SHOWING_CN = 'showing';

function showGreetings(text) {
  let a = new Date, b = a.getHours(), c = a.getMonth(), d = a.getDate(), e = "";
  const christ = "Merry Christmas! ";
  const hYear = "Happy New Year! ";
  b > 0 && b < 12 ? e = "Good morning" : b >= 12 && b <= 18 ? e = "Good afternoon" : b > 18 && b < 24 ? (e = "Good evening") : e = "Good night";
  c == 11 && d == 25 ? e = e + christ : c == 0 && d == 1 ? e = e + hYear : e;
  console.log(b);
  greetings.innerText = `${e}, ${text}`;
  greetings.classList.add(SHOWING_CN);
  form.classList.remove('showing');
}

function submitHandler(e) {
  e.preventDefault();
  localStorage.setItem(USER_LS, input.value);
  loadUserName();
  form.removeEventListener('submit', submitHandler);
}

function askForUserName() {
  form.classList.add('showing');
  form.addEventListener('submit', submitHandler);
}

function loadUserName() {
  const currentUserName = localStorage.getItem(USER_LS);
  if (currentUserName === null) {
    askForUserName();
  }
  else {
    showGreetings(currentUserName);
  }
}

function init() {
  loadUserName();
}

init();