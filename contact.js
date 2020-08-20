
function contactform() {
    console.log("click");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;
    var num  = document.getElementById("num").value;
    var msg = document.getElementById("msg").value;
    var mesg = document.getElementById("mesg").value;
    buttonOK = "true";

    if (num.length > 10 || num.length < 10) {
      alert("Phone number should contain only 10 digits.");
      buttonOK = "false";
    } 

  if (buttonOK == "false") {
      return false;
    } 

    alert("  Your name is "+fname+" "+lname+" , Your email is "+mail+" , Your phone number is "+num+" , Your message subject is "+msg+" , Your message is "+mesg+" . </n> Thank You.")
  }
   

  




