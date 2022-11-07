
const local = [{
    id:'0',
    analise: 'A partir da visualização e análise do gráfico gerado é possível notar que apesar dos pontos de maior estrutura pra vacinar, a vacinação ocorreu de modo muito disperso pela cidade. Tal dado pode ser considerado normal, já que na cidade do recife existiram inúmeros pontos de vacinação o que demonstra um ponto positivo no combate ao covid.',
    grafico: 'https://i.imgur.com/jr85drg.png'
},
{
    id:'1',
    analise: '',
    grafico: 'https://i.imgur.com/IjpsEml.png'
},
{
    id:'2',
    analise: '',
    grafico: 'https://i.imgur.com/pI2CuDd.png'
},
{
    id:'3',
    analise: '',
    grafico: 'https://i.imgur.com/Wr5Ldqn.png'
},
{
    id:'4',
    analise: '',
    grafico: 'https://i.imgur.com/PTODi7Q.png'
}
]



function Local(){
    return(
    <section>
        <h1 className='titulo margin-top'>Analise por local de vacinação</h1>
        {local.map(local => {
                return (
                <div>
                <img src={local.grafico} alt={local.analise} className="imagem"/>
                <p className='texto textoNegrito margin-bottom'>{local.analise}</p>
                </div>
                )})}
    </section>
    )
}
export default Local

