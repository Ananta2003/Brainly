import { IoIosArrowBack } from "react-icons/io";
import { MdCancel   } from "react-icons/md";


interface onClose{
    onClose:()=>void
}

export function ContentBackground({onClose}:onClose) {
    return (
        <div>
            <div className="h-18 bg-[#f4c749] rounded-t-[20px] flex items-center justify-between p-8 border-b-2 border-black">
                <IoIosArrowBack size={50} className="text-white" />
                <h1 className="text-white text-3xl ">Make a Note</h1>
                <MdCancel onClick={onClose} size={40} className="text-white cursor-pointer" />
            </div>
        </div>
            )
}