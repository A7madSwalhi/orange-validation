let mailreg = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let phonereg = /077\d{7}/;
let passreg =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
let namereg = /[a-zA-z ]$/;

const form = document.forms[0];
const emailinp = document.getElementById("email");
const passinp = document.getElementById("password");
const phoinp = document.getElementById("mobile");
const boxagr = document.querySelector("#chAgree");
const boxrec = document.querySelector("#is_newsletter");
const btn = document.querySelector("#btnSubmit");
const conpass = document.querySelector("#con-password");
const fullname = document.querySelector("#name");
const nameex = document.querySelector("#nameex");
const emailex = document.querySelector("#inputEmail4Valid");
const phoneex = document.querySelector("#phoneValid");
const passex = document.querySelector("#inputPassword4Valid");
const conpassex = document.querySelector("#con-passwordvalid");
const reqtext1 = document.querySelector("#reqtext1");
const reqtext2 = document.querySelector("#reqtext2");

console.log(boxagr);
console.log(boxrec);
console.log(form);
console.log(emailinp);
console.log(passinp);
console.log(conpass);
console.log(phoinp);

console.log(boxagr.checked);
console.log(boxrec.checked);

fullname.addEventListener("blur", () => {
    if (namereg.test(fullname.value)) {
        nameex.innerHTML = "Valid Name";
        nameex.style.color = "green";
    } else {
        nameex.innerHTML = "Not Valid Name";
        nameex.style.color = "red";
    }
});

emailinp.addEventListener("blur", () => {
    if (mailreg.test(emailinp.value)) {
        emailex.innerHTML = "Valid Email";
        emailex.style.color = "green";
    } else {
        emailex.innerHTML = "Not Valid Email";
        emailex.style.color = "red";
    }
});

phoinp.addEventListener("blur", () => {
    if (phonereg.test(phoinp.value)) {
        phoneex.innerHTML = "Valid Phone Number";
        phoneex.style.color = "green";
    } else {
        phoneex.innerHTML = "Wrong Phone Number";
        phoneex.style.color = "red";
    }
});

passinp.addEventListener("blur", () => {
    if (passreg.test(passinp.value)) {
        passex.innerHTML = "Valid Password";
        passex.style.color = "green";
    } else {
        passex.innerHTML = "Not Valid Password";
        passex.style.color = "red";
    }
});

conpass.addEventListener("blur", () => {
    if (conpass.value === passinp.value) {
        conpassex.innerHTML = "The Password Match";
        conpassex.style.color = "green";
    } else {
        conpassex.innerHTML = "The Password Do Not Match";
        conpassex.style.color = "red";
    }
});
boxagr.addEventListener("click", () => {
    if (boxagr.checked) {
        reqtext1.innerHTML = "Checked";
        reqtext1.style.color = "green";
    } else {
        reqtext1.innerHTML = "Not Checked";
        reqtext1.style.color = "red";
    }
});

boxrec.addEventListener("click", () => {
    if (boxrec.checked) {
        reqtext2.innerHTML = "Checked";
        reqtext2.style.color = "green";
    } else {
        reqtext2.innerHTML = "Not Checked";
        reqtext2.style.color = "red";
    }
});

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
