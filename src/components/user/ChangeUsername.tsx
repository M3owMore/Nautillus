import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import { PuffLoader  } from "react-spinners";
import PasswordInput from "../specials/PasswordInput";

const  ChangeUsername = (props:any) => {

    const [errors, setErrors]:any = useState(null)

    const usernameRef:any = useRef()
    
    const [spinner, setSpinner] = useState(false)
    const [success, setSuccess] = useState(false)


    function onChangeUsername(){
        setSpinner(true)
        let data = {
            user_name: usernameRef.current.value,
        }

        axios.put(props.app.backendURL + "api/user/auth/users/me/", data, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
        .then(() => {
            setSuccess(true)
        })
        .catch(function (error) {
            if (error.response) {
                let errorText = ""
                if(error.response.data.user_name){
                    errorText = "user_name: " + error.response.data.username
                }else if(error.response.data.non_field_errors){
                    errorText = "non_field_errors: " + error.response.data.non_field_errors
                }

                setErrors(errorText);
                setSpinner(false)
            }
          });
    }

    // relocate if not logined
    useEffect(() => {
        if(props.app.user.canUseApp === -1){
            window.location.href = "/signin"
        }
    }, [props.app.user])

    useEffect(() => {
        const keyDownHandler = (event:any) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            onChangeUsername()
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

                    {
                    success 

                    ? 
                        <h1 className="text-4xl font-alkSanet text-center text-secondary">
                            Name changed {"<3"}
                        </h1>

                    :

                    spinner 
                    ? 
                        <PuffLoader 
                            color="rgb(180, 210, 115)"
                            size={128}
                        />
                    : <></>}
                    <div className={spinner ? "hidden" : ""}>
                        <h1 className="text-4xl font-alkSanet text-center text-secondary">
                            {props.app.langJson.words[props.app.lang].changeName}
                        </h1>

                        {
                            (errors === null) ? 
                            <></>:
                            <p className="text-md font-bpgESM text-center text-red-500 m-4 underline">{errors}</p>
                        
                        }

                        <form className="mt-6 flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center flex-col">
                                <div className="mb-2">
                                    <label
                                        htmlFor="username"
                                        className="block text-xs font-semibold text-main"
                                    >
                                        {props.app.langJson.words[props.app.lang].new + " " + props.app.langJson.words[props.app.lang].name}
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
                                        ref={usernameRef}
                                    />
                                </div>
                            </div>
                            


                            <div className="mt-6">
                                <button 
                                    type = "button"
                                    onClick={() => {onChangeUsername()}}
                                    className="px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md">
                                    {props.app.langJson.words[props.app.lang].changeName}
                                </button>
                            </div>
                        </form>

                        
                    </div> 
                    
                </div>
            </div>
        </>
    );
  }
  
  export default ChangeUsername;