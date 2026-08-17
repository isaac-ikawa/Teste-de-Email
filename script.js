const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const valorEmail = email.value.trim();

    if (valorEmail === "") {
        mensagem.textContent = "Por favor, informe um endereço de e-mail.";
        return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formatoEmail.test(valorEmail)) {
        mensagem.textContent = "E-mail válido! O formato está correto.";
    } else {
        mensagem.textContent =
            "E-mail inválido. Use o formato exemplo@email.com.";
    }
});