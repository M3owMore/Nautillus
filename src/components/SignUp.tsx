import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { PuffLoader  } from "react-spinners";

const  SignUp = (props:any) => {
    const navigate = useNavigate();
    const [errors, setErrors]:any = useState(null)

    const [user_name, setUser_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [re_password, setRe_password] = useState("")
    
    const [spinner, setSpinner] = useState(false)


    async function onSignUp(){
        let user = {
            user_name: user_name,
            email: email,
            password: password,
            re_password: re_password
        }

        await axios.post(props.app.backendURL + "api/user/auth/users/", user)
        .then(() => {navigate('/signin');})
        .catch(function (error) {
            if (error.response) {
                let errorText = ""
                if(error.response.data.user_name){
                    errorText = "name: " + error.response.data.user_name
                }else if(error.response.data.email){
                    errorText = "email: " + error.response.data.email
                }else if(error.response.data.password){
                    errorText = "password: " + error.response.data.password
                }else if(error.response.data.re_password){
                    errorText = "re_password: " + error.response.data.re_password
                }else if(error.response.data.non_field_errors){
                    errorText = "non_field_errors: " + error.response.data.non_field_errors
                }

                setErrors(errorText);
            }
          });
          setSpinner(false)
    }
    useEffect(() => {
        const keyDownHandler = (event:any) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            setSpinner(true)
            onSignUp()
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
                    : <></>}
                    <div className={spinner ? "hidden" : ""}>
                        <h1 className="text-4xl font-alkSanet text-center text-secondary">
                            {props.app.langJson.words[props.app.lang].signUp}
                        </h1>

                        {
                            (errors === null) ? 
                            <></>:
                            <p className="text-md font-bpgESM text-center text-red-500 m-4 underline">{errors}</p>
                        
                        }

                        <form className="mt-6 flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center flex-col  tablet:flex-row">
                                <div className="flex flex-col justify-center items-center mx-6">
                                    <div className="mb-2">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-semibold text-main"
                                        >
                                            {props.app.langJson.words[props.app.lang].name}
                                        </label>
                                        <input
                                            type="text"
                                            className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                            name="name"
                                            onChange={(e) => {setUser_name(e.target.value)}}
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-main"
                                        >
                                            {props.app.langJson.words[props.app.lang].email}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                            onChange={(e) => {setEmail(e.target.value)}}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center mx-6">
                                    <div className="mb-2">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-semibold text-main"
                                        >
                                            {props.app.langJson.words[props.app.lang].password}
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
                                            {props.app.langJson.words[props.app.lang].repeatPassword}
                                        </label>
                                        <input
                                            type="password"
                                            name="re_password"
                                            className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                            onChange={(e) => {setRe_password(e.target.value)}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button 
                                    type = "button"
                                    onClick={() => {setSpinner(true); onSignUp()}}
                                    className="font-bpgESM px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md">
                                    {props.app.langJson.words[props.app.lang].signUp}
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-row items-center justify-center mt-4">
                            <p className="text-md font-light text-center text-main">
                            {props.app.langJson.words[props.app.lang].haveAcc}{" "}
                            </p>

                            <Link to="/signin"><p
                                className="ml-4 font-medium text-secondary link-underline-2">
                                {props.app.langJson.words[props.app.lang].signIn}
                            </p></Link>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </>
    );
  }
  
  export default SignUp;