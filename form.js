function sendEmail(){
  Email.send({
    secureToken: "5a4e17ba-7965-40a5-bdca-5a526f7f620e",
    To: 'annakkuz@gmail.com',
    From: document.getElementById("email").value,
    Subject: 'New Request',
    Body: "Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Subject: " + document.getElementById("subject").value
    + "<br> Phone number: " + document.getElementById("phone").value
    + "<br> Enquiry: " + document.getElementById("message").value
  }).then(
    (message) => alert("I'll read your email ASAP! Thanks!"),
  );
}
