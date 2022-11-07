
const locais = [{
    id:'0',
    analise: 'A partir da visualização e análise do gráfico gerado é possível notar que apesar dos pontos de maior estrutura pra vacinar, a vacinação ocorreu de modo muito disperso pela cidade. Tal dado pode ser considerado normal, já que na cidade do recife existiram inúmeros pontos de vacinação o que demonstra um ponto positivo no combate ao covid.',
    grafico: 'https://i.imgur.com/jr85drg.png'
},
{
    id:'1',
    analise: 'Logo após, realizaremos o mesmo processo para as demais doses da vacina.',
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
    analise: 'Portanto, apesar da diminuição expressiva de vacinação realizada entre a 1ª; 2ª; 3ª e 4ª dose, o número de doses aplicadas em vários pontos diferentes se mantém superior. Concluindo-se que a propoção da distribuição de doses foi bastante distruibuido entre varios pontos de distribuiçao. Vale ressaltar, que na 4ª dose as porcentagens estão mais parecidas o que acontece por conta da menor quantidade de vacinas aplicadas e uma menor variedade de lugares.',
    grafico: 'https://i.imgur.com/PTODi7Q.png'
}
]


function Local(){
    return(
    <section>
        <h1 className='titulo margin-top'>Analise por local de vacinação</h1>
        {locais.map(local => {
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

