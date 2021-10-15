// get item
export const addItem = (itemToAdd) =>{
    return{
        type: "ADDITEM",
        payload: {itemToAdd}
    }
}

// remove item
export const removeItem = (i) =>{
    return{
        type: "REMOVEITEM",
        payload: {i}
    }
}