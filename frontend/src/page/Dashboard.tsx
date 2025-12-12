import { Card } from "../components/Card";
import { ContentAdd } from "../components/ContentAdd";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { useState } from "react"



export function Dashboard() {

    const content = useContent();
    const [addContent, setaddContent] = useState(false)

    const [type, settype] = useState("")

    function addEvent(type: string) {
        console.log(type)
        if (type === "youtube") {
            return settype("youtube")
        } else if(type === "twitter") {
            return settype("twitter")
        } else{
            return settype("all")
        }
    }

    const youtubeContents =
        type === "youtube"
            ? content.filter((item) => item.type === "youtube")
            : content;

    const twitterContents =
        type === "twitter"
            ? content.filter((item) => item.type === "twitter")
            : content;

    return (
        <div className="w-full ">
            <ContentAdd open={addContent} onClose={() => { setaddContent(false) }} />
            <Navbar onClick={() => setaddContent(!addContent)} />

            <div className="grid grid-cols-[250px_1fr] w-full h-[85vh] ">
                <div className="">
                    <Sidebar onClick={addEvent} />
                </div>
                <div className="bg-gray-100 ">
                    <div className="min-h-48 h-auto m-2 flex flex-wrap gap-4 break-inside-avoid">
                        {
                    type === "youtube" && youtubeContents.map(({ id, title, type, link }) => (
                        <Card key={id} type={type} title={title} link={link} id={id} />
                    ))||
                    type === "twitter" && twitterContents.map(({ id, title, type, link }) => (
                        <Card key={id} type={type} title={title} link={link} id={id} />
                    ))
                    || content.map(({ title, type, link,id}) =>
                        <Card type={type} title={title} link={link} key={id} id={id} />)

                }
                    </div>

                </div>
            </div>
        </div>
    )
}