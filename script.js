const form = document.querySelector('form');

const inputsElementos = document.querySelectorAll ('input');
const textareaElementos = document.querySelectorAll ('textarea');


let valores = [];

inputsElementos.forEach(function(input) {
    valores.push (input.value);
}  );
valores.push (textareaElementos.value);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem recebida! Entraremos em contato em breve.');
});