const form = document.getElementById('form-comp');

function validaNumero(){
    var nA = document.getElementById('n1').value;
    var nB = document.getElementById('n2').value;
    
    if ((nA) < (nB)){
        const mensagemSucesso = `Formulário preenchido corretamente. O número <b>${nB}</b> é maior que o número <b>${nA}</b>`;
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        var nA = document.getElementById('n1').value='';
        var nB = document.getElementById('n2').value='';
    }   else {
        const mensagemErro = `O número <b>${nA}</b> é maior ou igual ao número <b>${nB}</b>`;
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        var nA = document.getElementById('n1').value='';
        var nB = document.getElementById('n2').value='';
    }
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    validaNumero();
})