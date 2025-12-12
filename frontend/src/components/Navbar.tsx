import { RiBrain2Line } from "react-icons/ri";

interface content{
    onClick:()=>void
}
export function Navbar({onClick}:content){
    
    return(
        <div className="h-[5%] w-full bg-[#f2bc24] flex items-center justify-between p-4">
                <div className="flex gap-2 items-center">
                    <RiBrain2Line className="text-white" size={50} />
                    <h1 className="text-white font-medium text-2xl">Brainly..</h1>
                </div>
                <button onClick={onClick} className="w-1/3 my-2 py-2 bg-white  text-[#f2bc24] rounded-md cursor-pointer font-medium text-xl hover:bg-gray-100">Create Content</button>
            </div>
    )
}