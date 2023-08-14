import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import { PuffLoader  } from "react-spinners";

const SendEmail = (props:any) => {
    const emailRef:any = useRef()
    const [success, setSuccess]:any = useState(false)
    const [spinner, setSpinner]:any = useState(false)
    const [errors, setErrors]:any = useState(null)

    const onSendLinkToEmail = () => {
        setSpinner(true)
        axios.post(props.app.backendURL + "api/user/auth/users/reset_password/", {email: emailRef.current.value})
            .then(() => {setSuccess(true); setSpinner(false);})
            .catch(err => {
                if(err.response.data.email){
                    setErrors(err.response.data.email)
                    setSpinner(false)
                }
            })
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

            {spinner ?  
                <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center  overflow-hidden">
                    
                    <PuffLoader 
                        color="rgb(180, 210, 115)"
                        size={128}
                    />
                </div>
            :
                success 
            ? 
                <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center  overflow-hidden">
                    <h1 className="text-4xl font-alkSanet text-center text-secondary">
                        The link has been sent. Check your Email {"<"}3
                    </h1>
                </div>
            :
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
                                    ref={emailRef}
                                />
                            </div>

                            <div className="mt-6">
                                <button 
                                    className="px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md"
                                    type = "button"
                                    onClick={onSendLinkToEmail}
                                >
                                        
                                    Send Link To Email
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            }
            
        </>
    )
}

const ResetPassword = (props:any) => {
    const passwordRef:any = useRef()
    const rePasswordRef:any = useRef()

    const [errors, setErrors]:any = useState(null)
    const [spinner, setSpinner]:any = useState(false)

    const onResetPassword = () => {
        setSpinner(true)
        if(passwordRef.current.value === rePasswordRef.current.value){
            axios.post(props.app.backendURL + "api/user/auth/users/reset_password_confirm/", {uid: props.uid, new_password: passwordRef.current.value, token:props.token})
            .then(() =>{
                window.location.href = "/signin"
            })
            .catch(err => {
                let errorText = ""
                if(err.response.data.uid){
                    errorText = "uid: " + err.response.data.user_name
                }else if(err.response.data.token){
                    errorText = "token: " + err.response.data.email
                }else if(err.response.data.password){
                    errorText = "password: " + err.response.data.password
                }
                setErrors(errorText)
                setSpinner(false)
            })
        }else{
            setErrors("Passwords must match!")
        }
        
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
            {spinner ?  
                <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center  overflow-hidden">
                    
                    <PuffLoader 
                        color="rgb(180, 210, 115)"
                        size={128}
                    />
                </div>
            :
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
                                            ref={passwordRef}
                                        
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
                                            ref={rePasswordRef}
                                        />
                                    </div>

                            <div className="mt-6">
                                <button 
                                    className="px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md"
                                    type = "button"
                                    onClick={onResetPassword}
                                >
                                        
                                    Reset
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            }
        </>
    )
}

const ChangePassword = (props:any) => {
    
    const [token, setToken]:any = useState(null);
    const [uid, setuid]:any = useState(null);


    useEffect(() => {
        async function getToken() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            setToken(urlParams.get("token"));
            setuid(urlParams.get("uid"))
        };
        
        getToken();
    }, []);

    return (
        <>
           {(token && uid) ? <ResetPassword app={props.app} token={token} uid={uid}/> : <SendEmail app={props.app}/>}
        </>
    )
}

export default ChangePassword