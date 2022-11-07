import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './main.css'

let grafico = 'https://i.imgur.com/u51B4ii.png'

let clicadoColunas = ''
let clicadoVacinas = ''

function geralTrue(){
  clicadoColunas = 'geral'
}

function sexoTrue(){
  clicadoColunas = 'sexo'
}

function fabricanteTrue(){
  clicadoColunas = 'fabricante'
}

function gruposTrue(){
  clicadoColunas = 'grupos'
}

function localTrue(){
  clicadoColunas = 'local'
}

function geralDoseTrue(){
  clicadoVacinas = 'geral'
}

function umaDoseTrue(){
  clicadoVacinas = 'uma'
}

function duasDoseTrue(){
  clicadoVacinas = 'duas'
}

function tresDoseTrue(){
  clicadoVacinas = 'tres'
}

function quatroDoseTrue(){
  clicadoVacinas = 'quatro'
}

function mostrarGrafico(){
  const imagem = document.querySelector('#imagem')
  if( clicadoColunas === 'geral' | clicadoColunas === ''){
    grafico = 'https://i.imgur.com/u51B4ii.png'
  }
  if( clicadoColunas === 'fabricante' & (clicadoVacinas ==='geral' | clicadoVacinas === '')){
    grafico = 'https://i.imgur.com/6C0Ko3T.png'
  }
  if( clicadoColunas === 'fabricante' & clicadoVacinas ==='uma'){
    grafico = 'https://i.imgur.com/02jBIFI.png'
  }
  if( clicadoColunas === 'fabricante' & clicadoVacinas ==='duas'){
    grafico = 'https://i.imgur.com/TUz5ZfG.png'
  }
  if( clicadoColunas === 'fabricante' & clicadoVacinas ==='tres'){
    grafico = 'https://i.imgur.com/XX4ifn4.png'
  }
  if( clicadoColunas === 'fabricante' & clicadoVacinas ==='quatro'){
    grafico = 'https://i.imgur.com/KsWiF16.png'
  }
  if( clicadoColunas === 'sexo' & (clicadoVacinas ==='geral' | clicadoVacinas === '')){
    grafico = 'https://i.imgur.com/Ge8qKcj.png'
  }
  if( clicadoColunas === 'sexo' & clicadoVacinas ==='uma'){
    grafico = 'https://i.imgur.com/C97Dqxs.png'
  }
  if( clicadoColunas === 'sexo' & clicadoVacinas ==='duas'){
    grafico = 'https://i.imgur.com/nH6Hiqg.png'
  }
  if( clicadoColunas === 'sexo' & clicadoVacinas ==='tres'){
    grafico = 'https://i.imgur.com/RTzZ9mZ.png'
  }
  if( clicadoColunas === 'sexo' & clicadoVacinas ==='quatro'){
    grafico = 'https://i.imgur.com/xLPZ8XY.png'
  }
  if( clicadoColunas === 'grupos' & clicadoVacinas === ''){
    grafico = 'https://i.imgur.com/D4v9fwX.png'
  }
  if( clicadoColunas === 'grupos' & clicadoVacinas ==='geral'){
    grafico = 'https://i.imgur.com/5aC42L2.png'
  }
  if( clicadoColunas === 'grupos' & clicadoVacinas ==='uma'){
    grafico = 'https://i.imgur.com/OzY3SMD.png'
  }
  if( clicadoColunas === 'grupos' & clicadoVacinas ==='duas'){
    grafico = 'https://i.imgur.com/kWmrVmr.png'
  }
  if( clicadoColunas === 'grupos' & clicadoVacinas ==='tres'){
    grafico = 'https://i.imgur.com/zMCHle4.png'
  }
  if( clicadoColunas === 'grupos' & clicadoVacinas ==='quatro'){
    grafico = 'https://i.imgur.com/xEmq8ui.png'
  }
  if( clicadoColunas === 'local' & (clicadoVacinas ==='geral' | clicadoVacinas === '')){
    grafico = 'https://i.imgur.com/jr85drg.png'
  }
  if( clicadoColunas === 'local' & clicadoVacinas ==='uma'){
    grafico = 'https://i.imgur.com/IjpsEml.png'
  }
  if( clicadoColunas === 'local' & clicadoVacinas ==='duas'){
    grafico = 'https://i.imgur.com/pI2CuDd.png'
  }
  if( clicadoColunas === 'local' & clicadoVacinas ==='tres'){
    grafico = 'https://i.imgur.com/Wr5Ldqn.png'
  }
  if( clicadoColunas === 'local' & clicadoVacinas ==='quatro'){
    grafico = 'https://i.imgur.com/PTODi7Q.png'
  }
  imagem.src = grafico
  clicadoColunas = ''
  clicadoVacinas = ''
}

function Main() {
  return (
    <>
      <div className='OrganizaBotoes'>
          <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2 botoes" aria-label="First group">
              <Button onClick={geralTrue} className='botao'>Geral</Button> <Button onClick={sexoTrue} className='botao'>Gênero</Button> <Button onClick={fabricanteTrue} className='botao'>Fabricante de Vacina</Button>{' '}
              <Button onClick={gruposTrue} className='botao'>Grupos prioritários</Button> <Button onClick={localTrue} className='botao'>Local de vacinação</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2 botoes" aria-label="Second group">
            <Button onClick={geralDoseTrue}>Geral</Button> <Button onClick={umaDoseTrue}>1° dose</Button> <Button onClick={duasDoseTrue}>2° dose</Button> <Button onClick={tresDoseTrue}>3°dose</Button> <Button onClick={quatroDoseTrue} className='botao'>4°dose</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Third group" className="botoes">
              <Button className="botaoEspecial" onClick={mostrarGrafico}>Mostrar gráfico</Button>
          </ButtonGroup>
          </ButtonToolbar>
      </div>
      <img className='imagem' id='imagem' alt='grafico' src={grafico}/>  
    </>
  );
}

export default Main;
