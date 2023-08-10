import { Link } from "react-router-dom";
import useWindowDimensions from '../js/useWindowDimensions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const  SignUp = (props:any) => {
    const navigate = useNavigate();
    const { width } = useWindowDimensions();
    const [errors, setErrors]:any = useState(null)

    const [user_name, setUser_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [re_password, setRe_password] = useState("")
    


    function onSignUp(){
        let user = {
            user_name: user_name,
            email: email,
            password: password,
            re_password: re_password
        }

        axios.post(props.app.backendURL + "api/user/auth/users/", user)
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
          });;
    }

    return (
        <>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto rounded-md lg:max-w-xl">
                    <h1 className="text-4xl font-semibold text-center text-main">
                    {props.app.langJson.words[props.app.lang].signUp}
                    </h1>

                    {
                        (errors === null) ? 
                        <></>:
                        <p className="text-xl font-semibold text-center text-main m-4 underline">{errors}</p>
                    
                    }

                    <form className="mt-6 flex flex-col justify-center items-center">
                        <div className={"flex justify-center items-center" + ((width >= 600) ? " flex-row" : " flex-col")}>
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
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md "
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
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md "
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
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"
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
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"
                                        onChange={(e) => {setRe_password(e.target.value)}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button 
                                type = "button"
                                onClick={() => {onSignUp()}}
                                className="px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white rounded-md">
                                {props.app.langJson.words[props.app.lang].signUp}
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-row items-center justify-center mt-4">
                        <p className="text-md font-light text-center text-main">
                        {props.app.langJson.words[props.app.lang].haveAcc}{" "}
                        </p>

                        <Link to="/signin"><p
                            className="ml-4 font-medium text-main hover:underline">
                            {props.app.langJson.words[props.app.lang].signIn}
                        </p></Link>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default SignUp;