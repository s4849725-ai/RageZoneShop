let panier=[],total=0;

function entrer(){
document.getElementById("accueil").style.display="none";
document.getElementById("shop").style.display="block";
}

function showCat(c){
["topup","levelup","abo","largage"].forEach(id=>{
document.getElementById(id).style.display="none";
});
document.getElementById(c).style.display="block";
}

function add(n,p){
panier.push({n,p});
total+=p;
show();
}

function show(){
let l=document.getElementById("list");l.innerHTML="";
panier.forEach((i,index)=>{
let li=document.createElement("li");
li.innerHTML=i.n+" - "+i.p+" Ar <button onclick='removeItem("+index+")'>❌</button>";
l.appendChild(li);
});
document.getElementById("total").textContent=total;
}

function removeItem(index){
total-=panier[index].p;
panier.splice(index,1);
show();
}

function viderPanier(){
panier=[];
total=0;
show();
}

function payer(){
if(panier.length===0){alert("Panier vide");return;}
document.getElementById("modal").style.display="flex";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

function valider(){
let uid=document.getElementById("uid").value;
let pseudo=document.getElementById("pseudo").value;
let ref=document.getElementById("ref").value;
let m=document.getElementById("methode").value;

if(!uid||!pseudo||!ref||!m){alert("Remplis tout");return;}

let pay=m==="MVola"?"MVola 0342981576 Marthe":"Orange 0378138688 Marthe";

let msg="COMMANDE FREE FIRE\n\n";
panier.forEach(i=>{msg+="- "+i.n+" ("+i.p+" Ar)\n";});
msg+="\nTotal:"+total;
msg+="\nUID:"+uid;
msg+="\nPseudo:"+pseudo;
msg+="\nRef:"+ref;
msg+="\nPaiement:"+pay;

window.open("https://wa.me/261342981576?text="+encodeURIComponent(msg));
closeModal();
}

function toggleMode(){
document.body.classList.toggle("light");
  }
