import { useRef, useState } from "react"
import { ContentBackground } from "./ContentBackground"
import { Input } from "./Input"
import { Button } from "./Button"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

interface content {
    open: boolean,
    onClose: () => void
}

export function ContentAdd({ open, onClose }: content) {


    enum ContentType {
        Youtube = "youtube",
        Twitter = "twitter"
    }

    const [type, settype] = useState(ContentType.Youtube)
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)

    async function AddContent() {

        const title = titleRef.current?.value
        const link = linkRef.current?.value

        if (!title || !link) {
            toast.error("Please fill all fields")
            return
        }

        try {
            await axios.post('/crate', {
                link,
                title,
                type
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            toast.success("Content Added ")
            onClose();
            window.location.reload();
        } catch (err: any) {
            const errorMsg = err.response?.data?.message || "Something went wrong"
            toast.error(errorMsg)
        }
    }

    return (
        <div>
            <Toaster />
            {open &&
                <div>
                    <div className="w-full h-screen bg-gray-200 opacity-50 fixed top-0 left-0"></div>
                    <div className="w-screen h-screen fixed left-0 right-0 opacity-100 flex justify-center items-center">
                        <div className="w-1/3 h-1/2">
                            <ContentBackground onClose={onClose} />
                            <div className="bg-white h-full rounded-b-[20px]">
                                <div className="p-2">
                                    <Input ref={titleRef} type="text" placeholder="Title " label="Title:" />
                                </div>
                                <div className="p-2">
                                    <Input ref={linkRef} type="text" placeholder="Link " label="Link:" />
                                </div>
                                <div className="flex gap-2 p-2">

                                    <Button text="Youtube" onClick={() => settype(ContentType.Youtube)} variant={type === ContentType.Youtube ? "primary" : "secondary"} />

                                    <Button text="Twitter" onClick={() => settype(ContentType.Twitter)} variant={type === ContentType.Twitter ? "primary" : "secondary"} />

                                </div>
                                <div className="p-2">
                                    <button onClick={AddContent} className="w-full p-2 bg-[#f4c749] hover:bg-[#f2bc24] text-white rounded-md cursor-pointer">Add Note</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>


    )
}