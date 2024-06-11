let mailreg = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let phonereg = /077\d{7}/;
let passreg =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

const form = document.forms[0];
const emailinp = document.getElementById("email");
const passinp = document.getElementById("password");
const phoinp = document.getElementById("mobile");
const boxagr = document.querySelector("#chAgree");
const boxrec = document.querySelector("#is_newsletter");
const btn = document.querySelector("#btnSubmit");
const conpass = document.querySelector("#con-password");
const fullname = document.querySelector("#name");

console.log(boxagr);
console.log(boxrec);
console.log(form);
console.log(emailinp);
console.log(passinp);
console.log(conpass);
console.log(phoinp);

console.log(boxagr.checked);
console.log(boxrec.checked);

form.onsubmit = (e) => {
    let validation = false;
    if (
        mailreg.test(emailinp.value) &&
        phonereg.test(phoinp.value) &&
        passreg.test(passinp.value) &&
        conpass.value === passinp.value &&
        boxagr.checked &&
        boxrec.checked
    ) {
        validation = true;
        btn.toggleAttribute("disabled");
    }

    if (validation) {
        localStorage.setItem("email", emailinp.value);
        localStorage.setItem("password", passinp.value);
        localStorage.setItem("Name", fullname.value);
        btn.disabled = true;
    } else {
        e.preventDefault();
    }
};
