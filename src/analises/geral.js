const geral = [{
    id:'0',
    analise: 'Observa-se um dado preocupante na cobertura vacinal da população, porque há uma queda no número de doses aplicadas para a segunda dose e essa queda fica, ainda mais evidente, em comparação com a de doses aplicadas para terceira dose, pois das mais de 1.4 milhões de pessoas que tomaram a primeira dose, menos da metade tomou a terceira dose. Além disso, o gráfico apresenta a quarta dose, que tem sua aplicação em início com cerca de 1000 doses aplicadas.',
    grafico: 'https://i.imgur.com/u51B4ii.png'
}]

function GeralAnalise(){
    return(
    <section>
        <h1 className='titulo'>Analise</h1>
        {geral.map(geral => {
                return (
                <div>
                <img src={geral.grafico} alt={geral.analise} className="imagem"/>
                <p className='texto textoNegrito'>{geral.analise}</p>
                </div>
                )})}
    </section>
    )
}
export default GeralAnalise