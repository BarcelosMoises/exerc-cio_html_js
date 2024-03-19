const form = document.getElementById('form-comp');

function validaNumero(){
    var nA = document.getElementById('n1').value;
    var nB = document.getElementById('n2').value;
    
    if ((nA) > (nB)){
        return true;
    }   else{
        alert('O primeiro número deve ser maior que o segundo');
        return false;
    }
}

form.addEventListener('submit', validaNumero, function(e) {
    e.preventDefault();
})

