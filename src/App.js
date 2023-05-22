/* eslint no-eval: 0 */

import React,{useState} from "react";
import './App.css';
function App() {

  const [inp,setinp] = useState('');

  const changeinp = (s) => {
    setinp(inp+s);
  };

  const clr = () =>{
    setinp('');
  };
  
  const eql = () => {
    if(inp!==""){
    setinp(eval(inp));}
  };

  const red = () => {
    setinp(inp.substring(0, inp.length-1));
  };

  const val = (event) => {
    const inputValue = event.target.value;
    const filteredValue = inputValue.replace(/[^0-9+\-*/.()]/g, '');
    setinp(filteredValue)
  };

  const keyenter = (event) =>{
    if(event.code==='Enter' || event.code==='='){
      eql();
    }
    if(event.code === 'C' || event.key==='c'){
      clr()
    }
  };


  return (
    <div className="main">
      <h1>Calculator</h1>
      <div><input type="text" placeholder='0' onChange={(e) => val(e)} value={inp} onKeyDown={(e) => keyenter(e)}/><br/><br/></div>
      <button className='clr' onClick={() => clr()}>C</button>
        <button onClick={() => red()}>⌫</button>
        <button onClick={() => eql()}>=</button>
        <button onClick={() => changeinp('/')}>÷</button>
        <br/>
        <br/>
        <button onClick={() => changeinp('7')}>7</button>
        <button onClick={() => changeinp('8')}>8</button>
        <button onClick={() => changeinp('9')}>9</button>
        <button onClick={() => changeinp('*')}>x</button>
        <br/>
        <br/>
        <button onClick={() => changeinp('4')}>4</button>
        <button onClick={() => changeinp('5')}>5</button>
        <button onClick={() => changeinp('6')}>6</button>
        <button onClick={() => changeinp('+')}>+</button>
        <br/>
        <br/>
        <button onClick={() => changeinp('1')}>1</button>
        <button onClick={() => changeinp('2')}>2</button>
        <button onClick={() => changeinp('3')}>3</button>
        <button onClick={() => changeinp('4')}>-</button>
        <br/>
        <br/>
        <button onClick={() => changeinp('(')}>(</button>
        <button onClick={() => changeinp('0')}>0</button>
        <button onClick={() => changeinp(')')}>)</button>
        <button onClick={() => changeinp('.')}>.</button>
    </div>
  );
}
export default App;
