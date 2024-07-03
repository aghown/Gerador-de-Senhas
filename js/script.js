document.getElementById('start-button').addEventListener('click', function() {
    document.body.innerHTML = `
    <div class="generator-container">
         <label for="password-length">Tamanho da senha:</label>
         <input type="number" id="password-length" min="4" max="32" value="12">
         <br>
         <label><input type="checkbox" id="include-numbers" checked> Incluir números</label>
         <br>
         <label><input type="checkbox" id="include-uppercase" checked> Incluir letras maiúsculas</label>
         <br>
         <label><input type="checkbox" id="include-special" checked> Incluir caracteres especiais</label>
         <br>
         <button id="generate-button">Gerar Senha</button>
         <div id="password-result"></div>
         <button id="copy-button" style="display:none;">Copiar Senha</button>
    </div>
    `;

    document.getElementById('generate-button').addEventListener('click', generatePassword);
    document.getElementById('copy-button').addEventListener('click', copyPassword);
});

function generatePassword() {
    const length = document.getElementById('password-length').value;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lower;
    if (includeUppercase) characters += upper;
    if (includeNumbers) characters += numbers;
    if (includeSpecial) characters += special;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password-result').innerText = password;
    document.getElementById('copy-button').style.display = 'inline-block';
}

function copyPassword() {
    const password = document.getElementById('password-result').innerText;
    navigator.clipboard.writeText(password).then(() => {
        alert('Senha copiada para a área de transferência!');
    });
}
