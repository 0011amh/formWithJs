async function register(){
    // const fullname = document.forms["register_form"]["fullname"].value;
    // if (fullname == ""){
    //     document.getElementById("fullname_alert").innerHTML="Full name must be filled out";
    //     alert("Please enter full name")
    //     return false;
        
    // }
        
    
    // const password = document.forms["register_form"]["password"].value;
    // if (password.length < 6 || password.length > 10){
    //     alert("Password ERROR!");
        
    // }
    
    
    
    const email = document.forms["register_form"]["email"].value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String (email).toLocaleLowerCase())){
        alert("NOT OK");
    
    }
}