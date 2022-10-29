import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './botoes.css'

let grafico = 'https://i.imgur.com/LlXb5Ck.png'

let clicadoColunas = ''
let clicadoVacinas = ''

function geralTrue(){
  clicadoColunas = 'geral'
  return clicadoColunas
}

function sexoTrue(){
  clicadoColunas = 'sexo'
  return clicadoColunas
}

function fabricanteTrue(){
  clicadoColunas = 'fabricante'
  return clicadoColunas
}

function gruposTrue(){
  clicadoColunas = 'grupos'
  return clicadoColunas
}

function localTrue(){
  clicadoColunas = 'local'
  return clicadoColunas
}

function geralDoseTrue(){
  clicadoVacinas = 'geral'
  return clicadoVacinas
}

function umaDoseTrue(){
  clicadoVacinas = 'uma'
  return clicadoVacinas
}

function duasDoseTrue(){
  clicadoVacinas = 'duas'
  return clicadoVacinas
}

function tresDoseTrue(){
  clicadoVacinas = 'tres'
  return clicadoVacinas
}

function quatroDoseTrue(){
  clicadoVacinas = 'quatro'
  return clicadoVacinas
}

function mostrarGrafico(){
  const imagem = document.querySelector('#imagem')
  if( clicadoColunas === 'geral' & (clicadoVacinas ==='geral'| clicadoVacinas ==='uma' | clicadoVacinas ==='duas' | clicadoVacinas ==='tres' | clicadoVacinas ==='quatro')){
    grafico = 'https://i.imgur.com/LlXb5Ck.png'
  }
  if( clicadoColunas === 'fabricante' & clicadoVacinas ==='geral'){
    grafico = 'https://i.imgur.com/6C0Ko3T.png'
  }
  imagem.src = grafico
}

function ButtonsOne() {
  return (
    <>
      <div className='OrganizaBotoes'>
          <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2 botoes" aria-label="First group">
              <Button onClick={geralTrue}>Geral</Button> <Button onClick={sexoTrue}>Gênero</Button> <Button onClick={fabricanteTrue}>Fabricante de Vacina</Button>{' '}
              <Button onClick={gruposTrue}>Grupos prioritários</Button> <Button onClick={localTrue}>Local de vacinação</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2 botoes" aria-label="Second group">
            <Button onClick={geralDoseTrue}>Geral</Button> <Button onClick={umaDoseTrue}>1° dose</Button> <Button onClick={duasDoseTrue}>2° dose</Button> <Button onClick={tresDoseTrue}>3°dose</Button> <Button onClick={quatroDoseTrue}>4°dose</Button>
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

export default ButtonsOne;