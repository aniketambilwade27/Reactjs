import { useLayoutEffect } from "react";

function List({items})
{
    
    const item_list=items;

    const list_items= item_list.map(item=> <li> {item.name}::{item.calories}</li>)


    return (<>
    <ul> {list_items} </ul>
    </>);
}

export default List