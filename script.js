let botao = document.querySelector("#hamburguer");
let lateral = document.querySelector("aside");

// --------------- MANEIRA INEFICIENTE DE FAZER O MENU DESAPARECER E REAPARECER ----------------
// let menuAberto = false;
// botao.onclick = function(){
//     if(menuAberto === false){
//         lateral.style.transform = "translateX(0)";
//         for(item of lateral.children){
//             if(item.id !== "hamburguer"){ // se o item não tiver id #hamburguer, ele seta pra visible
//                 item.classList.remove("invisivel");
//             }
//         }
//         menuAberto = true;
//      }
//      else {
//         lateral.style.transform = "translateX(-310px)";
//         for(item of lateral.children){
//             if(item.id !== "hamburguer"){
//                 item.classList.add("invisivel");
//             }
//         }
//         menuAberto = false;
//     }
// }

// // --------------- Funcionamento toggle - injeta ou remove classe --------------
// if (e.classList.contains("classe")){
//     e.classList.remove("class");
// }
// else {
//     e.classList.add("class");
// }

botao.onclick = function(){
    lateral.classList.toggle("mostrando");
    for (item of lateral.children){
        if(item.id !== "hamburguer"){
                item.classList.toggle("invisivel");
        }
    }
}

