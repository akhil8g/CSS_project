function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");
    console.log("Hello");
    msg.style.color = "red";
    if(username == "") {
        msg.textContent="Enter username";
        return false;
    } else if(password==""){
        msg.textContent = "Enter password";
        return false;
    }
    else if(password.length <6){
        msg.textContent="Pasword length should be > 6";
        return false;
    }else {
        msg.textContent="";
        return true;
    }
    



    
}