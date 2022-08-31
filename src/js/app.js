document.addEventListener('DOMContentLoaded',function(){
   
    iniciarApp();
})

function iniciarApp(){
    crearGaleria();

}


function crearGaleria(){
    const galeria= document.querySelector('.galeria-imagenes');
    galeria.textContent='vamos a crear la galeria';
    for (let i = 1; i < 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML= `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">

        <img width="200" height="300" src="build/img/thumb/${i}.jpg" alt=" Imagen vocalista festival">` 
        imagen.addEventListener('click',function(){
            mostrarImagen(i)
        });
        galeria.appendChild(imagen);   
    }


}

function mostrarImagen(id){
    console.log(`mostrar imagen ${id}`)
    const imagen = document.createElement('picture');
    imagen.innerHTML= `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">

        <img width="200" height="300" src="build/img/grande/${id}.jpg" alt=" Imagen vocalista festival">`;
        //crea el overlay con img
        const overlay = document.createElement('DIV')
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.addEventListener=('click',function(){
            const body = document.querySelector('body');
      
            body.classList.remove('fijar-body');
            overlay.remove();

        })

        const cerrarModal = document.createElement('P');
        cerrarModal.textContent='X';
        cerrarModal.classList.add('btn-cerrar');
        cerrarModal.addEventListener('click',function(){
            //añadir html
            const body = document.querySelector('body');
      
            body.classList.remove('fijar-body');
            overlay.remove();
        })
        overlay.appendChild(cerrarModal);


        //añadir html
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
}
