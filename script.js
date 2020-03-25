function validaEmail(){
      if( ! document.getElementById('email').value ) {
        alert('Preencha o campo "e-mail"');
        return false;
      } else {
        alert('O email ' + document.getElementById('email').value + ' foi enviado');
        return true;
      }
    }