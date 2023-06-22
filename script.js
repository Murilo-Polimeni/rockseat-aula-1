function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  //pegar a tag img
  const img = document.querySelector("#profile img")

  // Subistituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem a light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "nova foto do maluco doidao")
  } else {
    //Se tiver sem light mode, manter a forma normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto central do aplicativo")
  }
}
