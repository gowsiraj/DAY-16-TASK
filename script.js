

var count = 10;
setTimeout(function updateCountdown() {
  var countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = count;

  if (count === 0) {
  
    countdownElement.innerHTML = "Happy Independence Day!🇮🇳";
  } else {
    count--;
    setTimeout(updateCountdown, 1000); 
  }
}, 0); 