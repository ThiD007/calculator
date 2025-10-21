const fs = require ('fs');
const path = require ('path');

const lodDir = path.join (__dirname, "logs");

if (!fs.existsSync (lodDir)) {
  fs.mkdirSync (lodDir);
}

function SalvarLog (json){
    const dataAtual = new Date();
    const dataStr = dataAtual.toISOString().split('T')[0];
    const logPath = path.join (lodDir, `log_${dataStr}.json`);

    const novoRegistro = {
        data : dataAtual.toISOString(),
        operacao,
        valores : `${a} e ${b}`,
        resultado
    };

    let logsExistentes = [];
    if (fs.existsSync (logPath)) {
        const conteudo = fs.readFileSync (logPath, 'utf-8');
        logsExistentes = JSON.parse (conteudo || '[]');
    }

    logsExistentes.push (novoRegistro);
    fs.writeFileSync (logPath, JSON.stringify (logsExistentes, null, 2),
    'utf-8');

    console.log (`Operação registrada em ${path.basename (logPath)}`);
}

module.exports = {SalvarLog};