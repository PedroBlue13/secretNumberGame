//alert para exibir a mensagem em um alert box
alert('Bem vindo ao jogo!');
//criar uma varivavel com o nome numero secreto (let em java significa que é uma variavel)
//criar pontos para evitar acoplamente
let mathNumber = 100;
let secretNumber = Math.floor(Math.random()* mathNumber +1);

console.log(secretNumber)
//cria um prompt/similar ao inputa para inserir o valor
//trabsforma o pront em varivavel para armazenar o valor
// prompt('Escolha um número entre 1 e 10');
//let tryNumber;
//criar uma entrada inicial perguntando o número
let tryNumber; 
//criar uma condição para ver o número com console log
let attempts = 1;


document.getElementById('checkButton').addEventListener('click', () => {
    const inputField = document.getElementById('sonicNumber');
    const checkButton = document.getElementById('checkButton');
    const tryNumber = Number(inputField.value);
    const resultMessage = document.getElementById('resultMessage');
    const attemptsMessage = document.getElementById('attemptsMessage');
    const robotImage = document.getElementById('robotImage');
    const textContainer = document.getElementById('textContainer');
    attempts++;

    if (tryNumber === secretNumber) {
        // Mensagem de vitória
        resultMessage.textContent = `🎉 Parabéns! Você acertou o número secreto em ${attempts} tentativa(s)!`;
        resultMessage.style.color = 'green';

        // Mudar o GIF do robô para a imagem de comemoração
        robotImage.src = './img/robo1.gif';
        robotImage.alt = 'Robô comemorando';

        // Atualizar o texto para a mensagem de vitória
        textContainer.innerHTML = `
            <h1>Parabéns, você ajudou o <span class="container__texto-azul">Sonic!</span></h1>
            <h1>a virar Super</h1>
        `;

        // Ocultar o campo de entrada e o botão
        inputField.style.display = 'none';
        checkButton.style.display = 'none';
    } else if (tryNumber > secretNumber) {
        resultMessage.textContent = `🔽 Você chutou ${tryNumber}, mas o número secreto é MENOR.`;
        resultMessage.style.color = 'red';
        inputField.value = "";
        inputField.focus();
    } else {
        resultMessage.textContent = `🔼 Você chutou ${tryNumber}, mas o número secreto é MAIOR.`;
        resultMessage.style.color = 'red';
        inputField.value = "";
        inputField.focus();
    }

    attemptsMessage.textContent = `Tentativas: ${attempts}`;
});
// while (tryNumber !== secretNumber){
//     tryNumber= Number(prompt(`Tente acertar um número entre 1 e ${mathNumber}!`));
// if (tryNumber == secretNumber){
//     break;
// } else {
//     if (tryNumber > secretNumber){
//         alert(`Você chutou ${tryNumber} porém o Numero secreto é Menor. `);
//     }
//     else{
//         alert(`Você chutou ${tryNumber} porém o Numero secreto é Maior. `);
//     };
//     attempts++;
// }
// }


// let attemptsReturn = attempts >1 ? "tentativas" : "tentativa";

// if (attemptsReturn){
//     alert(`Yas, vc é demais o numero secreto é "${secretNumber}" e você com "${attempts} ${attemptsReturn}"  acertou!`);
// }



// alert(`Yas, vc é demais o numero secreto é "${secretNumber}" e você com "${attempts}" tentativas acertou!`);

//console.log(`Poxa, vc n representou! o numero ${tryNumber} não é o secreto!`)