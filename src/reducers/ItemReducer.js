// get item from userstorage if available otherwise empty array
const data = {
    itemList : JSON.parse(localStorage.getItem("items"))??[]
}

const itemReducer = (state = data, action)=>{
    switch (action.type){
        case "ADDITEM": 
            const { itemToAdd: setItemToAdd }= action.payload;
            // add itemToAdd to existing itemList
            const updatedState = {itemList:[...state.itemList, setItemToAdd]}
            // set updated itemlist to localstorage
            localStorage.setItem("items", JSON.stringify(updatedState.itemList));
            return updatedState
        case "REMOVEITEM": 
            const { i:idx }=action.payload; 
            // filter existing itemlist according to index passed when user click delete button
            const newItemlist = state.itemList.filter((_, index) => index !== idx);
            // set updated itemlist to localstorage
            localStorage.setItem("items", JSON.stringify(newItemlist));
            return {
                ...state, 
                itemList : newItemlist
            }
        default: 
            return state;
        }  
    }

export default itemReducer;