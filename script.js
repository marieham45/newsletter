/*
1. Vytvořte si novou složku a vytvořte v ní soubory - index.html, style.css a script.js. Soubory propojte.
2. Vložte do ní formulář s textovým políčkem a tlačítkem pro přihlášení k odběru.
*/

// 3. Vytvořte posluchač pro událost submit. Jakmile uživatel zadá svůj e-mail a potvrdí přihlášení, zobrazte na stránce místo formuláře zprávu o úspěšném přihlášení k odběru.

const formElement = document.querySelector("#registration");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailAddress = document.querySelector("#email").value;

  document.body.innerHTML = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${emailAddress}.`;
});
