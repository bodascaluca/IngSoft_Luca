
var titolo = document.querySelector("#titolo");
var locandina = document.querySelector("#locandina");
var regista = document.querySelector("#regista");
var attori = document.querySelector("#attori");
var durata = document.querySelector("#durata");
var btnTrama = document.querySelector('#btnTrama');
var tram = document.querySelector("#trama");


var filmsJSON = [
    {
        titolo: "Dune",
        regista: "Villeneuve",
        attori: [
            "Timothée Chalamet", 
            "Rebecca Ferguson", 
            "Zendaya"
        ],
        durata: 155,
        poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        trama: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
    },

    {
        titolo: "The Matrix",
        regista: "Wachowski",
        attori: [
            "Keanu Reeves", 
            "Laurence Fishburne", 
            "Carrie-Anne Moss"
        ],
        durata: 170,
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" ,
        trama: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
    }
];


let index = 0;


function updateFilm() {
    var film = filmsJSON[index];
    titolo.textContent = film.titolo;
    locandina.setAttribute("src",film.poster);
    regista.textContent = film.regista;
    attori.innerHTML = `<li>Attori:</li>`;
    film.attori.forEach((attore) => {
        var li = document.createElement("li");
        li.innerText = attore;
        attori.appendChild(li);
    });
    durata.innerText = `Durata: ${film.durata} minuti`;
    
btnTrama.onclick = function() {
    
        if(tram.textContent==""){
            tram.textContent = film.trama;
        }else{
            tram.textContent= "";
        }
      
console.log(btnTrama)
}
}

updateFilm();



document.querySelector("#btnIndietro").addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = filmsJSON.length - 1;
    }
    updateFilm();
});

document.querySelector("#btnAvanti").addEventListener("click", () => {
    index++;
    if (index >= filmsJSON.length) {
        index = 0;
    }
    updateFilm();
});

var btnLogin = document.querySelector("#btnLogin");
var divLogin = document.querySelector("#divLogin");
var benvenuto = document.querySelector("#benvenuto");
var divLocandina = document.querySelector("#divLocandina");
var divLogin = document.querySelector("#divLogin");

var ul = document.querySelector("#ul")




function login(){

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    localStorage.setItem("username", username)
    localStorage.setItem("password", password)

    if(username=="" || password==""){
        benvenuto.innerHTML= "Devi comlettare entrambi i campi";
    }else{
        benvenuto.innerHTML= "Benvenuto "+ username;
        var btn = document.createElement("button");
        btn.textContent="Compra"
        divLocandina.appendChild(btn);
    }

    var films = [];

    btn.onclick = function(){

        
        for (let i = 0; i < filmsJSON.length - 1; i++) {

            var el = filmsJSON[index].titolo

            films.push(el)

            localStorage.setItem("films", films);

            var li = document.createElement("li")

            ul.appendChild(li);

        }

        films.forEach(element => {

            li.innerHTML=element;
            
        });
       
    }

}


btnLogin.addEventListener("click", login);
