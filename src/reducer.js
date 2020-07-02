
const reducer = (state=[], action) => {
    switch(action.type){
        case 'initialize': return (state = action.payload.list);

        // case 'add-to-cart': return (

        //     state = [...state,state.map((prod)=> prod.id === action.payload.value)]
        // );

        default: return state;
    }
}

export default reducer;