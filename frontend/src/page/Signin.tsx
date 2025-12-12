import { useRef } from "react";
import { Input } from "../components/Input";
import { Background } from "./Background";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


export function Signin() {

    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate() 

    async function signin() {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        try {
            await axios.post('/signin', {
                username:username, password:password
            }).then((res) => {
                const jwt = res.data.token;
                localStorage.setItem("token", jwt);
                navigate("/dashboard")
            })
        } catch (err) {
            toast.error("Failed")
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-600">
            <div><Toaster/></div>
            <div className="w-[50%] h-auto bg-white  rounded-[20px]">
                <Background />
                <div className="p-4">
                    <Input ref={usernameRef} placeholder="Username" type="text" label="Username:"/>
                    <Input ref={passwordRef} placeholder="Password" type="password" label="Password:"/>
                    <button onClick={signin} className="w-full my-2 py-2 bg-[#f4c749] hover:bg-[#f2bc24] text-white rounded-md cursor-pointer">SIGN IN</button>
                    <div className="text-black flex items-center m-2 underline">
                        <a href="/signup">Didn't have an Account? SignUp</a>
                    </div>
                </div>
            </div>
        </div>

    )
}