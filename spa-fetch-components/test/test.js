

// /* Testando a função: carregarComponente
// 01 - Criar o componente que será injetado
// 02 - Criar o elemento que irá receber o componente (test.html)
// 03 - Capturar o elemento que irá receber o componente( no test.html)
// 04 - Utilizar a função para carregar o componente */


// // 


// try{
//     let idade = -5;
//     if (idade < 0){
//         let erro = new Error('Idade invalida')
//         erro.codigo = 1001;
//         erro.tipo = 'VALIDACAO';


//         throw GeradorErro('Idade invalida', 1001,'VALIDACAO')

//     }

// }catch(erro){
//     let text = `
//    <strong>Nome do erro:</strong> ${erro.name}<br />
//    <strong>Mensagem:</strong> ${erro.mensagem}<br />
//    <strong>Código:</strong> ${erro.codigo}<br />
//    <strong>Tipo:</strong> ${erro.tipo}<br />
//    <strong>Stack:</strong> <span>${erro.stack}</span>
//    `;

//    document.body.innerHTML = text;



// };


// const GeradorErro = (mensagem, codigo, tipo) => {

//     let erro = new Error(mensagem)
//     erro.codigo = codigo
//     erro.tipo = tipo

//     return erro;



// };


// try{
//     saldo = -3
//     if(saldo < 1){
//         throw GeradorErro('Saldo Invalido', 1001,'VALIDACAO')
//     }



// }catch(erro){
//     console.log(erro)


//     let text = `
//     <strong>Mensagem:</strong> ${erro.mensagem}<br />
//    <strong>Código:</strong> ${erro.codigo}<br />
//    <strong>Tipo:</strong> ${erro.tipo}<br />
//    `

//    document.body.innerHTML = text;
// }

const url = 'https://viacep.com.br/ws/01001000/json/'
const consulta = fetch(url)
console.log(consulta)
consulta.then((resposta) =>{

    if(!resposta.ok){
        throw new Error('Erro')
    }

    return resposta.json()
})
.then((dados) =>{
    if (dados.erro){
        throw new Error("cep invaldo")
    }
        console.log(dados)
    })
.catch((error) =>{
    console.warn(error)
})