// RELÓGIO EM TEMPO REAL
function updateClock() {
  const now = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString('pt-BR', options);

  const time = now.toLocaleTimeString('pt-BR');

  document.getElementById("clock").textContent = time;
  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();


// MENSAGEM EDITÁVEL (salva no navegador)
const savedMessage = localStorage.getItem("footerMessage");

if (savedMessage) {
  document.getElementById("footerMessage").textContent = savedMessage;
}

// FUTURO PAINEL DE CONTROLE
function updateFooterMessage(newMessage) {
  document.getElementById("footerMessage").textContent = newMessage;
  localStorage.setItem("footerMessage", newMessage);
}
