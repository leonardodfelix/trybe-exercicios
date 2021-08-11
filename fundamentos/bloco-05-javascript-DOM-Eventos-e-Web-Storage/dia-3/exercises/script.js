function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Ex1

let ulDays = document.getElementById('days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDezDays(array) {
  for (let day of array) {
    let liDay = document.createElement('li');
    liDay.className = 'day';
    liDay.innerText = day;
    if (day === 24 | day === 25 | day === 31) {
      liDay.className += ' holiday';
    }
    if (day === 4 | day === 11 | day === 18 | day === 25) {
      liDay.className += ' friday';
    }
    ulDays.appendChild(liDay);
  }
}

createDezDays(dezDaysList);

// Ex2
const divBtn = document.querySelector('.buttons-container');

function createBtnHoliday(string) {
  let btn = document.createElement('button');
  btn.id = 'btn-holiday';
  btn.innerText = string;
  divBtn.appendChild(btn);
}

createBtnHoliday('Feriados');

// Ex3
const btnHoliday = document.getElementById('btn-holiday');
const holidayList = document.getElementsByClassName('holiday');

btnHoliday.addEventListener('click', showHolidays);

let colorHoliday = 'rgb(76,187,23)';

function showHolidays() {
  for (let day of holidayList) {
    (day.style.backgroundColor === '') ? day.style.backgroundColor = colorHoliday : day.style.backgroundColor = '';
  }
}

// Ex4
function createBtnFriday(string) {
  let btn = document.createElement('button');
  btn.id = 'btn-friday';
  btn.innerText = string;
  divBtn.appendChild(btn);
}

createBtnFriday('Sexta-feira');

// Ex5
const btnFriday = document.getElementById('btn-friday');
const fridayList = document.getElementsByClassName('friday');
const fridayListNames = [4, 11, 18, 25];
btnFriday.addEventListener('click', showFridays);

let fridayText = 'Sexta-feira';

function showFridays() {
  for (let iDay in fridayList) {
    (fridayList[iDay].innerText === fridayText)
      ? fridayList[iDay].innerText = fridayListNames[iDay] : fridayList[iDay].innerText = fridayText;
  }
}

// Ex6
const daysList = document.getElementsByClassName('day');

for (let day of daysList) {
  day.addEventListener('mouseover', makeBigger);
  day.addEventListener('mouseleave', makeSmaller);
}

function makeBigger(e) {
  e.target.style.fontSize = '30px';
  e.target.style.margin = '-1px 0';
}

function makeSmaller(e) {
  e.target.style.fontSize = '20px';
  e.target.style.margin = '5px 0';
}

// Ex7
const divTask = document.getElementsByClassName('my-tasks')[0];

function createTask(string) {
  let spanTask = document.createElement('span');
  spanTask.innerText = string;
  divTask.appendChild(spanTask);
}

// Ex8
function createDiv(stringColor) {
  let colorDiv = document.createElement('div');
  colorDiv.className = 'task';
  colorDiv.style.backgroundColor = stringColor;
  divTask.appendChild(colorDiv);
}
createDiv('red');
createDiv('yellow');
createDiv('green');
createDiv('blue');


// Ex9
let divsColor = document.getElementsByClassName('task');

for (let div of divsColor) {
  div.addEventListener('click', attribTask);
}

function clearSelected() {
  for (let div of divsColor) {
    div.classList.remove('selected');
  }
}

function attribTask(e) {
  if (e.target.className === 'task') {
    clearSelected();
    e.target.className += ' selected';
  } else { 
    e.target.className = 'task';
  }
}

// Ex10
function checkForSelected(){
  return (document.getElementsByClassName('selected')) ? true : false;
}

for (let day of daysList) {
  day.addEventListener('click',changeDayColor);
}

function changeDayColor(e){
  if (checkForSelected() && e.target.classList.length === 1) {
    e.target.style.color = document.getElementsByClassName('selected')[0].style.backgroundColor;
    e.target.classList.add('changed');
  } else {
    e.target.style.color = 'rgb(119,119,119';
    e.target.classList.remove('changed');
  }
}