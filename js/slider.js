(function(){
    
    const sliders = [...document.querySelectorAll('.testimony__body')];//Son todos los elementos sliders (LOS 3 PUNTOS ES UN ARRAY EN VEZ DE SER UN NODO DE ELEMENTOS)
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id; //obtener el slider actual y solamente un elemento tendra esa clase
        value = Number(currentTestimony);//Lo convierto en numero para que se sume
        value += add;
        
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){//Me dice cuantos elementos tengo actualmente en el array
            //Le sumo uno porque cuando el elemento value supere el numero de ID (2) es decir (3) ocurra algo
            //Si el valor es cero, significa que si el ID esta en 1 y restamos 1, por lo que tampoco hay un elemento detras del primer elemento
            value= value === 0 ? sliders.length : 1; 
        }

        sliders[value-1].classList.add('testimony__body--show');//empezamos desde cero (2-1)
    }//Cada slider tiene su propio ID (dataset)
    
})();//Se llama a si misma para proteger el codigo y no mezclarlo con todos los archivos js que vamos a crear