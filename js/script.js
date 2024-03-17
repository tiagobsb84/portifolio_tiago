//const titulo = document.querySelector('.digitando');
const titulo = document.querySelector('.aparece_skill');

const array_skill = ["Java", "Javascript", "PHP", "ReactJS"];
var contador_array = 0;
var elemento;

function proximaPalavra() {
    contador_array++;
    titulo.style.opacity = 0;
    if(contador_array > array_skill.length -1) {
        contador_array = 0;
    }
    setTimeout('slideArray()', 700);
}

function slideArray() {
    titulo.innerHTML = array_skill[contador_array];
    titulo.style.opacity = 1;
    setTimeout('proximaPalavra()', 2000);
}

slideArray();
/*function ativaLetra(elemento) {
    const arrayTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}*/

//ativaLetra(titulo);