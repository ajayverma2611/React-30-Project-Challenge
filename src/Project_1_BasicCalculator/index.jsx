import { useState } from "react";
import './style.css';


export default function Calculator(){
    const [input1,setInput1]=useState('');
    const [input2,setInput2]=useState('');
    const [result,setResult]=useState(0);

    const handleAddition=()=>{
        if(input1 === '' || input2===''){
            setResult('Fill both inputs !!')
        }else{
            setResult(Number(input1)+Number(input2));
        }
    };

    const handleSubtraction=()=>{
        if(input1 === '' || input2===''){
            setResult('Fill both inputs !!')
        }else{
            setResult(Number(input1)-Number(input2));
        }
    };

    const handleMultiplication=()=>{
        if(input1 === '' || input2===''){
            setResult('Fill both inputs !!')
        }else{
            setResult(Number(input1)*Number(input2));
        }
    };


    const handleDivision=()=>{
        if(input1 === '' || input2===''){
            setResult('Fill both inputs !!')
        }
        else if(Number(input2)===0){
            setResult('Error Division by zero');
        }else{
            setResult(Number(input1)/Number(input2));
        }
        
    };

    return<div className="Container">
        <h1>Basic Calculator</h1>
        <input className="inputs"
        type="number"
        placeholder="Enter first number"
        value={input1}
        onChange={(e)=>setInput1(e.target.value)}
        />

        
        <input className="inputs"
        type="number"
        placeholder="Enter Second number"
        value={input2}
        onChange={(e)=>setInput2(e.target.value)}
        />

        <div className="operations">
            <button className="button" onClick={handleAddition}>Add</button>
            <button className="button" onClick={handleSubtraction}>Sub</button>
            <button className="button" onClick={handleMultiplication}>Mul</button>
            <button className="button" onClick={handleDivision}>Div</button>

        </div>

        <h1 className="Result">Result : {result}</h1>

    </div>
}

