/*
Implemented by: Parthipan Nagulanandan
Date: 02. January 2017
Version: v5.0
*/

function successInfo() {
    var fname = document.getElementById("name").value;
    var femail = document.getElementById("email").value;
    var jsonOB = {"name": fname, "email": femail};
    if ($("#contactForm").valid) {
        alert(jsonOB.name);
        return $("#contactForm").valid;
    }
    return false;
}


$("#contactForm").validate({
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        betreff: {
            required: true,
        },
        nachricht: {
            required: true,
            maxlength: 1000
        }
    },
    messages: {
        name: "Bitte Ihre Name angeben...",
        email: {
            required: "Bitte Ihre E-Mail Adresse angeben...",
            email: "Die Angabe ist keine gültige E-Mail Adresse. Geben Sie eine gültiges E-Mail Adresse an."
        },
        betreff: "Bitte Betreff angeben...",
        email: {
            required: "Bitte Ihre Nachricht hinterlassen...",
            maxlength: "Maximale Länge Ihres Nachrichtes erreicht."
        }
    }
});