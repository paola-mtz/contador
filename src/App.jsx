import { useState } from "react";


function App() {
  const [cuenta, setcuenta ] = useState(0);
  const [Paso, setPaso]= useState(1);

  const handleClick = () => {
    //console.log("clic");
    setcuenta(cuenta + 1);
  }
  const handleClick1 = () => {
    //console.log("clic");
    setcuenta(0);
    setPaso(1);
  }
  const handleClick2 = () => {
    //console.log("clic");
    setcuenta(cuenta - 1);
  }
  const handleClick3 = () => {
    //console.log("clic");
    setcuenta(cuenta - Paso);
  }
  const handleClick4 = () => {
    //console.log("clic");
    setcuenta(cuenta + Paso);
  }
  
  const handleInputChange = (e) => {
    if(isNaN(e.target.value)){
      return
    }

    setPaso(Number(e.target.value))
  }


  return (
    <div className="App">
      <h3>CONTADOR</h3>
      <br />
      <hr/>
      <h2 className="text-center">{cuenta}</h2>
      <br />
      <hr/>


      <div style={{display:"flex", justifyContent:"flex-end", marginRight:"10px"}}>
        <label htmlFor="">
      Paso
      <input id="paso" type="text" onChange={handleInputChange} style={{ marginLeft:"5px", width:"60px"}} />
    </label>
      </div>


      <div style={{display:"flex", justifyContent:"flex-end", marginRight:"10px"}}>
      <button type="button" className="btn btn-primary" style={{marginLeft:"5px"}}
      onClick={handleClick}>+1</button>
      <button type="button" className="btn btn-primary" style={{marginLeft:"5px"}}
      onClick={handleClick1}>Resetear</button>
      <button type="button" className="btn btn-primary" style={{marginLeft:"5px"}}
      onClick={handleClick2}>-1</button>
      </div>
      <div style={{display:"flex", justifyContent:"flex-end", marginRight:"10px", marginTop:"10px"}}>
      <button type="button" className="btn btn-primary" style={{marginLeft:"5px"}}
      onClick={handleClick4}>+</button>
      <button type="button" className="btn btn-primary" style={{marginLeft:"5px"}}
      onClick={handleClick3}>-</button>
      </div>
      
      
    </div>
  );
}

export default App;
