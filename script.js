let panier = [];
let total = 0;

/* AJOUT */
function add(nom, prix) {
  panier.push({ nom, prix });
  total += prix;
  show();
}

/* AFFICHAGE */
function show() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  panier.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p.nom + " - " + p.prix + " Ar";
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

/* PAIEMENT */
function payer() {

  let uid = document.getElementById("uid").value;
  let pseudo = document.getElementById("pseudo").value;
  let ref = document.getElementById("ref").value;
  let methode = document.getElementById("methode").value;

  if (!uid || !pseudo || !ref || !methode) {
    alert("Remplis tout !");
    return;
  }

  let paiement = methode === "MVola"
    ? "MVola 034 29 815 76 (Marthe)"
    : "Orange Money 037 81 386 88 (Marthe)";

  let msg = "COMMANDE FREE FIRE\n\n";

  panier.forEach(p => {
    msg += "- " + p.nom + " (" + p.prix + " Ar)\n";
  });

  msg += "\nTotal : " + total;
  msg += "\nUID : " + uid;
  msg += "\nPseudo : " + pseudo;
  msg += "\nRéférence : " + ref;
  msg += "\nPaiement : " + paiement;

  window.open("https://wa.me/261342981576?text=" + encodeURIComponent(msg));
}

/* MODE */
function toggleMode() {
  document.body.classList.toggle("light");
}
