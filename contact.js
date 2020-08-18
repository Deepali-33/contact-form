
 function contactform() {
    console.log("click");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var num  = document.getElementById("num").value;
    var msg = document.getElementById("msg").value;
    var mesg = document.getElementById("mesg").value;

    alert("  Your name is "+fname+" "+lname+" , email is "+email+" , phone number is "+num+" message subject is "+msg+" message is "+mesg+"  Thank You. ");
} 