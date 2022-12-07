import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({item}) => {

    const handleOnAdd = (quantity) => {
        alert("Se agregaron " + quantity + " elementos al carrito.");
    }
    return(
        <div className="w-100 p-5"> 
            <img src={item.pictureUrl} className="rounded float-end h-25 w-50 p-5" alt="..."/>
            <div className="card">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="float-start">{item.description}</p>
                    <br/>
                    <div className="mx-auto">
                        <h4 className="">{item.price}</h4>
                        <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/>
                    </div>
                    
            </div>
        </div>
    )
}

export default ItemDetail