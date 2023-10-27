import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import { PuffLoader  } from "react-spinners";
import PasswordInput from "../specials/PasswordInput";

const  ChangePassword = (props:any) => {

    const [errors, setErrors]:any = useState(null)

    const oldPasswordRef:any  = useRef()
    const newPasswordRef:any  = useRef()
    const reNewPasswordRef:any = useRef()
    
    const [spinner, setSpinner] = useState(false)
    const [success, setSuccess] = useState(false)


    function onChangePassword(){
        setSpinner(true)
        let user = {
            current_password: oldPasswordRef.current.value,
            new_password: newPasswordRef.current.value,
            re_new_password: reNewPasswordRef.current.value
        }
        console.log(user)
        axios.post(props.app.backendURL + "api/user/auth/users/set_password/", user, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
        .then(() => {
            setSuccess(true)
        })
        .catch(function (error) {
            if (error.response) {
                let errorText = ""
                if(error.response.data.current_password){
                    errorText = "current_password: " + error.response.data.current_password
                }else if(error.response.data.new_password){
                    errorText = "new_password: " + error.response.data.new_password
                }else if(error.response.data.re_new_password){
                    errorText = "re_new_password: " + error.response.data.re_new_password
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
            onChangePassword()
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
                            Password Changed {"<"}3
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
                            {props.app.langJson.words[props.app.lang].changePassword}
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
                                            htmlFor="old_password"
                                            className="block text-xs font-semibold text-main"
                                        >
                                            {props.app.langJson.words[props.app.lang].old + " "+ props.app.langJson.words[props.app.lang].password}
                                        </label>
                                        <PasswordInput  Name="old_password" Ref={oldPasswordRef}/>
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="password"
                                            className="block text-xs font-semibold text-main"
                                        >
                                            {props.app.langJson.words[props.app.lang].new + " " + props.app.langJson.words[props.app.lang].password}
                                        </label>
                                        <PasswordInput  Name="new_password" Ref={newPasswordRef}/>
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="re_password"
                                            className="block text-xs font-semibold text-main"
                                        >
                                            {props.app.langJson.words[props.app.lang].repeatNewPassword}
                                        </label>
                                        <PasswordInput  Name="re_new_password" Ref={reNewPasswordRef}/>
                                </div>
                            </div>

                            <Link to="/user/forgotpass"><p className="text-md text-secondary link-underline-2">
                                {props.app.langJson.words[props.app.lang].forgotPassword}
                            </p></Link>

                            <div className="mt-6">
                                <button 
                                    type = "button"
                                    onClick={() => {onChangePassword()}}
                                    className="px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md">
                                    {props.app.langJson.words[props.app.lang].changePassword}
                                </button>
                            </div>
                        </form>

                        
                    </div> 
                    
                </div>
            </div>
        </>
    );
  }
  
  export default ChangePassword;