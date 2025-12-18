import axios from "axios";
import { useEffect, useState } from "react";


export function useContent(){

    const [content, setcontent]= useState<any[]>([])

    useEffect(()=>{
        const token = localStorage.getItem('token')

        
        axios.get('/bulk', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            setcontent(response.data.data || [])
        })
    },[])

    return content
}