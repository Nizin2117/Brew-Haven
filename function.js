    function submitForm() {
    
    const name = document.getElementById("name").value;
    
    const email = document.getElementById("email").value;
    
    const message = document.getElementById("message").value;
    
    if (name && email && message) {  
        alert("Thank you for your message, " + name + "!");  
    } else {  
        alert("Please fill in all fields.");  
    }  
    
    }
    function displayDateTime() {
    
    const dateTime = new Date();
    
    document.getElementById("date-time").innerText = dateTime.toLocaleString();
    
    }
    window.onload = displayDateTime;
    