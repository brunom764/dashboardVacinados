import {Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" style={{ borderBottom:'solid 2.5px #4682B4'}}>
      <Container>
        <Navbar.Brand href="#home" className='titulo destaquePrimeiraLetra' style={{margin:'0rem 35rem 0rem 1rem'}}>Vacinados Recife</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://github.com/guilopesrbc/projetoP1">Github</Nav.Link>
            <NavDropdown title="Analise" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/guilopesrbc/projetoP1/blob/main/analise_sexo.ipynb">Analise por sexo</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/guilopesrbc/projetoP1/blob/main/analise_vacina.ipynb">
                Analise por fabricante de vacina
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/guilopesrbc/projetoP1/blob/main/analise_vacina.ipynb">
                Analise por grupos prioritários
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/guilopesrbc/projetoP1/blob/main/analise_vacina.ipynb">
                Analise por local de vacinação
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Analise geral
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default Header;