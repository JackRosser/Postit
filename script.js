let button = document.querySelector("button");
let toggle = false;
let textArea = document.querySelector("textarea");
let buttonSubmit = document.getElementById("button");

button.addEventListener("click", function () {
  if (toggle === false) {
    toggle = true;
    button.className = "button_clicked";
    textArea.style.transform = "translate(70px)";
    textArea.style.left = "3rem";
    textArea.style.opacity = "1";
    textArea.style.width = "200px";

    buttonSubmit.style.transform = "translateY(90px)";
    buttonSubmit.style.opacity = "1";
  } else {
    toggle = false;
    button.className = "button_alone";
    textArea.style.transform = "";
    textArea.style.left = "1rem";
    textArea.style.width = "1px";
    textArea.style.opacity = "0";

    buttonSubmit.style.transform = "";
    buttonSubmit.style.opacity = "0";
  }
});
