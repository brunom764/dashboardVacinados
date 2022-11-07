const geral = [{
    id:'0',
    analise: 'A partir da visualização e análise do gráfico gerado é possível notar um decaimento na cobertura vacinal conforme as sucessivas doses foram surgindo. Tal dado pode ser considerado preocupante, visto que o normal seria a linha se manter "reta" e estável o que significaria uma alta adesão popular às aplicações das doses, algo que não aconteceu na prática.',
    grafico: 'https://i.imgur.com/u51B4ii.png'
},{
    id:'1',
    analise: 'Conclui-se que o número de doses da vacina contra a Covid-19 aplicadas durante a pandemia, no município de Recife-PE, se mostrou decadente. Isso se deu, possivelmente, por causa da retração da doença após as aplicações das primeiras e segundas doses, que fez com que os cidadãos julgassem não ser necessária a aplicação de uma terceira ou quarta dose.',
    grafico: 'https://i.imgur.com/UPl0Ll1.png'
}]

function GeralAnalise(){
    return(
    <section>
        <h1 className='titulo'>Análise cobertura vacinal contra a covid-19</h1>
        {geral.map(geral => {
                return (
                <div>
                <img src={geral.grafico} alt={geral.analise} className="imagem"/>
                <p className='texto textoNegrito margin-bottom'>{geral.analise}</p>
                </div>
                )})}
    </section>
    )
}
export default GeralAnalise
