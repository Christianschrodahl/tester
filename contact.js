//top menu toggle
document.getElementById("ham-menu").addEventListener("click", function(){
  var phone_menu = document.getElementById("menu");
    if (phone_menu.className === "topMenu") {
    phone_menu.className += " responsive";
  } else {
    phone_menu.className = "topMenu";
  }
})
// refer to question 4 before development starts for scope document
    function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    //Input field errors    
        var firstNameError = document.getElementById("firstNameError");
        var phoneError = document.getElementById("phoneError");
        var emailError = document.getElementById("emailError");
        
    //RFC2822 Email Validation, refer to:https://regexr.com/2rhq7
    var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    //Regular expression for Norwegian phone number consisting of 8 digits
    var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
        //Validate that 'name' and 'last name' inputs are not empty. 
        if (firstName == "" || firstName == null) {
        firstNameError.style.display = "block";
        document.getElementById("firstName").focus();
        return false;
        } else {
        firstNameError.style.display = "none"; 
        }
        //Use regex expressions to validate the telephone and email addresses respectively.   
        if (phoneRegex.test(phone) == false) {
        phoneError.style.display = "block";
        document.getElementById("phone").focus();
        return false;
        } else {
        phoneError.style.display = "none";
        }
        if (emailRegex.test(email) == false) {
        emailError.style.display = "block";    
        document.getElementById("email").focus();
        return false;
        } else {
        emailError.style.display = "none";
            }
        if (!confirm("Your contact information has been validated. Do you want to submit the form?")) {
        return false;
    }

    return true;

    }
    document.getElementById("submitContact").addEventListener("click", function(){
       validateForm() 
    });

//google maps
      var map;
        function initMap() {
        var myLatLng = {lat: 33.923752, lng: 118.333068};

        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng
  });

        var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}     