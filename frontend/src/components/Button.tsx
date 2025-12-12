

interface ButtonStyle{
    variant:"primary"|"secondary",
    onClick:()=>void,
    text:string
}

const variantStyle ={
    "primary": "bg-[#f4c749] text-[#ffff]",
    "secondary": "bg-white text-black border-1 border-black"
} 

export function Button({onClick, text,  variant}:ButtonStyle) {

    return (
        <div className="flex items-center justify-center w-full">
            <button onClick={() => onClick()} className={`w-full my-2 py-2 px-4  rounded-md cursor-pointer  ${variantStyle[variant]}`}>{text}</button>
        </div>
    )
}