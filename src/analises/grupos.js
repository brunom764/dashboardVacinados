
const grupos = [{
    id:'0',
    analise: 'A partir do gráfico em barras percebe-se a grande variação no número de vacinas aplicadas entre as doses.',
    grafico: 'https://i.imgur.com/5aC42L2.png'
},
{
    id:'1',
    analise: 'Na primeira dose, o grupo dos idosos foi o que mais tomou vacina dentre os grupos prioritários, vindo em segundo lugar o dos trabalhadores da saúde e terceiro pessoas com comorbidades.',
    grafico: 'https://i.imgur.com/OzY3SMD.png'
},
{
    id:'2',
    analise: 'Na segunda dose da vacina os idosos continuam sendo a maioria dentre os prioritários.',
    grafico: 'https://i.imgur.com/kWmrVmr.png'
},
{
    id:'3',
    analise: 'Na terceira dose houve uma redução significativa do número de vacinas aplicadas nos outros grupos prioritários. Dessa vez os idosos representam o grupo prioritário em mais da metade no número de vacinas tomadas.',
    grafico: 'https://i.imgur.com/zMCHle4.png'
},
{
    id:'4',
    analise: 'Como na quarta dose houve uma redução significativa do número de vacinas aplicadas, então se foi divido em apenas dois, o de pessoas com comorbidades, no qual foi o grupo de prioritários que mais tomou vacina, e o restante em "outros".',
    grafico: 'https://i.imgur.com/xEmq8ui.png'
},
{
    id:'5',
    analise: 'Analisando o gráfico, entende-se que o grupo que mais tomou vacina foi o comum.',
    grafico: 'https://i.imgur.com/D4v9fwX.png'
}]



function Grupo(){
    return(
    <section>
        <h1 className='titulo'>Analise por grupos</h1>
        {grupos.map(grupos => {
                return (
                <div>
                <img src={grupos.grafico} alt={grupos.analise} className="imagem"/>
                <p className='texto textoNegrito'>{grupos.analise}</p>

                </div>
                )})}
    </section>
    )
}
export default Grupo

