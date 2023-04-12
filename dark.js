const mode = document.getElementById("mode-icon");

mode.addEventListener("click", () => {
          const form= document.getElementById("")
if(mode.classList.contains("fa-moon")) {
mode.classList.remove("fa-moom");
mode.classList.add("fa-sun");

return;

}

mode.classList.add("fa-moon");
mode.classList.remove("fa-sun");

});