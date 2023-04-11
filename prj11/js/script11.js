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


var lis = document.querySelectorAll("li"); //NodeList, simili agli array, un array dui oggetti HTML
console.log(lis);

var img1= document.querySelector("#img11");
var img1= document.querySelector("#img21");
var img1= document.querySelector("#img31");
var img1= document.querySelector("#img41");
var img1= document.querySelector("#img51");


img11.setAttribute.setAttribute("class","ddimImg");

var attore1 ="Robert De Niro";
var a1 = document.createElement("a");
a1.textContent=attori1;

a1.setAttribute("href", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GPDtLAKZ6q5DGJw5dCgdfjOPQfTOUCoVdg&usqp=CAU" );
list[0]=appendChild(a1);

//*******************Versione del prof**************************

var lis = document.querySelectorAll("li");
var attori = ["Robert de niro", "Leonardo di caprio", "Al pacino", "Merylin Stgreep"];
//Sono tutti 

for (let i = 0; i < lis.length; i++) {
   let a = document.createElement("a");
   a.textContent= attori[i];
   a.setAttribute("href", "https://it.wikipedia.org/wiki/"+attori[i]);
   lis[i].appendChild(a);
}


lis.forEach(li=>{

})
