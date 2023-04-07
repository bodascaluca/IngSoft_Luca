let btn = document.querySelector("#btn");

function aggiungi(){

    var ul= document.querySelector("ul");

    let nome = document.querySelector("#nome").value;
    let img = document.querySelector("#img").value;

    let nuovoli = "<li>" +  nome + "<br>"+
    "<img src='"+ img + "'>"+ "</li>";
    ul.innerHTML += nuovoli;

    // var li = document.createElement("li");
    // li.textContent = nome;

    //lista.appendChild(li);

    // lista.appendChild(li);
     li.appendChild(btn);

}

btn.onclick = aggiungi;

var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");
var img4 = document.querySelector("#img4");

var nome1 = document.querySelector("#nome1");
var nome2 = document.querySelector("#nome2");
var nome3 = document.querySelector("#nome3");
var nome4 = document.querySelector("#nome4");

nome1.innerHTML="MaX Verstappen";
nome2.innerHTML="Charles Leclerc";
nome3.innerHTML="George Russel";
nome4.innerHTML="Pieer Gasly";

img1.setAttribute("src", "https://img.redbull.com/images/c_crop,x_914,y_1637,h_3171,w_3171/c_fill,w_310,h_310/q_auto:low,f_auto/redbullcom/2022/5/5/esxtfazwc5k0xntwv20i/max-verstappen-profile-pic");
img2.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlln8MUcHRnKBaA14tY31dWeKyodX56sM11Q&usqp=CAU");
img3.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASctN-yj7IrWWRyrOUvBgNN8yarGkTfffJw&usqp=CAU");
img4.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GPDtLAKZ6q5DGJw5dCgdfjOPQfTOUCoVdg&usqp=CAU");

