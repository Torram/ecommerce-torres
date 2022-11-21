import { Button as BSButton } from "react-bootstrap";
const Button = (props) => {
    return <BSButton variant = "primary" size="sm" >{props.children}</BSButton>
}

export default Button;