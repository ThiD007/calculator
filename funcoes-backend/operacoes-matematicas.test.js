const {soma, subtracao, multiplicacao, divisao} = require('./operacoes-matematicas');

function test(description, fn) {
    try {
        fn();
        console.log(`✓ ${description}`);
    } catch (error) {
        console.error(`✗ ${description}`);
        console.error(`  ${error.message}`);
    }
}

test('soma de 2 + 3 deve ser 5', () => {
    expect(soma(2, 3)).toBe(5);
});

test('subtracao de 5 - 3 deve ser 2', () => {
    expect(subtracao(5, 3)).toBe(2);
});

test('multiplicacao de 4 * 3 deve ser 12', () => {
    expect(multiplicacao(4, 3)).toBe(12);
});

test('divisao de 10 / 2 deve ser 5', () => {
    expect(divisao(10, 2)).toBe(5);
});

test('divisao por zero deve lançar erro', () => {
    expect(() => {
        divisao(10, 0);
    }).toThrow('Divisão por zero não é permitida');
});

function expect(received) {
    return {
        toBe(expected) {
            if (received !== expected) {
                throw new Error(`Esperado: ${expected}, Recebido: ${received}`);
            }
        },
        toThrow(expectedMessage) {
            let threw = false;
            try {
                received();
            } catch (error) {
                threw = true;
                if (error.message !== expectedMessage) {
                    throw new Error(`Esperado erro com mensagem: "${expectedMessage}", Recebido: "${error.message}"`);
                }
            }
            if (!threw) {
                throw new Error(`Esperado que a função lançasse um erro, mas não lançou.`);
            }
        }
    };
}