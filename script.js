<script id="js1x9a">
/* Demander UID */
function demanderUID() {
  let uid = prompt("Entre ton UID Free Fire :");
  if (!uid || uid.trim() === "") {
    alert("UID obligatoire !");
    return null;
  }
  return uid;
}

/* Acheter */
function acheter(pack, prix) {
  const uid = demanderUID();
  if (!uid) return;

  const numero = "261XXXXXXXX"; // ton numéro WhatsApp
  const message = encodeURIComponent(
    "Bonjour, je veux acheter : " + pack +
    " | Prix : " + prix +
    " | UID : " + uid
  );

  window.open("https://wa.me/" + numero + "?text=" + message);
}

/* Ajouter boutons automatiquement */
const items = document.querySelectorAll("li");

items.forEach(item => {
  const text = item.innerText;

  const btn = document.createElement("button");
  btn.innerText = "Acheter";

  btn.style.marginLeft = "10px";
  btn.style.background = "#22c55e";
  btn.style.border = "none";
  btn.style.padding = "5px";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";

  btn.onclick = () => {
    acheter(text, text);
  };

  item.appendChild(btn);
});
</script>
