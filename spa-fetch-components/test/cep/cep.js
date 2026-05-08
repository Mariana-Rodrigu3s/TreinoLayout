const button_then = document.getElementById('then')
const button_async = document.getElementById('async')



button_then.addEventListener('click', () =>{
    const input = document.getElementById('input01').value;

    fetch(`https://viacep.com.br/ws/${input01}/json/`)

.then((response) => {

    if(!response.ok){
        throw new Error('Erro na Requisição.')
    }
    return response.json()
})
.then((dados) => {

    if(dados.erro){
        throw new Error('CEP inválido ou não encontrado.')
    }
    console.log(dados)
})
.catch((erro) => {
    console.warn(erro.message)
});
})










button_async.addEventListener('click', () =>{

    const url = 'https://viacep.com.br/ws/01001000/json/';
const consulta = fetch(url);

async function buscarCep(){
    let resposta = await consulta;
    console.log(resposta)
    let dataObj = await resposta.json();
    console.log(dataObj);
};

buscarCep();
})

