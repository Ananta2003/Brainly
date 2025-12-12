import axios from "axios";
import { useEffect, useState } from "react";

const token = localStorage.getItem('token')

export function useContent(){

    const [content, setcontent]= useState<any[]>([])

    useEffect(()=>{
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