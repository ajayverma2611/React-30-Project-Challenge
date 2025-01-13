
import {useEffect, useState} from "react";

export default function RandomColor(){

    const [typeColor,setTypeColor]=useState("hex");
    const [color,setcolor]=useState("#000000");

    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }
    function handleCreateRandomHexcolor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor ="#";

        for(let i=0;i<6;i++){
            hexColor+=hex[randomColorUtility(hex.length)];
        }


        console.log(hexColor);
        setcolor(hexColor);
    }

    function handleCreateRandomRgbcolor(){
        const r=randomColorUtility(256);
        const g=randomColorUtility(256);
        const b =randomColorUtility(256);

        setcolor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if(typeColor === "hex")handleCreateRandomHexcolor();
        else{
            handleCreateRandomRgbcolor();
        }
    }, [typeColor]);

    return <div style={{
        width :"100vw",
        height:"100vh",
        background: color

    }}>

        <button onClick={()=> setTypeColor("hex")}>Create Hex Color</button>
        <button onClick={()=>setTypeColor("rgb")}>Create RGB Color</button>
        <button onClick={typeColor === "hex" ? handleCreateRandomHexcolor : handleCreateRandomRgbcolor}>Create Random Colors</button>

        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"white",
            fontSize:"60px",
            marginTop:"60px",
            flexDirection:"column",
            gap:"20px"
        }}>
            <h3>{typeColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
            <h1>{color}</h1>
        </div>
    </div>


}