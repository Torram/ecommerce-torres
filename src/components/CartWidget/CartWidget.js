import { Button } from "react-bootstrap";

const CartWidget = () => {
    return (
        <Button variant="light" className="me-2">
            <img src="./images/shopping-cart.svg" width={30} alt=""/>
            0
        </Button>
    )
}

export default CartWidget;