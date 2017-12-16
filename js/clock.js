function start() {
  clock();
}

function clock() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();

  minutes = checkTime(minutes);

  document.getElementById('time').innerHTML = hours + " : " + minutes;

  var t = setTimeout(clock, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }

  return i;
}
