//document.getElementById('contactForm').addEventListener('submit', function(event){
   // event.preventDefault();
    
    //let name = document.getElementById('name').value;
    //let email = document.getElementById('email').value;
    //let message = document.getElementById('message').value;
    
   // if(name&email&message) {
    //    alert('Thank you for contacting us, ' + name + '. We will get back to you shortly.');
   // } else {
   //     alert('Please fill out all fields.');
   //}
   document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    
    // Simple email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && email && message) {
        if (emailPattern.test(email)) {
            alert('Thank you for contacting us, ' + name + '. We will get back to you shortly.');
        } else {
            alert('Please enter a valid email address.');
        }
    } else {
        alert('Please fill out all fields.');
    }
});