import { useNavigate } from "react-router-dom";
import { Background } from "./Background";


export function Homepage() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup');
    }
    const handleSignin = () => {
        navigate('/signin');
    }
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-600">
            <div className="w-[70%] h-[70%] bg-white  rounded-[20px]">
                <Background />
                <div className="p-4">
                    <h1 className="text-5xl font-medium mt-4">Your Brain’s Bookmark Dashboard...</h1>
                    <h2 className="text-2xl font-normal mt-2">Collect, organize, and revisit your favorite links with zero clutter.</h2>
                    <ul className="list-disc ml-8 mt-4 space-y-2 text-xl font-light">
                        <li>Save your favorite YouTube videos instantly</li>
                        <li>Bookmark tweets you want to revisit later</li>
                        <li>Organize everything with simple categories</li>
                    </ul>
                    <div className="mt-8 flex gap-2">
                        <button onClick={handleSignup} className="w-1/2  py-2 bg-[#f4c749] hover:bg-[#f2bc24] text-white rounded-md cursor-pointer">SIGN UP</button>

                        <button onClick={handleSignin} className="w-1/2 py-2 bg-[#f4c749]  hover:bg-[#f2bc24] text-white rounded-md cursor-pointer">SIGN IN</button>

                    </div>
                </div>
            </div>
        </div>

    )
}