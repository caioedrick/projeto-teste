function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains('dark')) {
  //  html.classList.remove('dark')
  // } 
  // else {
  //  html.classList.add('dark')
  // }
  html.classList.toggle("dark")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("dark")) {
    //se tiver dark mode, adiciona imagem dark
    img.setAttribute("src", "./assets/Avatar Dark mode.png")
   } 
   else {
     //se tiver sem dark mode, adiciona imagem light
     img.setAttribute("src", "./assets/Avatar Light mode.png")
   }
} 