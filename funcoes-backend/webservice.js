const http = require('http');
const port = 3000;
const {soma, multiplicacao, subtracao, divisao} = require('./operacoes-matematicas');
//const { SalvarLog, LerLog } = require('./utils');

let resultado = 0;
let body      = "";
let logs      = undefined;

const server = http.createServer((request, response) => {
    const {method, url} = request;

    //Rota Ler Log
    if (url === '/logs' && method === 'GET') {
        logs = LerLog();
        response.writeHead(200, {"content-type": "application/json"});
        return response.end(JSON.stringify(logs));
    }
    //Rota Soma
    if (url === '/somar' && method === 'POST') {
        console.log("Rota soma requisitada");
        //coletar dados recebidos na request
        body = "";
        request.on("data", chunk => (body += chunk));
        request.on("end", () => {
            try{
               const {a} = JSON.parse(body);
               const {b} = JSON.parse(body); 
               resultado = soma(a, b)

               //Envia resposta de sucesso
               response.writeHead(200, {"content-type": "text/plain"});
               return response.end(`Detalhes: a = ${a}, b = ${b} e resultado = ${resultado}`)
            } catch(e) {
                //Envia resposta de erro tratada
                response.writeHead(400, {"content-type": "text/plain"});
                return response.end(`Falha ao executar operação: \n ${e}`)
            }
        });
    }

    //rota subtração
    if (url === '/subtrair' && method === 'POST') {
        console.log("Rota subtrair requisitada");
        //coletar dados recebidos na request
        body = "";
        request.on("data", chunk => (body += chunk));
        request.on("end", () => {
            try{
               const {a} = JSON.parse(body);
               const {b} = JSON.parse(body); 
               resultado = subtracao(a, b)

               //Envia resposta de sucesso
               response.writeHead(200, {"content-type": "text/plain"});
               return response.end(`Detalhes: a = ${a}, b = ${b} e resultado = ${resultado}`)
            } catch(e) {
                //Envia resposta de erro tratada
                response.writeHead(400, {"content-type": "text/plain"});
                return response.end(`Falha ao executar operação: \n ${e}`)
            }
        });
    }

    //rota multiplicação
    if (url === '/multiplicar' && method === 'POST') {
        console.log("Rota multiplicar requisitada");
        //coletar dados recebidos na request
        body = "";
        request.on("data", chunk => (body += chunk));
        request.on("end", () => {
            try{
               const {a} = JSON.parse(body);
               const {b} = JSON.parse(body); 
               resultado = multiplicacao(a, b)

               //Envia resposta de sucesso
               response.writeHead(200, {"content-type": "text/plain"});
               return response.end(`Detalhes: a = ${a}, b = ${b} e resultado = ${resultado}`)
            } catch(e) {
                //Envia resposta de erro tratada
                response.writeHead(400, {"content-type": "text/plain"});
                return response.end(`Falha ao executar operação: \n ${e}`)
            }
        });
    }

    //rota divisão
    if (url === '/dividir' && method === 'POST') {
        console.log("Rota dividir requisitada");
        //coletar dados recebidos na request
        body = "";
        request.on("data", chunk => (body += chunk));
        request.on("end", () => {
            try{
               const {a} = JSON.parse(body);
               const {b} = JSON.parse(body); 
               resultado = divisao(a, b)

               //Envia resposta de sucesso
               response.writeHead(200, {"content-type": "text/plain"});
               return response.end(`Detalhes: a = ${a}, b = ${b} e resultado = ${resultado}`)
            } catch(e) {
                //Envia resposta de erro tratada
                response.writeHead(400, {"content-type": "text/plain"});
                return response.end(`Falha ao executar operação: \n ${e}`)
            }
        });
    }



});

server.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
});