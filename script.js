/*Registro */

let bancoDeCadastro = []
let nomeR = ""
let emailR = ""
let senhaR = ""
let confirmaSenhaR = ""
let novoUsuario = {
    nomeR: nomeR,
    emailR: emailR,
    senhaR: senhaR,
    confirmaSenhaR: confirmaSenhaR,
}
let emailVerificacao = []
let senhaVerificacao = []

function registrar (nomeR, emailR, senhaR, confirmaSenhaR){

    if (nomeR.trim() != "" && emailR.trim() != "" && senhaR.trim() != "" && confirmaSenhaR.trim() != "") {
        
        let emailsIguais = 0
        for(let i = 0; i < bancoDeCadastro.length; i++) {
            if(emailR == emailVerificacao[i]) {
                emailsIguais++
            }
        }

        if(emailR == "adm2002@gmail.com") {
            window.alert("Conta Privada")
        } else {

            if(emailsIguais == 0) {
                if(senhaR == confirmaSenhaR) {
    
                    novoUsuario = {
                        nomeR: nomeR,
                        emailR: emailR,
                        senhaR: senhaR,
                        confirmaSenhaR: confirmaSenhaR,
                    }
                    bancoDeCadastro.push(novoUsuario)
                    emailVerificacao.push(emailR)
                    senhaVerificacao.push(senhaR)
            
                    window.alert('Cadastro realizado com sucesso')
                    
                    document.getElementById('nomeR').value = ""
                    document.getElementById('emailR').value = ""
                    document.getElementById('senhaR').value = ""
                    document.getElementById('confirmaSenhaR').value = ""
        
                    document.querySelector('.Login').style.display='block';
                    document.querySelector('.Registro').style.display='none';
                    document.querySelector('.ResgatarSenha').style.display='none';
        
                } else {
                    window.alert("Senhas não correspondentes")
                }
            } else {
                window.alert("Email inválido")
            }

        }
        
    }

    


}
function cadastrar(){
    
    nomeR = document.getElementById('nomeR').value;
    emailR = document.getElementById('emailR').value;
    senhaR = document.getElementById('senhaR').value;
    confirmaSenhaR = document.getElementById('confirmaSenhaR').value;

    if (nomeR.trim() == "" || emailR.trim() == "" || senhaR.trim() == "" || confirmaSenhaR.trim() == "") {

        window.alert('Preencha todos os campos')

    }

    registrar(nomeR, emailR, senhaR, confirmaSenhaR)

} 

/*Login */

function logar(emailL, senhaL){

    if (emailL.trim() != "" && senhaL.trim() != "") {

        let loginValido = 0
        if(emailL == "adm2002@gmail.com" && senhaL == "2002") {

            location.href = "index.html"
    
        } else {
            
            for (let i = 0; i < bancoDeCadastro.length; i++) {
                if(emailL == emailVerificacao[i] && senhaL == senhaVerificacao[i]) {
                    loginValido++
                }
            }

            if(loginValido == 0) {
                window.alert("Conta não registrada")
            } else {
                location.href = "index.html"
            }   

        }  
    }
}
function entrar(){

    let emailL = document.getElementById('emailL').value;
    let senhaL = document.getElementById('senhaL').value;

    if(emailL.trim() == "" || senhaL.trim () == "") {

        window.alert("Preencha os campos")

    }

    logar(emailL, senhaL)
    
}

/*Recados */

let bancoDeRecado = []

function recados(nome, email, ddd, numero, recado) {
    
    if (nome.trim() != "" && email.trim() != "" && ddd.trim() != "" && numero.trim() != "" && recado.trim() != "") {

        let telefone = ddd + " " + numero
        
        let novoRecado = {
            nome: nome,
            email: email,
            telefone: telefone,
            recado: recado,
        }
        bancoDeRecado.push(novoRecado)
        
        console.log(bancoDeRecado)
        window.alert('Recado enviado com sucesso')

        document.getElementById('nome').value = ""
        document.getElementById('email').value = ""
        document.getElementById('ddd').value = ""
        document.getElementById('numero').value = ""
        document.getElementById('recado').value = ""

    }
}
function faleConosco(){
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let ddd = document.getElementById('ddd').value;
    let numero = document.getElementById('numero').value;
    let recado = document.getElementById('recado').value;

    if (nome.trim() == "" || email.trim() == "" || ddd.trim() == "" || numero.trim() == "" || recado.trim() == "") {

        window.alert('Preencha todos os campos')

    } 

    recados(nome, email, ddd, numero, recado)

}

