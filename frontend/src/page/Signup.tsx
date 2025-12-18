import { useRef } from "react";
import { Input } from "../components/Input";
import { Background } from "./Background";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export function Signup() {

    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate() 

    async function signup() {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        const email = emailRef.current?.value

        try {
            await axios.post('/signup', {
                username:username, password:password, email:email
            }).then(() => {
                navigate("/signin")
            })
        } catch (err) {
            toast.error("Failed")
        }
    }


    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-600">
            <div><Toaster /></div>
            <div className="w-[50%] h-auto bg-white  rounded-[20px]">
                <Background />
                <div className="p-4">
                    <Input ref={usernameRef} placeholder="Username" type="text" label="Username:" />
                    <Input ref={passwordRef} placeholder="Password" type="password" label="Password:" />
                    <Input ref={emailRef} placeholder="Email" type="text" label="Email:" />
                    <button onClick={signup} className="w-full my-2 py-2 bg-[#f4c749] hover:bg-[#f2bc24] text-white rounded-md cursor-pointer">SIGN UP</button>
                    <div className="text-black flex items-center m-2 underline">
                        <Link to="/signin">Already have an Account? Signin</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}