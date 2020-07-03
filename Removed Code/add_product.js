unction remove_form(){
    ReactDOM.render(<div></div>,document.querySelector("#add-prod"));
  }
  
  function addProdInStore(nam, pric, desc, ur){
  
    store.dispatch({
      type: "add-product",
      payload: {
        value:  {id:123,name:nam,price:pric,description:desc,url:ur}
      }
    });
    
  }
  
  function new_prod_form(){
    let nam,pric,desc,ur;
    return(<div>
      <h3>Add a new mobile -</h3>
      <form>
        <label>
          Name : 
          <input type="text" name="name" value={nam}/>
        </label>
        <label>
          Price : 
          <input type="text" name="price" value={pric}/>
        </label>
        <label>
          Description : 
          <input type="text" name="description" value={desc}/>
        </label>
        <label>
          Image URL : 
          <input type="text" name="url" value={ur}/>
      </label>
      <input type="submit" value="Submit" onClick={() => store.dispatch({
      type: "add-product",
      payload: {
        value:  {id:9,name:nam,price:pric,description:desc,url:ur}
      },
    })}/>
      </form>
      <button onClick={remove_form}>ok</button>
    </div>);
  }
  
  function add_new_prod(){
    ReactDOM.render(new_prod_form(),document.querySelector("#add-prod"));
    console.log(store.getState());
    //<button onClick={remove_form}>Submit</button>
  }

  <button onClick={add_new_prod}>Add Product</button>
    <div id='add-prod'></div>