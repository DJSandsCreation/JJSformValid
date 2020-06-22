function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;
      // console.log(input);

      // check for validation
      if (input.type === "text" && validateUser(input)) {
        // console.log("DJSands, everything is OK!!");
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      //get rid of animation
      parent.addEventListener(`animationend`, () => {
        parent.style.animation = "";
      })
    });
  });
}

// validations
function validateUser(user) {
  if (user.value.length < 4) {
    // printError("textErr", "ERROR");
    // prompt(" ...  that's not enough characters .. ")
    // console.log("not enough characters");
    error("rgb(245, 6, 6)");
  } else {
    error("rgb(6, 189, 245)");
    return true;
  }
  document.getElementById("demo").innerHTML = text;
}

function validateEmail(email) {
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (validation.test(email.value)) {
    // console.log("not an email");
    error("rgb(6, 189, 245)");
    return true;
  } else {
    error("rgb(245, 6, 6)");
  }
}


function nextSlide(parent, nextForm) {
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');

}


function error(color) {
  document.body.style.backgroundColor = color;
}


animatedForm();