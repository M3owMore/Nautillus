import Header from "./Header";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";


const  SignIn = (props:any) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors]:any = useState(null)
    return (
        <>
            <Header scroll = {false} fixed={true} app={props.app}/>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-4xl font-semibold text-center text-main">
                    {props.app.langJson.words[props.app.lang].signIn}
                    </h1>

                    {
                        (errors === null) ? 
                        <></>:
                        <p className="text-xl font-semibold text-center text-main m-4 underline">{errors}</p>
                    
                    }

                    <form className="mt-6 flex flex-col justify-center items-center">
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-main"
                            >
                                {props.app.langJson.words[props.app.lang].email}
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md "
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-main"
                            >
                                {props.app.langJson.words[props.app.lang].password}
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"
                                onChange={(e) => {setPassword(e.target.value)}}

                            />
                        </div>
                        <p
                            className="text-md text-main hover:underline"
                        >
                            {props.app.langJson.words[props.app.lang].forgotPassword}
                        </p>
                        <div className="mt-6">
                            <button 
                                className="px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white rounded-md"
                                type = "button"
                                onClick={
                                async () => {
                                    const data = await axios.post(props.app.backendURL + "api/user/auth/login/", {email, password})
                                    if(data.data.error){
                                        setErrors(data.data.error)   
                                        return
                                    }
                                    props.app.cookies.set('refresh', data.data.tokens.refresh, { path: '/' })
                                    props.app.cookies.set('access', data.data.tokens.access, { path: '/' })
                                    
                                    window.location.href = "/user/home"
                                }}
                            >
                                    
                                {props.app.langJson.words[props.app.lang].signIn}
                            </button>
                        </div>
                    </form>
                    
                    <div className="flex flex-row items-center justify-center mt-4">
                        <p className="text-md font-light text-center text-main">
                            {props.app.langJson.words[props.app.lang].dontHaveAcc}{" "} 
                        </p>
                        <Link to="/signup"><p
                            className="ml-4 font-medium text-main hover:underline"
                        >
                            {props.app.langJson.words[props.app.lang].signUp}
                        </p></Link>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default SignIn;