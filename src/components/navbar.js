import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar(){
	return(
		<Navbar collapseOnSelect expand="lg" sticky="top" var="light" bg="light" className="shadow-sm">
			<Container>
					<LinkContainer to="/">
						<Navbar.Brand>It's me, Alifia!</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
						</Nav>
						<Nav>
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/about">
								<Nav.Link>About Me</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/reason">
								<Nav.Link>My Reason</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/projects">
								<Nav.Link>Past Projects</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;