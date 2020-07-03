const inState = {  
    products : []
};

const reducer = (state= inState, action) => {

    let updated = {...state};
    console.log('reducer called');
    switch(action.type){
        case 'initialize': updated = action.payload.list;break;
        case 'add-product': {console.log(action.payload.value);updated.products.push(action.payload.value);break;}
    }
    return updated;
}

export default reducer;