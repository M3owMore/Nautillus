import axios from 'axios';
import { useState, useEffect } from "react";

const SendEmail = (props:any) => {
    const [email, setEmail] = useState("")
    const [errors, setErrors]:any = useState(null)

    const onSendLinkToEmail = () => {
        const res:any = axios.post(props.app.backendURL + "URL", {email: email})
        if(res.data.token){
            window.location.href = `/forgetPass?token=${res.data.token}`
        }
    }

    useEffect(() => {
        const keyDownHandler = (event:any) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            onSendLinkToEmail()
          }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);   

    return (
        <>
            <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center  overflow-hidden">
                <div className="w-full max-w-sm p-4 flex flex-col  gap-6">
                    <h1 className="text-4xl font-alkSanet text-center text-secondary">
                        Forgot Password?
                    </h1>

                    {
                        (errors === null) ? 
                        <></>:
                        <p className="text-md font-bpgESM text-center text-red-500 m-4 underline">{errors}</p>
                    
                    }

                    <form className="flex flex-col justify-center items-center w-full">
                        <div className="mb-2 w-full">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-main"
                            >
                                {props.app.langJson.words[props.app.lang].email}
                            </label>
                            <input
                                type="email"
                                className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>
 
                        <div className="mt-6">
                            <button 
                                className="font-bpgESM px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md"
                                type = "button"
                                onClick={onSendLinkToEmail}
                            >
                                    
                                Send Link To Email
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

const ResetPassword = (props:any) => {
    const [password, setPassword] = useState("")
    const [re_password, setRe_password] = useState("")

    const [errors, setErrors]:any = useState(null)

    const onResetPassword = () => {
        const res:any = axios.post(props.app.backendURL + "URL", {password: password, re_password: re_password})
    }

    useEffect(() => {
        const keyDownHandler = (event:any) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            onResetPassword()
          }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);  
    return (
        <>
            <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center  overflow-hidden">
                <div className="w-full max-w-sm p-4 flex flex-col  gap-6">
                    <h1 className="text-4xl font-alkSanet text-center text-secondary">
                        Reset Password
                    </h1>

                    {
                        (errors === null) ? 
                        <></>:
                        <p className="text-md font-bpgESM text-center text-red-500 m-4 underline">{errors}</p>
                    
                    }

                    <form className="flex flex-col justify-center items-center w-full">
                                <div className="mb-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-semibold text-main"
                                    >
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                        onChange={(e) => {setPassword(e.target.value)}}
                                    
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="re_password"
                                        className="block text-sm font-semibold text-main"
                                    >
                                        Repeat New Password
                                    </label>
                                    <input
                                        type="password"
                                        name="re_password"
                                        className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                        onChange={(e) => {setRe_password(e.target.value)}}
                                    />
                                </div>

                        <div className="mt-6">
                            <button 
                                className="font-bpgESM px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md"
                                type = "button"
                                onClick={onResetPassword}
                            >
                                    
                                Reset
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

const ChangePassword = (props:any) => {
    
    const [token, setToken]:any = useState(null);

    useEffect(() => {
        async function getToken() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            setToken(urlParams.get("token"));
        };
        
        getToken();
    }, []);

    return (
        <>
           {token ? <ResetPassword app={props.app}/> : <SendEmail app={props.app}/>}
        </>
    )
}

export default ChangePassword