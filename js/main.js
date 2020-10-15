const elf = document.getElementById("elf");

let i = true;

elf.addEventListener("click",function(){

  if(i){

    elf.setAttribute("src", "img/a.png");
    i = false;

  } else {

    elf.setAttribute("src", "img/a.jpg");
    i = true;

  }
});
