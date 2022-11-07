import './intro.css'
function Intro(){
    return(
        <section>
            <h1 className="titulo">Sobre</h1>
            <p className="texto textoNegrito">Projeto de visualização e análise de dados sobre a cobertura vacinal contra a covid-19 na cidade de Recife(PE) para a disciplina de Programação I 2022.1 UFPE. Neste projeto foi utilizado a linguagem python e as seguintes bibliotecas: pandas (preparo de dados), matplotlib (criação de gráficos e visualizações de dados em geral) e seaborn (plotagem de graficos). Além do mais, para a construção do dashboard, foi utilizado a biblioteca React js.</p>
            <img className='zegotinha' alt='Ze gotinha' src='https://i.imgur.com/lpar1fK.png'/> 
            <h1 className='titulo textoDestaque'>Vacine-se contra a Covid-19!</h1>
        </section>
    )
}

export default Intro