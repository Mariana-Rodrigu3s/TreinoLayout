const buttonTema = document.querySelector('.button-alterartema')
const body = document.querySelector('body')



buttonTema.addEventListener('click', () =>{
    // o toggle serve para alterar, caso não tenha a classe ele adiciona, caso tenha ele remove
    body.classList.toggle('dark');


    // O contains serve para verificar se ele encontra a classe dark no body
    // O if com o contains serve para o constains detectar o modo escuro e assim o if ajuda o localstorage a salvar o dark
    if (body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark')
    } else{
        localStorage.setItem('theme', 'light')
    }

    const temaSalvo = localStorage.getItem('theme')

    if (temaSalvo == 'dark'){
        body.classList.add('dark')
    }

    


    const temaSalvo

})