import { Navbar, Nav, Container} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight:'100px'}}
                >
                <Navbar.Brand href = "#home">Torres E-Shop</Navbar.Brand>
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#celulares">Celulares</Nav.Link>
                <Nav.Link href="#tablets">Tablets</Nav.Link>
                <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                </Nav>
            </Container>
            <CartWidget/>
        </Navbar>
    )
}
export default NavBar;