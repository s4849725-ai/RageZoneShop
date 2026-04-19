let panier = [];
let total = 0;

function entrer(){
  document.getElementById("accueil").style.display="none";
  document.getElementById("shop").style.display="block";
}

function showCat(cat){
  document.getElementById("topup").style.display="none";
  document.getElementById("levelup").style.display="none";
  document.getElementById("abo").style.display="none";
  document.getElementById("largage").style.display="none";

  document.getElementById(cat).style.display="block";
}

function add(nom, prix){
  panier.push({nom, prix});
  total += prix;
  show();
}

function show(){
  let list = document.getElementById("list");
  list.innerHTML="";

  panier.forEach(p=>{
    let li=document.createElement("li");
    li.textContent=p.nom+" - "+p.prix;
    list.appendChild(li);
  });

  document.getElementById("total").textContent=total;
}

function payer(){

  let uid = document.getElementById("uid").value;
  let pseudo = document.getElementById("pseudo").value;
  let ref = document.getElementById("ref").value;
  let methode = document.getElementById("methode").value;

  if(!uid || !pseudo || !ref || !methode){
    alert("Remplis tout !");
    return;
  }

  let paiement = methode==="MVola"
    ? "MVola 0342981576 (Marthe)"
    : "Orange 0378138688 (Marthe)";

  let msg="COMMANDE\n\n";

  panier.forEach(p=>{
    msg+="- "+p.nom+" ("+p.prix+" Ar)\n";
  });

  msg+="\nTotal:"+total;
  msg+="\nUID:"+uid;
  msg+="\nPseudo:"+pseudo;
  msg+="\nRef:"+ref;
  msg+="\nPaiement:"+paiement;

  window.open("https://wa.me/261342981576?text="+encodeURIComponent(msg));
}

function toggleMode(){
  document.body.classList.toggle("light");
               }
