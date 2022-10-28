import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './botoes.css'

function ButtonsOne() {
  return (
    <div className='OrganizaBotoes'>
        <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2 botoes" aria-label="First group">
            <Button>Grupos prioritários</Button> <Button>Sexo</Button> <Button>Fabricante de Vacina</Button>{' '}
            <Button>Geral</Button> <Button>Local de vacinação</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2 botoes" aria-label="Second group">
            <Button>1° dose</Button> <Button>2° dose</Button> <Button>3°dose</Button> <Button>4°dose</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group" className="botoes">
            <Button className="botaoEspecial">Mostrar gráfico</Button>
        </ButtonGroup>
        </ButtonToolbar>
    </div>
  );
}

export default ButtonsOne;