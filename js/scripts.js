//Função mascara: para cada mascara especifica, acessada pelo argumento flag, permite a atualização do 
//formato do dado conforme o usuário digita. 
function mascara(data, flag) {
  setTimeout(function() {
      if (flag == "Fixo") {
        var aux = mascaraFix(data.value);
      } else if (flag == "Celular") {
        var aux = mascaraCel(data.value);
      } else if (flag == "CPF") {
        var aux = mascaraCPF(data.value);
      } else if (flag == "RG") {
        var aux = mascaraRG(data.value);
      } else {
        var aux = mascaraCEP(data.value);
      }
      
      if (aux != data.value) {
          data.value = aux;
      }
  }, 1);
}

//Máscara do telefone fixo: aplica uma máscara no id "tel" no arquivo "index.html" com o propósito de
//formatar o número digitado com seu DDD na forma (DDD) XXXX-XXXX. A função não permite mais que 10 
//dígitos e que o primeiro digito seja igual a 0; apenas números são permitidos. 
function mascaraFix(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
      r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

//Máscara do telefone celular: aplica uma máscara no id "cel" no arquivo "index.html" com o propósito
//de formatar o número digitado com seu DDD na forma (DDD) XXXXX-XXXX. A função não permite mais que 
//11 dígitos e que o primeiro digito seja igual a 0; apenas números são permitidos. 
function mascaraCel(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
      r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

//Máscara do CPF: aplica uma máscara no id "cpf" no arquivo "index.html" com o propósito de formatar
//o número digitado na forma XXX.XXX.XXX-XX. A função não permite mais que 11 dígitos; apenas números 
//são permitidos. 
function mascaraCPF(v) {
  var r = v.replace(/\D/g, "");
  if (r.length > 9) {
      r = r.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/, "$1.$2.$3-$4");
  } else if (r.length > 6) {
      r = r.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, "$1.$2.$3");
  } else if (r.length > 3) {
      r = r.replace(/^(\d{3})(\d{0,3})/, "$1.$2");
  } else {
      r = r.replace(/^(\d*)/, "$1");
  }
  return r;
}

//Máscara do RG: aplica uma máscara no id "rg" no arquivo "index.html" com o propósito de formatar
//o número digitado na forma XX.XXX.XXX-X (RG usado nos estados de SP e RJ). A função não permite mais 
//que 9 dígitos e que o primeiro digito seja igual a 0; apenas números são permitidos. 
function mascaraRG(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 8) {
      r = r.replace(/^(\d{2})(\d{3})(\d{3})(\d).*/, "$1.$2.$3-$4");
  } else if (r.length > 5) {
      r = r.replace(/^(\d{2})(\d{3})(\d{0,3}).*/, "$1.$2.$3");
  } else if (r.length > 2) {
      r = r.replace(/^(\d{2})(\d{0,3})/, "$1.$2");
  } else {
      r = r.replace(/^(\d*)/, "$1");
  }
  return r;
}

//Máscara do CEP: aplica uma máscara no id "cep" no arquivo "index.html" com o propósito de formatar
//o número digitado na forma XXXXX-XXX. A função não permite mais que 8 dígitos; apenas números são
//permitidos. 
function mascaraCEP(v) {
  var r = v.replace(/\D/g, "");
  if (r.length > 5) {
      r = r.replace(/^(\d{5})(\d{0,3}).*/, "$1-$2");
  } else {
      r = r.replace(/^(\d*)/, "$1");
  }
  return r;
}

//lógica feita com expressões regulares

//Função que só permite ser digitado letras ou espaço no campo do formulário
function onlyletters(e) {
		var expressao = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/;

		if(expressao.test(String.fromCharCode(e.keyCode))) {
			return true;
		} else {
			return false;
		}
}

//Função para checar e enviar o formulário
function checaForm_envia() {
  const formularioCadastro = document.getElementById('form-cadastro');
  
  let nome = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let cpf = document.getElementById('cpf').value;
  let rg = document.getElementById('rg').value;
  let fonefixo = document.getElementById('tel').value;
  let fonecelular = document.getElementById('cel').value;
  let endereco = document.getElementById('address').value;
  let numero = document.getElementById('number').value;
  let cep = document.getElementById('cep').value;

  //Confere se os campos obrigatórios estão vazios e, se necessário, avisa na janela que faltam dados
  //a serem preenchidos
  if (nome == '' || cpf == '' || fonecelular == '' || endereco == '' || numero == '' || cep == '') {
    alert("Por favor preencha todos os campos obrigatórios (*).");
  } else {
    format_email = /\S+@\S+\.\S+/;
    //Confere se há erros nos dados preenchidos e, se necessário, avisa na janela que há erros
    if (
        (!format_email.test(email) && email != '') ||
        (cpf.length != 14) ||
        (rg.length != 0 && rg.length != 12) ||
        (fonefixo.length != 0 && fonefixo.length != 14) ||
        (fonecelular.length != 15) ||
        (cep.length != 9)
        ) {
        alert("Por favor preencha os campos corretamente.");
    } else {
      //Fim da checagem, dados enviados
      alert("Os seus dados foram enviados com sucesso!"); 
      formularioCadastro.submit();
    }
  }
}