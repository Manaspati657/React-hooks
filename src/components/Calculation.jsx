import { useMemo } from "react";
import { useState } from "react"

const Calculation = () => {
  const [blocks, setBlocks] = useState([3,63,12]);
  const [calc, setCalc] = useState(0);
//   const result =  heavyCalculation(calc); 
// it will slow down the execution because it re-render every render of the component
  const result = useMemo(()=>  heavyCalculation(calc),[calc]);
  
  
  const addNewBlock = () =>{
    setBlocks((prev)=>{
        return [
            ...prev,
            Math.floor(Math.random() * 100)
        ]
    })
  }

  const calculate = () =>{
    setCalc(Math.floor(Math.random() * 100));
  }

    return (
    <>
    <h2>Blocks</h2>
    <p>
    {
        blocks.map((item,index)=>(
            <span key={index}>{item}&nbsp; &nbsp;</span> 
        ))
     }
    </p>
     
     <button onClick={addNewBlock}>Add Block</button>
     <hr />
     <h2>Results :{result}</h2>
     <button onClick={calculate}>Calculate</button>
    </>
  )
}


const heavyCalculation = (number) =>{
    for (let index = 0; index < 1000000000; index++) {
        number+=1;
    }
    return number;
}

export default Calculation