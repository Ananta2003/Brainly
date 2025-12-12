import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Slide } from "./Slide";


interface sort{
    onClick:(type:string)=>void
}
export const Sidebar = ({onClick}:sort) => {



    return <div className=" bg-white  ">
        <div className="px-8 py-8">
            <Slide onClick={onClick}  icon={<IoDocumentTextOutline />} text="All Marks" />
            <Slide onClick={()=>onClick("youtube")} icon={<FaYoutube />} text="Youtube" />
            <Slide onClick={()=>onClick("twitter")}  icon={<FaXTwitter />} text="Twitter" />


        </div>


    </div>
}
