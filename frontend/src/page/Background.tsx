import { IoIosArrowBack } from "react-icons/io";
import { IoArrowUndoCircleSharp } from "react-icons/io5";
import { IoArrowRedoCircle } from "react-icons/io5";
import { TbDeviceMobileShare } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export function Background() {
    return (
        <div>
            <div className="h-18 bg-[#f4c749] rounded-t-[20px] flex items-center justify-between p-8 border-b-2 border-black">
                <IoIosArrowBack size={50} className="text-white" />
                <h1 className="text-white text-xl">ALL Brain Notes </h1>
                <div className="flex items-center gap-4">
                    <IoArrowUndoCircleSharp size={40} className="text-white" />
                    <IoArrowRedoCircle size={40} className="text-white" />
                </div>
                <TbDeviceMobileShare size={40} className="text-white" />
                <HiOutlineDotsHorizontal size={40} className="text-white" />
                <h1 className="text-white text-xl">DONE</h1>
            </div>
        </div>
            )
}