function mostrarSenhaL(){
    document.getElementById ("senhaL"). type = "text";
    document.querySelector('#esconderSenhaL').style.display='block';
    document.querySelector('#mostrarSenhaL').style.display='none';
}
function esconderSenhaL(){
    document.getElementById ("senhaL"). type = "password";
    document.querySelector('#esconderSenhaL').style.display='none';
    document.querySelector('#mostrarSenhaL').style.display='block';
}

function mostrarSenhaR(){
    document.getElementById ("senhaR"). type = "text";
    document.querySelector('#esconderSenhaR').style.display='block';
    document.querySelector('#mostrarSenhaR').style.display='none';
}
function esconderSenhaR(){
    document.getElementById ("senhaR"). type = "password";
    document.querySelector('#esconderSenhaR').style.display='none';
    document.querySelector('#mostrarSenhaR').style.display='block';
}

function mostrarconfirmaSenhaR() {
    document.getElementById ("confirmaSenhaR"). type = "text";
    document.querySelector('#esconderconfirmaSenhaR').style.display='block';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='none';
}

function esconderconfirmaSenhaR() {
    document.getElementById ("confirmaSenhaR"). type = "password";
    document.querySelector('#esconderconfirmaSenhaR').style.display='none';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='block';
}

function mostrarLogin() {
    document.querySelector('.Login').style.display='block';
    document.querySelector('.Registro').style.display='none';
    document.querySelector('.ResgatarSenha').style.display='none';

    document.getElementById ("senhaL"). type = "password";
    document.getElementById ("senhaR"). type = "password";
    document.getElementById ("confirmaSenhaR"). type = "password";

    document.querySelector('#esconderSenhaL').style.display='none';
    document.querySelector('#mostrarSenhaL').style.display='block';
    document.querySelector('#esconderSenhaR').style.display='none';
    document.querySelector('#mostrarSenhaR').style.display='block';
    document.querySelector('#esconderconfirmaSenhaR').style.display='none';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='block';
}
function mostrarRegistro() {
    document.querySelector('.Login').style.display='none';
    document.querySelector('.Registro').style.display='block';
    document.querySelector('.ResgatarSenha').style.display='none';

    document.getElementById ("senhaL"). type = "password";
    document.getElementById ("senhaR"). type = "password";
    document.getElementById ("confirmaSenhaR"). type = "password";

    document.querySelector('#esconderSenhaL').style.display='none';
    document.querySelector('#mostrarSenhaL').style.display='block';
    document.querySelector('#esconderSenhaR').style.display='none';
    document.querySelector('#mostrarSenhaR').style.display='block';
    document.querySelector('#esconderconfirmaSenhaR').style.display='none';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='block';
}
function mostrarResgatarSenha() {
    document.querySelector('.Login').style.display='none';
    document.querySelector('.Registro').style.display='none';
    document.querySelector('.ResgatarSenha').style.display='block';

    document.getElementById ("senhaL"). type = "password";
    document.getElementById ("senhaR"). type = "password";
    document.getElementById ("confirmaSenhaR"). type = "password";

    document.querySelector('#esconderSenhaL').style.display='none';
    document.querySelector('#mostrarSenhaL').style.display='block';
    document.querySelector('#esconderSenhaR').style.display='none';
    document.querySelector('#mostrarSenhaR').style.display='block';
    document.querySelector('#esconderconfirmaSenhaR').style.display='none';
    document.querySelector('#mostrarconfirmaSenhaR').style.display='block';
}

function resgatarSenha() {
    let emailResgate = document.getElementById('emailResgate').value;

    if(emailResgate.trim() == "") {
        window.alert("Preencha o campo")
    } else {

        let loginValido = 0
        for (let i = 0; i < bancoDeCadastro.length; i++) {
            if(emailResgate == emailVerificacao[i]) {
                loginValido++
            }
        }

        if(emailResgate == "adm2002@gmail.com") {
            window.alert("Conta privada")
            document.getElementById('emailResgate').value =""
        } else {

            if(loginValido == 0) {
                window.alert("Conta não registrada")
            } else {
                window.alert("Aguarde o código de verificação")
                document.getElementById('emailResgate').value =""
    
                document.querySelector('.Login').style.display='block';
                document.querySelector('.Registro').style.display='none';
                document.querySelector('.ResgatarSenha').style.display='none';
            }

        }
        
    }
}