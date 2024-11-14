document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    const u = 'marcela@gmail.com';
    const s = '123';

    // Validação simples (substitua por autenticação real conforme necessário)
    if (username === u && password === s) {
        // Aqui você pode redirecionar o usuário para outra página
        window.location.href = "filmes.html";
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos.';
    }
});