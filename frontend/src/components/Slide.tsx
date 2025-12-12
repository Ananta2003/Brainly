import { type ReactElement } from "react"

export function Slide ({icon,text,onClick}:{
    icon:ReactElement;
    text:string;
    onClick:(type:string)=>void
    
}){
     const type = text.toLowerCase(); 


    return<div className="px-4 py-2 hover:bg-gray-200 rounded cursor-pointer">
            <div onClick={()=>onClick(type)}  className="flex items-center text-lg p-4">
                {icon}
                <h1 className="px-2">{text}</h1>
            </div>
        </div>
}