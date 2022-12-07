import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        getItemById(id)
        .then((response)=>setItem(response))
        .catch((error)=>{console.log(error)});
    },[id])
    
    return (
        <div className="container w-100">
            <ItemDetail item={item} />
        </div>
        
    )
}

export default ItemDetailContainer;