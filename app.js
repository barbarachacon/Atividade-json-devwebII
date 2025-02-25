function banco() {
    const bd = [
        {id:1,nome:"Snoopy", login:"snoopy", senha:"snoopy123",email:"peanuts@gmail.com"},
        {id:2,nome:"Charlie", login:"charlie", senha:"charliebrown123",email:"charlie@gmail.com"},
        {id:3,nome:"Woodstock", login:"woodstock", senha:"woodstock123",email:"woodstock@gmail.com"},
    ]
    
    let json = JSON.stringify(bd);

    localStorage.setItem("bd", json)
}

function login(){
    let bd = JSON.parse(localStorage.getItem("bd"));

    let lg = document.querySelector("#login").value;
    let sn = document.querySelector("#senha").value;

    for(let i=0; i < bd.length; i++) {
        if(lg == bd[i].login && sn == bd[i].senha) {
            alert("Login bem-sucedido!");
            window.location.href = "index.html";
            return;
        }
    }
    alert("Login ou senha incorreto.");
}

function cadastrar(){
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const login = document.querySelector("#login").value;
    const senha = document.querySelector("#senha").value;

    let bd = JSON.parse(localStorage.getItem("bd")) || [];

    const novoUsuario = {
        id: bd.length +1,
        nome: nome,
        email: email,
        login: login,
        senha: senha,
    };

    bd.push(novoUsuario);

    localStorage.setItem("bd", JSON.stringify(bd));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";

}