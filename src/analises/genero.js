const genero = [{
    id:'0',
    analise: 'Pegando como análise todas as vacinações realizadas, incluindo 1ª, 2ª, 3ª e 4ª doses, percebe-se ligeira maioria de mulheres entre as declarações de sexo. Resultado indica maior número de mulheres na população recifense.',
    grafico: 'https://i.imgur.com/Ge8qKcj.png'
},
{
    id:'1',
    analise: 'Na 1ª dose a proporção indica uma ligeira semelhança se comparada à proporção de vacinação total, compreensível já que conforme visto na análise de números por doses, a 1ª dose representa uma adesão maior da população. Porém, uma diferença de aproximadamente 2% proporcionais de declarados homens e declaradas mulheres. A proporção de declarados Outros sexos continua ligeiramente a mesma, com um aumento de 0,1%.',
    grafico: 'https://i.imgur.com/C97Dqxs.png'
},
{
    id:'2',
    analise: 'Na 2ª dose, a proporção volta a ser completamente igual comparado ao total, mas uma variação de aproximadamente 1,5% proporcional da adesão dos homens e mulheres da 1ª dose. A proporção de declarados Outros sexos continua a mesma.',
    grafico: 'https://i.imgur.com/nH6Hiqg.png'
},
{
    id:'3',
    analise: 'Na 3ª dose, ocorre uma variação maior, a proporção de mulheres se torna uma significante maioria, levando entender que uma parcela de homens recifenses deixaram de se vacinar na 3ª dose. A proporção de declarados Outos sexos continua a mesma.',
    grafico: 'https://i.imgur.com/RTzZ9mZ.png'
},
{
    id:'4',
    analise: 'Na 4ª dose, já se observa um cenário bem diferente, a maioria se vira para os declarados homens. Isso pode ser justificado devido a baixissíma quantidade de doses tomadas. Tornando inconclusivo a real proporção entre os sexos durante a 4ª dose.',
    grafico: 'https://i.imgur.com/xLPZ8XY.png'
}]

function Generos(){
    return(
    <section>
        <h1 className='titulo'>Analise por gênero</h1>
        {genero.map(genero => {
                return (
                <div>
                <img src={genero.grafico} alt={genero.analise} className="imagem"/>
                <p className='texto textoNegrito'>{genero.analise}</p>
                </div>
                )})}
    </section>
    )
}
export default Generos