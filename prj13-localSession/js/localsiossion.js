var nomeUtente="Dario";

var utente ={
    nome:"Pippo",
    cognome : "Rossi",
    eta:30
}

var btn = document.querySelector("#btn");


function login(){
    localStorage.setItem("username", nomeUtente); //finche

    //per salvare un oggetto deve trasfomaare in un JSON
    let utenteJSON = JSON.stringify(utente);
    localStorage.setItem("utente", utenteJSON)

    location.reload();
}

btn.addEventListener("click", login);

var feed = document.querySelector("#feed");


function recuperaUtente(){

    let uteneConessoJSON = localStorage.getItem("utente");
    console.log(uteneConessoJSON);

    let utenteConnesso = JSON.parse(uteneConessoJSON)
    console.log(utenteConnesso);

    if(utenteConnesso==null){
        feed.innerHTML="Nessun utente connesso";
    }else{
        feed.innerHTML="Ciao "+ utenteConnesso.nome + ", benvenuto ! ";
    }
}

recuperaUtente();

var btnOut = document.querySelector("#btnOut");

function logout(){
    localStorage.clear();
    localStorage.removeItem("utente");

    location.reload();
}

btnOut.addEventListener("click", logout);