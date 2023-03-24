import Header from "./Header";
import { Outlet, Link } from "react-router-dom";
import useWindowDimensions from '../js/useWindowDimensions';
import axios from 'axios';

const  SignUp = (props) => {

    const { height, width } = useWindowDimensions();
    let user = {
        user_name: "",
        email: "",
        password: "",
        re_password: "",
    }
    return (
        <>
            <Header scroll = {false} fixed={true} app={props.app}/>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-4xl font-semibold text-center text-main">
                    {props.app.langJson.words[props.app.lang].signUp}
                    </h1>
                    <form className="mt-6 flex flex-col justify-center items-center" action="" method="POST" >
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
                                        onChange={(e) => {user.user_name = e.target.value}}
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
                                        onChange={(e) => {user.email = e.target.value}}
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
                                        onChange={(e) => {user.password = e.target.value}}
                                    
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
                                        onChange={(e) => {user.re_password = e.target.value}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button 
                                action = "button"
                                onClick={() => {axios.post("", user)}}
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