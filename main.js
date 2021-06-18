const tumb = document.querySelectorAll(".tumb");
tumb.forEach(function(tumbImg){
    tumbImg.onmouseover = () => {
        console.log('meu pai')
    }
}  )