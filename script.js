let panier = [];
let total = 0;

/* ➕ AJOUTER */
function ajouter(nom, prix) {
  panier.push({ nom, prix });
  total += prix;
  afficher();
}

/* 🛒 AFFICHER */
function afficher() {
  let list = document.getElementById("list");
  let totalHTML = document.getElementById("total");

  list.innerHTML = "";

  panier.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.nom + " - " + item.prix + " Ar";
    list.appendChild(li);
  });

  totalHTML.textContent = total;
}

/* 💳 PAYER (MVola + Orange + WhatsApp) */
function payer() {

  if (panier.length === 0) {
    alert("Panier vide !");
    return;
  }

  let uid = prompt("UID Free Fire :");
  if (!uid) return;

  let methode = prompt("Paiement : 1=MVola / 2=Orange Money");

  let paiement = "";

  if (methode === "1") {
    paiement = "MVola 034 29 815 76 (Marthe)";
  } else if (methode === "2") {
    paiement = "Orange Money 037 81 386 88 (Marthe)";
  } else {
    alert("Méthode invalide");
    return;
  }

  let msg = "COMMANDE FREE FIRE\n\n";

  panier.forEach(p => {
    msg += "- " + p.nom + " (" + p.prix + " Ar)\n";
  });

  msg += "\nTotal : " + total + " Ar";
  msg += "\nUID : " + uid;
  msg += "\nPaiement : " + paiement;

  let numero = "261342981576";

  window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(msg));
}

/* 🌗 MODE SOMBRE/CLAIR */
function toggleMode() {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
}

/* charger mode */
window.onload = function () {
  if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light");
  }
};
