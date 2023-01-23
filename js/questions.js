(function(){
    const titleQuestion = [...document.querySelectorAll('.questions__title')];
    titleQuestion.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling; //Se toma en cuenta lo siguiente que esta despues de la variable question__title
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');//h3 (hace que rote el elemento, osea la flecha)
            if(answer.clientHeight === 0){
                height = answer.scrollHeight; //nos da el alto minimo para que un elemento se muestre
            }

            answer.style.height = `${height}px`;
        })
    });
})()//Proteger las variables de otros archivos