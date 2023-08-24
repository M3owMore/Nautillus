
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import { PuffLoader  } from "react-spinners";


const  SignIn = (props:any) => {
    
    const emailRef:any = useRef()
    const passwordRef:any = useRef()

    const [errors, setErrors]:any = useState(null)
    const [spinner, setSpinner] = useState(false)

    useEffect(() => {
        if(props.app.user.canUseApp === 1){
            window.location.href = "/user/home"
        }
    }, [props.app.user])

    const onSignIn =  () => {
            setSpinner(true)
            axios.post(props.app.backendURL + "api/user/auth/login/", {email: emailRef.current.value, password: passwordRef.current.value})
                .then((res) => {
                    props.app.cookies.set('refresh', res.data.tokens.refresh, { path: '/' })
                    props.app.cookies.set('access', res.data.tokens.access, { path: '/' })
                    
                    window.location.href = "/"
                })
                .catch(err => {
                    if(err.response){
                        setErrors(err.response.data.error)   
                    }
                    setSpinner(false)
                })


            
        }
    

    useEffect(() => {
        const keyDownHandler =  (event:any) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            onSignIn()
          }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);
    return (
        <>
            <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center overflow-hidden">
                <div className="w-full p-6 rounded-md max-w-xl flex flex-col justify-center items-center">
                    {spinner 
                        ? 
                            <PuffLoader 
                                color="rgb(180, 210, 115)"
                                size={128}
                            />
                        :
                            <>
                                <h1 className="text-4xl font-alkSanet text-center text-secondary">
                                    {props.app.langJson.words[props.app.lang].signIn}
                                </h1>

                                {
                                    (errors === null) ? 
                                    <></>:
                                    <p className="text-md font-bpgESM text-center text-red-500 m-4 underline">{errors}</p>
                                
                                }

                                <form className="mt-6 flex flex-col justify-center items-center">
                                    <div className="mb-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-xs font-semibold text-main"
                                        >
                                            {props.app.langJson.words[props.app.lang].email}
                                        </label>
                                        <input
                                            ref={emailRef}
                                            type="email"
                                            className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="password"
                                            className="block text-xs font-semibold text-main"
                                        >
                                            {props.app.langJson.words[props.app.lang].password}
                                        </label>
                                        <input
                                            ref={passwordRef}
                                            type="password"
                                            className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                        />
                                    </div>
                                    <Link to="/user/forgotpass"><p className="text-md text-secondary link-underline-2">
                                        {props.app.langJson.words[props.app.lang].forgotPassword}
                                    </p></Link>
                                    <div className="mt-6">
                                        <button 
                                            className="px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md"
                                            type = "button"
                                            onClick={onSignIn}
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
                                        className="ml-4 font-medium text-secondary link-underline-2"
                                    >
                                        {props.app.langJson.words[props.app.lang].signUp}
                                    </p></Link>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    );
  }
  
  export default SignIn;