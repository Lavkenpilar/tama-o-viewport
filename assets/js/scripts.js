
const button = document.querySelector ('button')
button.addEventListener ("click", function(){
    const imput = document.querySelector ('#input').value
    const par = document.querySelector ('#parrafo')
    
    if (imput <= 576) {
        console.log ("xs")
        
        par.innerHTML = "El tamaño del viewport es XS"
    }
    else if (imput <= 768) {
        console.log ("sm")
        par.innerHTML = "El tamaño del viewport es SM"
    }
    else if ( imput <= 962){
        console.log ("md")
        par.innerHTML = "El tamaño del viewport es MD"
    }
    else if (imput <=1200) {
        console.log ("xl")
        par.innerHTML = "El tamaño del viewport es XL"
    }
    else {
        console.log ("xxl")
        par.innerHTML = "El tamaño del viewport es XXL"
    }
})


