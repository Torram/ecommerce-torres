import { Navbar, Nav, Container} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight:'100px'}}
                >
                <Link className="navbar-brand" to={'/'}>Torres E-Shop</Link>
                <Link className="nav-link" to={'/'}>Inicio</Link>
                <Link className="nav-link" to={'/category/celulares'}>Celulares</Link>
                <Link className="nav-link" to={'/category/tablets'}>Tablets</Link>
                <Link className="nav-link" to={'/category/accesorios'}>Accesorios</Link>
                </Nav>
            </Container>
            <CartWidget/>
        </Navbar>
    )
}
export default NavBar;