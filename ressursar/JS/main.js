// JavaScript Document
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
	

}

function validate() {
   if (document.form1.fullName.value.length < 1) {
     alert("skriv inn navne.");
     return false;
   }
  if (document.form1.email.value.length < 7) {
    alert("skriv inn E-mail.");
    return false;
  }
  if (document.form1.comments.value.length < 3) {
    alert("skriv inn tilbakemelding.");
    return false;
  }
  return true;
}