import Header from "./Header";
import { Outlet, Link } from "react-router-dom";

const  SignIn = (props) => {
    return (
        <>
            <Header scroll = {false} fixed={true} app={props.app}/>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-4xl font-semibold text-center text-main">
                    {props.app.langJson.words[props.app.lang].signIn}
                    </h1>
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
                            />
                        </div>
                        <p
                            className="text-md text-main hover:underline"
                        >
                            {props.app.langJson.words[props.app.lang].forgotPassword}
                        </p>
                        <div className="mt-6">
                            <button className="px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white rounded-md">
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