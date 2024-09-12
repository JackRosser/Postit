let button = document.querySelector("button");
let toggle = false;
let textArea = document.querySelector("textarea");
let buttonSubmit = document.getElementById("button");
let main = document.querySelector("main");
let gradients = [
  "linear-gradient(to top, #9e9e80 0%, #c6c7a0 20%, #fafbc9 80%);",
  "linear-gradient(to top, #777793 0%, #8383a0 20%, #cacafa 80%);",
  "linear-gradient(to top, #728d72 0%, #96b697 20%, #cafccb 80%);",
  "linear-gradient(to top, #756767 0%, #a76f6f 20%, #ff7f7f 80%);"
];

let orderNum = 0;

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

buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  orderNum += 1;
  let randomDeg = Math.floor(Math.random() * 21) - 10;
  let randomArray = Math.floor(Math.random() * gradients.length);
  let div = document.createElement("div");
  div.className = "postit";
  div.setAttribute("style", `transform: rotate(${randomDeg}deg); background: ${gradients[randomArray]};`);
  let h2 = document.createElement("h2");
  h2.innerText = `Task #${orderNum}`;
  let p = document.createElement("p");
  p.innerText = textArea.value;
  div.append(h2, p);
  main.appendChild(div);
  //chiudo il toggle
  toggle = false;
  button.className = "button_alone";
  textArea.style.transform = "";
  textArea.style.left = "1rem";
  textArea.style.width = "1px";
  textArea.style.opacity = "0";
  textArea.innerText = "";
  buttonSubmit.style.transform = "";
  buttonSubmit.style.opacity = "0";
});
