import ItemList from "../ItemList/ItemList";
import { getItems } from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const {categoryid} = useParams();
    useEffect(() => {
        getItems(categoryid)
            .then((response)=>setItems(response))
            .catch((error => {console.log(error)}));
    }, [categoryid])
    
    return (
        <>
            <h1>{greeting}</h1>
            <div className="d-flex">
                <ItemList items = {items}/>
            </div>
            
        </>
    )
}
export default ItemListContainer;