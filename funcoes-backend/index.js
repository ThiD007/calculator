const { soma, subtracao, multiplicacao, divisao } = require('./operacoes-matematicas');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startCalculator() {
    console.log("\nEscolha uma operação:");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - Sair");

    rl.question("Digite o número da operação desejada: ", (opcao) => {
        const operacao = parseInt(opcao);

        if (operacao >= 1 && operacao <= 4) {
            rl.question("Digite o primeiro número: ", (num1) => {
                rl.question("Digite o segundo número: ", (num2) => {
                    const a = parseFloat(num1);
                    const b = parseFloat(num2);

                    switch (operacao) {
                        case 1:
                            console.log("Operação selecionada: Soma");
                            console.log("Resultado:", soma(a, b));
                            break;
                        case 2:
                            console.log("Operação selecionada: Subtração");
                            console.log("Resultado:", subtracao(a, b));
                            break;
                        case 3:
                            console.log("Operação selecionada: Multiplicação");
                            console.log("Resultado:", multiplicacao(a, b));
                            break;
                        case 4:
                            console.log("Operação selecionada: Divisão");
                            if (b !== 0) {
                                console.log("Resultado:", divisao(a, b));
                            } else {
                                console.log("Erro: Divisão por zero não é permitida.");
                            }
                            break;
                    }
                    startCalculator(); // Restart the calculator
                });
            });
        } else if (operacao === 5) {
            console.log("Encerrando o programa...");
            rl.close(); // Exit the program
        } else {
            console.log("Opção inválida! Tente novamente.");
            startCalculator(); // Restart the calculator
        }
    });
}

// Start the calculator
startCalculator();