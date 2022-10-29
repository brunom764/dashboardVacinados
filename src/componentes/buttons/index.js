import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './botoes.css'


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
  alert(clicadoColunas)
  alert(clicadoVacinas)
  if( clicadoColunas === 'geral' & clicadoVacinas ==='geral'){
    alert('oi')
  }
}

function ButtonsOne() {
  return (
    <>
      <div className='OrganizaBotoes'>
          <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2 botoes" aria-label="First group">
              <Button onClick={geralTrue}>Geral</Button> <Button onClick={sexoTrue}>Sexo</Button> <Button onClick={fabricanteTrue}>Fabricante de Vacina</Button>{' '}
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
      <img className='imagem' alt='grafico' src='https://www.alura.com.br/artigos/assets/uploads/2018/05/image6-1.png'/>  
    </>
  );
}

export default ButtonsOne;