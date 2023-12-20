

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if (usuario === "" || senha === '') {
        alert("Cadastro bem-sucedido!");
        location.replace("tarefa.html");
    } else {
        alert("Erro no cadastro, tente novamente");
    }
});
