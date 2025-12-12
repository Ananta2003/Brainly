import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";


interface cardItems {
    title: string,
    link: string,
    type: "youtube" | "twitter",
    id:string
}
export function Card({ type, link, title, id }: cardItems) {
    const tweet = link.replace("x.com", "twitter.com")

    async function deleteItem(habbitId: string){
        try {
            await axios.delete('/delete',{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                data:{habbitId}
            });
            toast.success("Content Removed");
            window.location.reload();
        } catch (err) {
            console.error("Failed to remove content",err);
        }
    }

    return (
        <div className="w-68 ">
            <Toaster/>
            <div className="bg-[#f4c749]  rounded-t-lg p-4 text-white flex items-center justify-between ">
                <h1>{title}</h1>
                <MdDeleteOutline onClick={()=>deleteItem(id)} className="cursor-pointer" size={30} />
            </div>
            <div className="bg-white rounded-b-lg mt-2 ">
                {type === "twitter" && <div className="w-1/2 h-auto flex items-center justify-center "><blockquote className="twitter-tweet">
                    <a href={tweet}></a>
                </blockquote></div>}

                {type === "youtube" &&
                    <iframe className="w-full h-auto"
                        src={link.replace("watch", "embed").replace("?v=", "/")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                }

            </div>
        </div>
    )
}