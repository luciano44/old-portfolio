const arrow = document.querySelector(".arrow");
const root = document.documentElement;
const switchMode = document.querySelector(".switch");
const switchBtn = document.querySelector(".switch-btn");


let theme;

//verifica se existe a "theme" no localStorage e seta o tema de acordo
if (localStorage.getItem("theme")){
    theme = localStorage.getItem("theme")
    if  (theme == 'day')      { dayTheme() }
    if  (theme == 'night')    { nightTheme() }
}else{
    theme = 'day'
}

// anima flecha apontando para baixo
setInterval(function () {
  if (arrow.style.margin == "0px auto") {
    arrow.style.margin = "10px auto";
  } else {
    arrow.style.margin = "0px auto";
  }
}, 1000);

// add click listener na flecha para scrollar p/ baixo a altura da tela
arrow.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight
  });
});

// add click listener no botão para trocar de tema
switchMode.addEventListener("click", () => {
    checkTheme()
});

// tema escuro
function nightTheme() {
  root.style.setProperty("--background", "hsl(225, 100%, 5%)");
  root.style.setProperty("--mainText", "#fff");
  arrow.style.filter = "invert(1)";
  switchBtn.style.marginLeft = "19px";
  localStorage.setItem("theme", 'night')
}

//tema claro
function dayTheme() {
  root.style.setProperty("--background", "#fff");
  root.style.setProperty("--mainColor", "hsl(227,31%,15%)");
  root.style.setProperty("--mainText", "hsl(227,31%,15%)");
  arrow.style.filter = "invert(0)";
  switchBtn.style.marginLeft = "0px";
  localStorage.setItem("theme", 'day')
}

//checa o estado da variavel 'theme' e seta o tema
function checkTheme(){
    if (theme == 'day') {
        theme = 'night'
        nightTheme()
      } else {
        theme = 'day'
        dayTheme()
      }
}