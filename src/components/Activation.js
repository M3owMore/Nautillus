import Header from "./Header";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
const  Activation = (props) => {
    const [activated, setActivated] = useState(false)
    return (
        <>
            <Header scroll = {false} fixed={true} app={props.app}/>
            <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-main">
                {activated 
                ? 
                    <p className="text-4xl text-center my-2">Your account has been activated successfully</p>
                :
                    <p className="text-4xl text-center my-2">Your account can't be activated</p>
                }
            </div>
        </>
    );
  }
  
  export default Activation;