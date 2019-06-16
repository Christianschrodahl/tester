fetch('https://api.spacexdata.com/v3/launches/next')
    .then(result => result.json())
  .then((res) => {
    rocketLaunch(res);
  })
.catch(err => console.log(err))

function rocketLaunch(result){
var launch_date = result.launch_date_utc;
// Set the date we're counting down to
var countDownDate = new Date(launch_date).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);};

//top menu toggle
document.getElementById("ham-menu").addEventListener("click", function(){
  var phone_menu = document.getElementById("menu");
    if (phone_menu.className === "topMenu") {
    phone_menu.className += " responsive";
  } else {
    phone_menu.className = "topMenu";
  }
})