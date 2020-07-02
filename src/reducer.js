
const reducer = (state=[], action) => {
    switch(action.type){
        case 'initialize': return (state = action.payload.value);

        default: return state;
    }
}

export default reducer;