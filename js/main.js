let fName = document.querySelector("#f-name");
let lName = document.querySelector("#l-name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

let regex = /[a-z]{3,}/gi;
let emailRegex = /\w+@\w+\.(com|net|org|edu)/gi;

let btns = document.querySelectorAll(".btn");
let radio = document.querySelectorAll(".btn div");
let icon = document.querySelectorAll(".btn div img");

let selectBtn = false;
btns.forEach((btn) => {
  btn.onclick = function () {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      selectBtn = false;
    });
    this.classList.add("active");
    radio.forEach((radio) => {
      radio.classList.remove("active");
      selectBtn = false;
    });
    this.children[0].classList.add("active");
    icon.forEach((icon) => {
      icon.classList.remove("active");
      selectBtn = false;
    });
    this.children[0].children[1].classList.add("active");

    selectBtn = true;
  };
});

message.onfocus = function () {
  this.classList.add("active");
};
message.onblur = function () {
  this.classList.remove("active");
};

let checkBox = false;
document.querySelector("#check").onclick = function () {
  if (document.querySelector(".check-box").classList.contains("active")) {
    document.querySelector(".check-box").classList.remove("active");
    document.querySelector(".check-box div img").classList.remove("active");
    checkBox = false;
  } else {
    document.querySelector(".check-box").classList.add("active");
    document.querySelector(".check-box div img").classList.add("active");
    checkBox = true;
  }
};

document.querySelectorAll("label").forEach((text) => {
  let require = document.createElement("span");
  require.className = "require";
  require.textContent = "*";
  text.appendChild(require);
});

document.forms[0].onsubmit = function (e) {
  let fNameValue = false;
  let lNameValue = false;
  let emailValue = false;
  let mesgValue = false;

  document.querySelectorAll(".text").forEach((input) => {
    if (input.value === "") {
      input.parentElement.classList.add("active");
    }
    if (input.value.match(regex)) {
      // console.log(input.value.match(regex));
      input.parentElement.classList.remove("active");
      if (input === fName) {
        fNameValue = true;
      }
      if (input === lName) {
        lNameValue = true;
      }
    } else {
      input.parentElement.classList.add("active");
    }
    if (input.value !== "") {
      if (input === message) {
        input.parentElement.classList.remove("active");
        mesgValue = true;
      }
    }
  });

  if (email.value !== "") {
    email.parentElement.classList.remove("active");
    if (email.value.match(emailRegex)) {
      email.parentElement.classList.remove("valid");
      emailValue = true;
    } else {
      email.parentElement.classList.add("valid");
    }
  } else {
    email.parentElement.classList.add("active");
  }

  if (selectBtn === true) {
    document.querySelector(".btn-box").classList.remove("active");
  } else {
    document.querySelector(".btn-box").classList.add("active");
  }

  if (checkBox === true) {
    document.querySelector(".checkbox").classList.remove("active");
  } else {
    document.querySelector(".checkbox").classList.add("active");
  }

  if (
    fNameValue === true &&
    lNameValue === true &&
    emailValue === true &&
    selectBtn === true &&
    mesgValue === true &&
    checkBox === true
  ) {
    console.log("check");
    document.querySelectorAll(".text").forEach((input) => {
      input.value = "";
    });
    email.value = "";
    message.value = "";
    btns.forEach((btn) => {
      btn.classList.remove("active");
      btn.children[0].classList.remove("active");
      btn.children[0].children[1].classList.remove("active");
    });
    document.querySelector(".check-box").classList.remove("active");
    document.querySelector(".check-box div img").classList.remove("active");

    document.querySelector(".complete").classList.add("active");
    setTimeout(() => {
      // document.querySelector(".complete").classList.remove("active");
      window.location.reload();
    }, 3000);
  } else {
    console.log("no try again");
  }

  e.preventDefault();
};
