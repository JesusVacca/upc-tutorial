const listImg = document.getElementById("banner-img");
const listBotones = document.getElementById("botones");
const hamburguesa = document.getElementById("hamburguesa");


/**
 * Recorre los botones y las imagenes del banner para darle una funcionalidad de slider.
 */
for (let index = 0; index < listBotones.children.length; index++) {
  const element = listBotones.children[index];
  element.onclick = () =>{

    for (let index2 = 0; index2 < listBotones.children.length; index2++){
        const cadaBoton = listBotones.children[index2];
        if( cadaBoton.classList.contains("active")) cadaBoton.classList.remove("active");
    }
    let calcular = (100 / 3) * index;
    listImg.style.transform = "translateX(-"+calcular+"%)";
    element.classList.toggle("active");
  }
}


// Menu hamburguesa

hamburguesa.onclick=()=>{
  hamburguesa.classList.toggle("active-hamburguesa")
  document.getElementById("nav").classList.toggle("nav-avtive");
}