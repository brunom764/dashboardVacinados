import {Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" className='margin-bottom borda' expand="lg">
      <Container>
        <Navbar.Brand href="/" className='titulo destaquePrimeiraLetra' style={{margin:'0rem 80vh 0rem 1rem'}}>Vacinados Recife</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/sobre">Sobre</Nav.Link>
          <Nav.Link href="/galeria">Galeria</Nav.Link>
            <NavDropdown title="Análise" id="basic-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://github.com/guilopesrbc/projetoP1/blob/main/analise_sexo.ipynb">Por sexo declarado</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://github.com/guilopesrbc/projetoP1/blob/main/analise_vacina.ipynb">
              Por fabricante de vacina
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://github.com/guilopesrbc/projetoP1/blob/main/analise_grupos.ipynb">
              Por grupos prioritários
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://github.com/guilopesrbc/projetoP1/blob/main/analise_locais.ipynb">
              Por local de vacinação
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  target="_blank" href="https://github.com/guilopesrbc/projetoP1/blob/main/analise_doses.ipynb">
              Geral
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default Header;
