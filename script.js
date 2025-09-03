function sendEmail(event){
    event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const contact = document.querySelector("#contact").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !contact || !message) {
    alert("Please fill all fields before submitting!");
    return; 
  }
const templateParams = { name, email, contact, message };
    
    emailjs.send("service_fakset9", "template_r68x8y4", templateParams).then(() => {alert("Email sent!!");
        document.getElementById("contactForm").reset();
    })
    .catch((error) => {
        console.error("Error",error);
        alert("Email not sent, try again!")
    })
}
document.getElementById("contactForm").addEventListener("submit",sendEmail);



// function sendEmail(event) {
//   event.preventDefault();

//   const name = document.querySelector("#name").value.trim();
//   const email = document.querySelector("#email").value.trim();
//   const contact = document.querySelector("#contact").value.trim();
//   const message = document.querySelector("#message").value.trim();

 
//   if (!name || !email || !contact || !message) {
//     alert("Please fill all fields before submitting!");
//     return; 
//   }

//   const templateParams = { name, email, contact, message };

//   emailjs.send("service_fakset9", "template_r68x8y4", templateParams)
//     .then(() => {
//       alert("Email sent successfully!");
//       document.getElementById("contactForm").reset();
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("Email not sent, try again!");
//     });
// }