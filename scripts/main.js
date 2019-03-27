var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/body1.jpg') {
      myImage.setAttribute ('src','images/body2.png');
    } else {
      myImage.setAttribute ('src','images/body3.png');
    }
    if (mySrc === 'images/body3.png') {
      myImage.setAttribute ('src','images/body1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Пожалуйста, введите свое имя');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Добро пожаловать на мой первый сайт, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Добро пожаловать на мой первый сайт, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}