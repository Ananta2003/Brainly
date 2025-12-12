
interface innput{
    placeholder:string,
    ref?:any,
    type?:string,
    label?:string

}

export function Input({placeholder , ref, type, label}:innput){
    
    return(
        <div>
            <label htmlFor="">{label}</label>
            <input className="w-full p-2 border-1 boorder-gray-200 rounded-md " ref={ref} type={`${type}`}  placeholder={placeholder}/>
        </div>
    )
}