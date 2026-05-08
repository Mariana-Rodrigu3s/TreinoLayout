import { IniciarMenu } from "../components/menu.js";


const carregarComponente = (caminho, container) =>{
    try{
        const resposta = await fetch(caminho);


        if (!resposta.ok){
            throw new Error('Erro ao carregar componente')
        }

        const html = await resposta.text();

        container.innerHTML = html


    }catch(erro){
        console.error(erro)

    }

}


const iniciarLinks = () => {

    const conteudo = document.querySelector('[data-conteudo]')

    document.querySelectorAll('[data-link]').forEach((link) => {
    
        link.addEventListener('click', async (event) =>{
            event.preventDefault();

            const pagina = link.dataset.link;

            const menu = document.querySelector('[data-menu]');
            const botao = menu.querySelector('.menu__botao');

            if(menu.classList.contains('active')){
                menu.classList.remove('active');
                

                botao.setAttribute('aria-expanded', false)
                botao.setAttribute('arial-label', 'Abrir Menu')
            }


            await carregarComponente(`./pages/${pagina}.html`, conteudo)
        })
    })

}


const iniciarApp = async () => {
    const containerMenu = document.querySelector('[data-componente="menu"]');

    await carregarComponente('./components/menu.html', containerMenu);

    IniciarMenu();

    iniciarLinks();

    const conteudo = document.querySelector('[data-conteudo]');
    await carregarComponente('./pages/home.html', conteudo)
    

};

iniciarApp();