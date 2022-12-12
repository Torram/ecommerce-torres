import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({item}) => {

    const handleOnAdd = (quantity) => {
        alert("Se agregaron " + quantity + " elementos al carrito.");
    }

    return (
    <div className="card m-1" style={{width:"18rem"}}>
        <img src={item.pictureUrl} className="card-img-top p-2" alt={item.title}/>
        <div className="card-body mx-auto">
            <br/>
            <h5 className="card-title">{item.title}</h5>
            <p>{item.price}</p>
            <Link to={"/item/"+item.id} className="btn btn-primary">Detalles</Link>
            <ItemCount initial={0} stock = {10} onAdd={handleOnAdd}/>
        </div>
    </div>)
}
export default Item;