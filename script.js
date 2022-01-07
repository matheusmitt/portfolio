function textaEmail(){
    var mailForm = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (document.getElementById("mail").value.match(mailForm)){}
    else {document.getElementById("msgErro").style.left = "31%"
      document.getElementById("msgErro").innerHTML = 'Insira um e-mail válido'
      document.getElementById("msgErro").style.display = "block"}
  }



  function acionarTrial(){
     
  if (document.getElementById("nome").value == '') {
      document.getElementById("erroNome").style.left = "57%"
      document.getElementById("erroNome").innerHTML = 'O campo de nome não pode estar vazio'
      document.getElementById("erroNome").style.display = "block"
      document.getElementById("nome").style.backgroundImage = "url('images/error.png')"
      document.getElementById("nome").style.border = "1px solid red"
      document.getElementById("nome").style.backgroundSize = "20px 20px"
      document.getElementById("nome").style.backgroundRepeat = "no-repeat"
      document.getElementById("nome").style.backgroundPosition = "435px center"

  }
  else if (document.getElementById("sobrenome").value == '') {
    document.getElementById("erroSobrenome").style.left = "52%"
    document.getElementById("erroSobrenome").innerHTML = 'O campo de sobrenome não pode estar vazio'
    document.getElementById("erroSobrenome").style.display = "block"
    document.getElementById("erroSobrenome").style.border = "1px solid red"
    document.getElementById("erroSobrenome").style.backgroundImage = "url('images/error.png')"
    document.getElementById("erroSobrenome").style.backgroundSize = "20px 20px"
    document.getElementById("erroSobrenome").style.backgroundRepeat = "no-repeat"
    document.getElementById("erroSobrenome").style.backgroundPosition = "435px center"
  }
  else if (document.getElementById("mail").value == '') {
    document.getElementById("erroEmail").style.left = "57%"
    document.getElementById("erroEmail").innerHTML = 'O campo de e-mail não pode estar vazio'
    document.getElementById("erroEmail").style.display = "block"
    document.getElementById("erroEmail").style.border = "1px solid red"
    document.getElementById("erroEmail").style.backgroundImage = "url('images/error.png')"
    document.getElementById("erroEmail").style.backgroundSize = "20px 20px"
    document.getElementById("erroEmail").style.backgroundRepeat = "no-repeat"
    document.getElementById("erroEmail").style.backgroundPosition = "435px center"
  }
  else if (document.getElementById("senha").value == '') {
    document.getElementById("erroSenha").style.left = "57%"
    document.getElementById("erroSenha").innerHTML = 'O campo de senha não pode estar vazio'
    document.getElementById("erroSenha").style.display = "block"
    document.getElementById("erroSenha").style.border = "1px solid red"
    document.getElementById("erroSenha").style.backgroundImage = "url('images/error.png')"
    document.getElementById("erroSenha").style.backgroundSize = "20px 20px"
    document.getElementById("erroSenha").style.backgroundRepeat = "no-repeat"
    document.getElementById("erroSenha").style.backgroundPosition = "435px center"
  }
  else {textaEmail()}
}
