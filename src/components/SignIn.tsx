
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import { PuffLoader  } from "react-spinners";


const  SignIn = (props:any) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors]:any = useState(null)
    const [spinner, setSpinner] = useState(false)

    const onSignIn = async () => {
            setSpinner(true)
            const data = await axios.post(props.app.backendURL + "api/user/auth/login/", {email, password})
            setSpinner(false)

            if(data.data.error){
                setErrors(data.data.error)   
                return
            }
            
            props.app.cookies.set('refresh', data.data.tokens.refresh, { path: '/' })
            props.app.cookies.set('access', data.data.tokens.access, { path: '/' })
            
            window.location.href = "/user/home"
        }
    

    useEffect(() => {
        const keyDownHandler = (event:any) => {
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
                                    <div className="mb-2">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-semibold text-main"
                                        >
                                            {props.app.langJson.words[props.app.lang].password}
                                        </label>
                                        <input
                                            type="password"
                                            className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                            onChange={(e) => {setPassword(e.target.value)}}

                                        />
                                    </div>
                                    <Link to="/forgotpass"><p className="text-md text-secondary link-underline-2">
                                        {props.app.langJson.words[props.app.lang].forgotPassword}
                                    </p></Link>
                                    <div className="mt-6">
                                        <button 
                                            className="font-bpgESM px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md"
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